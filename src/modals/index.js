import ModalWrapper from "@/shared/ModalWrapper";
import { useModal } from "@/context/ModalContext";

import { modals } from "./modals";

const Modal = () => {
  const modal = useModal((state) => state.modal);
  const closeModal = useModal((state) => state.closeModal);

  if (!modal.isOpen) return null;

  const ModalComponent = modals?.find((m) => m.name === modal.name)?.component;

  const props = modal?.props;

  return (
    <ModalWrapper>
      <ModalComponent closeModal={closeModal} {...props} />
    </ModalWrapper>
  );
};
export default Modal;
