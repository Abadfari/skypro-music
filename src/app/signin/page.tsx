import ModalBlock from "@/components/modal-block/ModalBlock";
import ModalButton from "@/components/modal-button/ModalButton";
import ModalInput from "@/components/modal-input/ModalInput";
import s from "./Page.module.css";

const SignIn = () => {
  return (
    <div className="container-enter">
      <ModalBlock>
        <ModalInput type="text" name="login" placeholder="Почта" />
        <ModalInput type="password" name="password" placeholder="Пароль" />
        <div className={s.modalButtonWrapper}>
          <ModalButton type="primary">Войти</ModalButton>
          <ModalButton type="secondary">Зарегистрироваться</ModalButton>
        </div>
      </ModalBlock>
    </div>
  );
};

export default SignIn;
