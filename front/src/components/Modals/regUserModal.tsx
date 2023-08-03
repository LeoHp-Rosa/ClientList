import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../hooks";
import { RegisterData, RegisterSchema } from "../../schemas/register";
// import { RegisterUserModalStyle } from "./styles";

const RegisterUserModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(RegisterSchema),
  });
//   const { registerUser } = useAuth();

  return (
    <div>
      <form onSubmit={handleSubmit(registerUser)}>
        <div>
          <label htmlFor="first_name">Nome</label>
          <input type="text" id="first_name" {...register("first_name")} />
          {errors.first_name && <p>{errors.first_name.message}</p>}
        </div>
        <div>
          <label htmlFor="last_name">Sobrenome</label>
          <input type="text" id="last_name" {...register("last_name")} />
          {errors.last_name && <p>{errors.last_name.message}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label htmlFor="phone">Telefone</label>
          <input type="text" id="phone" {...register("phone")} />
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit" className="btnForm">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default RegisterUserModal;
