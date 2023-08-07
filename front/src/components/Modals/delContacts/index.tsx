import { useClient, useModal } from "../../../hooks";
import { DelContModalStyle } from "./styles";

export const DelContactModal = () => {
  const { closeModal, contactId } = useModal();
  const { delCont } = useClient();

  const id = contactId as string;

  return (
    <DelContModalStyle>
      <span onClick={() => closeModal()}>X</span>
      <p>Tem certeza que deseja deletar esse contato?</p>
      <div className="divBtns">
        <button
          className="yes"
          onClick={() => {
            delCont(id);
            closeModal();
          }}
        >
          Sim
        </button>
        <button className="not" onClick={() => closeModal()}>
          Não
        </button>
      </div>
    </DelContModalStyle>
  );
};
