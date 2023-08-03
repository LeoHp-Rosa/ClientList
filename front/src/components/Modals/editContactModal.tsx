import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  UpdateContactData,
  UpdateContactSchema,
} from "../../schemas/updateContact";
// import { EditContactModalStyle } from "./styles";

interface EditContactModalProps {
  contactId: number;
}

const EditContactModal = ({ contactId }: EditContactModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UpdateContactData>({
    resolver: zodResolver(UpdateContactSchema),
  });
//   const { updateContact } = useContacts();

  const onSubmit = (data: UpdateContactData) => {
    // updateContact(contactId, data);
  };

  return (
    <div>
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
        <button type="submit" className="btnForm">
          Salvar Alterações
        </button>
      </form>
    </div>
  );
};

export default EditContactModal;
