import { ChangeEvent } from "react";
import s from "./ModalInput.module.css";

type Props = {
  type: string;
  name: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
const ModalInput = ({ type, placeholder, name, onChange, value }: Props) => {
  return (
    <input
      value={value}
      onChange={onChange}
      className={s.modalInput}
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default ModalInput;
