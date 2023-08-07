import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useClient, useModal } from "../../../hooks";
import { EditUserData, EditUserSchema } from "../../../schemas/updateUser";
import { EditUserModalStyle } from "./styles";

export const EditUserModal = () => {
  const { closeModal } = useModal();
  const { editUser } = useClient();

  const userInf = JSON.parse(localStorage.getItem("@userInf")!);
  const user = userInf;
  console.log(user)
  const dataOldUser = {
    first_name: user?.first_name,
    last_name: user?.last_name,
    phone: user?.phone,
    email: user?.email,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditUserData>({
    resolver: zodResolver(EditUserSchema),
    defaultValues: dataOldUser,
  });

  const onSubmit = (data: EditUserData) => {
    editUser(data);
    closeModal();
  };

  return (
    <EditUserModalStyle>
      <span
        className="closeModal"
        onClick={() => {
          closeModal();
        }}
      >
        X
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          {errors.phone && <p>{errors.phone.message}</p>}
        </div>
        <button type="submit" className="addContact">
          Salvar Alterações
        </button>
      </form>
    </EditUserModalStyle>
  );
};
