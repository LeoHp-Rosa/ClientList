import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./providers/AuthProviders";
import { ModalProvider } from "./providers/ModalProviders";
import { UserProvider } from "./providers/UserProviders";
import { RouteMain } from "./routes";

export const App = () => {
  return (
    <>
      <ModalProvider>
        <UserProvider>
          <AuthProvider>
            <RouteMain></RouteMain>
          </AuthProvider>
        </UserProvider>
      </ModalProvider>
    </>
  );
};
