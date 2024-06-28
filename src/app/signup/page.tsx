import ModalBlock from "@/components/modal-block/ModalBlock";
import ModalButton from "@/components/modal-button/ModalButton";
import ModalInput from "@/components/modal-input/ModalInput";
import Image from "next/image";

const SignUp = () => {
  return (
    <div className="container-signup">
      <ModalBlock>
        <ModalInput type="text" name="login" placeholder="Почта" />
        <ModalInput type="password" name="password" placeholder="Пароль" />
        <ModalInput
          type="password"
          name="password"
          placeholder="Повторите пароль"
        />
        <ModalButton type="primary">
          Зарегистрироваться
        </ModalButton>
      </ModalBlock>
    </div>
  );
};

export default SignUp;
