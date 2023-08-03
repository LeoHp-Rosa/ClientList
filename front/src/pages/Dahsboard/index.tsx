/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AiOutlineEdit,
  AiOutlineMail,
  AiOutlineUser,
  AiOutlineUserAdd,
} from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaTrash } from "react-icons/fa";
import { FaUserPen, FaUserXmark } from "react-icons/fa6";
import { GiSmartphone } from "react-icons/gi";
import { GrLogout } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { DelContactModal } from "../../components/Modals/delContactModal";
import { useAuth, useModal } from "../../hooks";
import { DashBStyle } from "./styles";

export const Dashboard = () => {
  const { user, contacts } = useAuth();
  const { openModal, setContactId } = useModal();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phoneNumber;
  };

  const ModalDelcont = (id: string) => {
    setContactId(id);
    openModal(<DelContactModal />);
  };

  return (
    <DashBStyle>
      <header>
        <AiOutlineUserAdd className="addUser" />
        <p>Adicionar novo contato</p>
      </header>
      <h1>Contatos</h1>
      <section>
        <div className="userDetails">
          <BiSolidUserCircle className="imgUser" />
          {user && (
            <div className="mainUser">
              <p>
                {user.first_name} {user.last_name}
              </p>
              <p>{user.email}</p>
              <p>{formatPhoneNumber(user.phone)}</p>
            </div>
          )}
          <div className="contUser">
            <FaUserPen className="editUser" title="Editar Usuario" />
            <FaUserXmark className="delUser" title="Deletar Usuario" />
            <GrLogout
              className="logout"
              onClick={() => logout()}
              title="Sair"
            />
          </div>
        </div>
        <ul>
          {contacts?.map((contact) => (
            <li key={contact.id}>
              <div className="infoCont">
                <div className="contact">
                  <AiOutlineUser />
                  <p>
                    {contact.first_name} {contact.last_name}
                  </p>
                </div>
                <div className="mail">
                  <AiOutlineMail />
                  <p>{contact.email}</p>
                </div>
                <div className="phone">
                  <GiSmartphone />
                  <p>{formatPhoneNumber(contact.phone)}</p>
                </div>
              </div>
              <div className="EditDel">
                <AiOutlineEdit className="edit" title="Editar Contato" />
                <FaTrash
                  className="del"
                  title="Deletar Contato"
                  onClick={() => {
                    ModalDelcont(contact.id);
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </DashBStyle>
  );
};
