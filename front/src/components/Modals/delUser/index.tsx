import { useClient, useModal } from "../../../hooks";
import { DelContModalStyle } from "./styles";

export const DelUserModal = () => {
  const { closeModal } = useModal();
  const { delUser } = useClient();

  const delUserConf = () => {
    delUser();
    closeModal();
  };

  return (
    <DelContModalStyle>
      <span onClick={() => closeModal()}>X</span>
      <p>Tem certeza que deseja seu usuario?</p>
      <p>Todos seus contatos serão perdidos.</p>
      <div className="divBtns">
        <button
          className="yes"
          onClick={() => {
            delUserConf();
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
