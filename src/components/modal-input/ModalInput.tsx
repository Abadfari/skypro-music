import s from "./ModalInput.module.css";

const ModalInput = ({ type, placeholder, name }) => {
  return (
    <input
      className={s.modalInput}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default ModalInput;
