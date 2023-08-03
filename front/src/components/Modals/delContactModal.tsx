import { useContext } from "react";
import { useModal } from "../../hooks";
import { UserContext } from "../../providers/UserProviders";
import { DelContModalStyle } from "./styles";

export const DelContactModal = () => {
  const { closeModal, contactId } = useModal();
  const { delCont } = useContext(UserContext);
  // const token = localStorage.getItem("@token");
  const id = contactId as string;
  // const delContactF = async (id: string) => {
  //   await api.delete(`/contacts/${id}`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  // };
  
  return (
    <DelContModalStyle>
      <span onClick={() => closeModal()}>X</span>
      <p>Tem certeza que deseja deletar esse contato?</p>
      <div className="divBtns">
        <button className="yes" onClick={() => delCont(id)}>
          Sim
        </button>
        <button className="not" onClick={() => closeModal()}>
          Não
        </button>
      </div>
    </DelContModalStyle>
  );
};
