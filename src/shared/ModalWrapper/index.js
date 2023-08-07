import Modal from "react-modal";
import { useModal } from "@/context/ModalContext";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999999,
    backgroundColor: "rgba(0,0,0, 0.7)",
    transition: "300ms all",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    border: "none",
    padding: 0,
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
  },
};

export default function ModalWrapper({ children }) {
  const isOpen = useModal((state) => state.modal.isOpen);
  const closeModal = useModal((state) => state.closeModal);

  return (
    <Modal
      isOpen={isOpen}
      closeTimeoutMS={500}
      onRequestClose={closeModal}
      style={customStyles}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
}
