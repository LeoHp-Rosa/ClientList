import jwt_decode from "jwt-decode";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginData } from "../schemas/login";
import { api } from "../services/api";

interface IAuthProviderProps {
  children: ReactNode;
}

interface LoginResponse {
  token: string;
}

interface IAuthContextValues {
  singIn: (data: LoginData) => Promise<void>;
  user: IUser | null;
  contacts: IContact[] | null;
}

interface DecodedToken {
  sub: string;
}
interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate: string;
}

interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate: string;
}

export const AuthContext = createContext({} as IAuthContextValues);

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContact[] | null>(null);

  const getUser = async (userId: string, token: string) => {
    try {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      const response = await api.get(`/clients/${userId}`);
      setUser(response.data as IUser);
      setContacts(response.data.contacts as IContact[]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const id = localStorage.getItem("@userId");

    if (token && id) {
      getUser(id, token);
    }

    if (!token) {
      navigate("/");
    } else {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const decodedToken = (token: string): string | null => {
    try {
      const decodedToken: DecodedToken = jwt_decode(token);
      const userId: string = decodedToken.sub;
      return userId;
    } catch (error) {
      console.error("Erro ao decodificar o token:", error);
      return null;
    }
  };

  const singIn = async (data: LoginData) => {
    try {
      const response = await api.post<LoginResponse>("/login", data);

      const { token } = response.data;
      const userId = decodedToken(token);

      if (userId) {
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        toast.success("Login Efetuado com Sucesso", {
          autoClose: 3000,
          theme: "dark",
        });
        localStorage.setItem("@token", token);
        localStorage.setItem("@userId", userId);
        getUser(userId, token);

        setTimeout(() => {
          navigate("/dashboard");
        }, 3500);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      const message = err.response?.data?.message;

      toast.error(message, {
        autoClose: 3000,
        theme: "dark",
      });
    }
  };

  return (
    <AuthContext.Provider value={{ singIn, user, contacts }}>
      {children}
    </AuthContext.Provider>
  );
};
