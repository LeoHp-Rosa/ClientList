import { ReactNode } from "react";
import { AuthProvider } from "./AuthProviders";
import { ModalProvider } from "./ModalProviders";
import { UserProvider } from "./UserProviders";

interface IProvider {
  children: ReactNode;
}

export const Provider = ({ children }: IProvider) => {
  return (
    <ModalProvider>
      <AuthProvider>
        <UserProvider>{children}</UserProvider>
      </AuthProvider>
    </ModalProvider>
  );
};
