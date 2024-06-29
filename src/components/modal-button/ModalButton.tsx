import clsx from "clsx";
import s from "./ModalButton.module.css";
import { FC, PropsWithChildren } from "react";

type Props = { type: string };

const ModalButton: FC<PropsWithChildren<Props>> = ({ children, type }) => {
  return <button className={clsx(s.modalButton, s[type])}>
    {children}
    </button>;
};

export default ModalButton;
