import clsx from "clsx";
import s from "./ModalButton.module.css";
import { FC, PropsWithChildren } from "react";

type Props = {
  type: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const ModalButton: FC<PropsWithChildren<Props>> = ({
  children,
  type,
  onClick,
}) => {
  return (
    <button onClick={onClick} className={clsx(s.modalButton, s[type])}>
      {children}{" "}
    </button>
  );
};

export default ModalButton;
