import { ReactNode, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

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

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContextValue {
  addContact: (data: IContact) => Promise<void>;
  delCont: (id: string) => void;
  delUser: (userId: string) => Promise<void>;
  editCont: (data: IContact, userId: string) => Promise<void>;
  editUser: (data: IContact, userId: string) => Promise<void>;
}

export const UserContext = createContext({} as IUserContextValue);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();

  const addContact = async (data: IUser) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.post("/contacts", data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    }
  };

  const delUser = async (userId: string) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        await api.delete(`/clients/${userId}`);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    }
  };

  const editUser = async (data: IUser, userId: string) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        const response = await api.patch(`/clients/${userId}`, data);
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    }
  };

  const delCont = async (userId: string) => {
    const token = localStorage.getItem("@token");

    // if (token) {
    //   api.defaults.headers.common.Authorization = `Bearer ${token}`

    // } else {
    //   toast.error("Token não encontrado.", {
    //     autoClose: 3000,
    //     theme: "dark",
    //   });
    //   setTimeout(() => {
    //     navigate("/dashboard");
    //   }, 3500);
    // }
    await api.delete(`/contacts/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const editCont = async (data: IContact, userId: string) => {
    const token = localStorage.getItem("@token");

    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
      try {
        await api.patch(`/contacts/${userId}`, data);
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Token não encontrado.", {
        autoClose: 3000,
        theme: "dark",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 3500);
    }
  };

  return (
    <UserContext.Provider
      value={{ delCont, addContact, delUser, editUser, editCont }}
    >
      {children}
    </UserContext.Provider>
  );
};
