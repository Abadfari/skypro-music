import clsx from "clsx";
import s from "./ModalButton.module.css"

const ModalButton = ({ children, type }) => {
  return (
    <button className={clsx(s.modalButton, s[type])}>
      {children}
    </button>
  );
};

export default ModalButton;
