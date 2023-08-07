import jwt_decode from "jwt-decode";
import { ReactNode, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginData } from "../schemas/login";
import { RegisterData } from "../schemas/register";
import { UpdateContactData } from "../schemas/updateContact";
import { EditUserData } from "../schemas/updateUser";
import { api } from "../services/api";

export interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate: string;
}
interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  registDate: string;
}
interface IUserProviderProps {
  children: ReactNode;
}
interface LoginResponse {
  token: string;
}
interface IUserContextValue {
  addContact: (data: IContact) => Promise<void>;
  delCont: (id: string) => void;
  delUser: () => Promise<void>;
  editCont: (data: UpdateContactData) => Promise<void>;
  editUser: (data: EditUserData) => Promise<void>;
  singIn: (data: LoginData) => Promise<void>;
  regUser: (data: RegisterData) => Promise<void>;
  user: IUser | null;
  contacts: IContact[] | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}
interface DecodedToken {
  sub: string;
}
export const UserContext = createContext({} as IUserContextValue);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("@userId");

  const [user, setUser] = useState<IUser | null>(null);
  const [contacts, setContacts] = useState<IContact[]>([]);

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
  const addContact = async (data: IContact) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.post("/contacts", data);
        toast.success("Contato adicionado com sucesso!", {
          autoClose: 3000,
          theme: "dark",
        });
        setContacts((prevContacts) => [...prevContacts, response.data]);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  };
  const delUser = async () => {
    const token = localStorage.getItem("@token");
    const userId = localStorage.getItem("@userId");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.delete(`/clients/${userId}`);
        if (response) {
          localStorage.clear();
          navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  };
  const editUser = async (data: EditUserData) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.patch(`/clients/${userId}`, data);
        setUser(response.data);
        toast.success("Informações atualizadas com sucesso!", {
          autoClose: 3000,
          theme: "dark",
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  };
  const delCont = async (userId: string) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
    await api.delete(`/contacts/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };
  const editCont = async (data: UpdateContactData) => {
    const token = localStorage.getItem("@token");
    const userId = JSON.parse(localStorage.getItem("@contId")!);

    if (token && userId) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const response = await api.patch(`/contacts/${userId}`, data);

        const updatedContactIndex = contacts.findIndex(
          (contact) => contact.id === userId
        );

        if (updatedContactIndex !== -1) {
          const updatedContacts = [...contacts];

          updatedContacts[updatedContactIndex] = response.data;

          setContacts(updatedContacts);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/");
      }, 3500);
    }
  };
  const regUser = async (data: RegisterData) => {
    const response = await api.post("/clients", data);
    if (response) {
      toast.success("Usuario registrado com sucesso!", {
        autoClose: 3000,
        theme: "dark",
      });
    }
  };
  return (
    <UserContext.Provider
      value={{
        delCont,
        addContact,
        delUser,
        editUser,
        editCont,
        singIn,
        user,
        contacts,
        setUser,
        regUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
