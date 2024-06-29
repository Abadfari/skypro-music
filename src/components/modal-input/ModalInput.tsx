import s from "./ModalInput.module.css";

type Props = {
  type: string;
  name: string;
  placeholder: string;
};
const ModalInput = ({ type, placeholder, name }: Props) => {
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
