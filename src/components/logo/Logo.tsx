import Image from "next/image";
import s from "./Logo.module.css";
import { FC } from "react";

type Props = { width: number; height: number };
const Logo: FC<Props> = ({ width, height }) => {
  return (
    <Image
      className={s.logoImage}
      src="/img/logo.png"
      alt="логотип Skypro Music"
      width={width}
      height={height}
    />
  );
};

export default Logo;
