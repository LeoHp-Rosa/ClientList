import { ReactNode } from "react";

import { ModalProvider } from "./ModalProviders";
import { UserProvider } from "./UserProviders";

interface IProvider {
  children: ReactNode;
}

export const Provider = ({ children }: IProvider) => {
  return (
    <UserProvider>
      <ModalProvider>{children}</ModalProvider>
    </UserProvider>
  );
};
