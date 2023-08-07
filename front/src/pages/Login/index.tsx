import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import RegisterUserModal from "../../components/Modals/regUser/regUserModal";
import { useClient, useModal } from "../../hooks";
import { LoginData, LoginSchema } from "../../schemas/login";
import { LoginPageStyle } from "./styles";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(LoginSchema),
  });
  const { singIn } = useClient();
  const { openModal } = useModal();

  const ModalRegUser = () => {
    openModal(<RegisterUserModal />);
  };

  return (
    <LoginPageStyle>
      <img src="./Contacts List.svg" alt="" />
      <form onSubmit={handleSubmit(singIn)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="btnForm">
          Login
        </button>
      </form>
      <div className="noUser">
        <h1>Não possui cadastro?</h1>
        <span
          onClick={() => {
            ModalRegUser();
          }}
        >
          Faça cadastro clicando aqui
        </span>
      </div>
    </LoginPageStyle>
  );
};

export default Login;
