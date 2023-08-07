import { useContext } from "react";

import { ModalContext } from "../providers/ModalProviders";
import { UserContext } from "../providers/UserProviders";

export const useClient = () => {
  const clientContext = useContext(UserContext);
  return clientContext;
};

export const useModal = () => {
  const modalContext = useContext(ModalContext);
  return modalContext;
};
