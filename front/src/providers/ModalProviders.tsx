/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, createContext, useState } from "react";
import ReactModal from "react-modal";

interface IModalProviderProps {
  children: ReactNode;
}

interface ImodalContextValues {
  isModalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  setContactId: React.Dispatch<React.SetStateAction<string | null>>;
  contactId: string | null;
}

export const ModalContext = createContext({} as ImodalContextValues);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode | null>(
    null
  );
  const [contactId, setContactId] = useState<string | null>(null);

  const customStyles = {
    content: {
      borderRadius: "10px",
      backgroundColor: "var(--ash-gray)",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "transparent",
    },
  };

  const openModal = (content: React.ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openModal,
        closeModal,
        setModalOpen,
        setContactId,
        contactId,
      }}
    >
      {children}
      <ReactModal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        {modalContent}
      </ReactModal>
    </ModalContext.Provider>
  );
};
