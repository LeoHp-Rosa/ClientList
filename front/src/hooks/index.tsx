import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { ModalContext } from "../providers/ModalProviders";
import { UserContext } from "../providers/UserProviders";

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};

export const useClient = () => {
  const clientContext = useContext(UserContext);
  return clientContext;
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
