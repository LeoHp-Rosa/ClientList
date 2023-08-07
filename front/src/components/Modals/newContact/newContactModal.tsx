import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useClient, useModal } from "../../../hooks";
import { IContact } from "../../../providers/UserProviders";
import { NewContactData, NewContactSchema } from "../../../schemas/newContact";
import { NewContactModalStyle } from "./styles";

const NewContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewContactData>({
    resolver: zodResolver(NewContactSchema),
  });
  const { addContact } = useClient();
  const { closeModal } = useModal();

  const id = localStorage.getItem("@userId");
  const userId = id as string;

  const onSubmit = (data: NewContactData) => {
    const contactData: IContact = {
      id: userId,
      registDate: new Date().toDateString(),
      ...data,
    };
    addContact(contactData);
    closeModal();
  };

  return (
    <NewContactModalStyle>
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
        <button type="submit" className="addContact">
          Adicionar Contato
        </button>
      </form>
    </NewContactModalStyle>
  );
};

export default NewContactModal;
