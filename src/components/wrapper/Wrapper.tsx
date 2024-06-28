import { FC, PropsWithChildren } from "react";
import s from "./Wrapper.module.css";

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Wrapper;
