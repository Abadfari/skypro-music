import Image from "next/image";
import React from "react";
import s from "./ModalBlock.module.css";

const ModalBlock = ({ children }) => {
  return (
    <div className={s.modalBlock}>
      <form className={s.modalFormLogin} action="#">
        <a href="../">
          <div className={s.modalLogo}>
            <Image
              src="/img/logo_modal.png"
              alt="logo"
              width={140}
              height={21}
            />
          </div>
        </a>
        {children}
      </form>
    </div>
  );
};

export default ModalBlock;
