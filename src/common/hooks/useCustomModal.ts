import { useState } from "react";

const useCustomModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

 const onCloseModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onCloseModal,
    onOpenModal
  }
};

export default useCustomModal;
