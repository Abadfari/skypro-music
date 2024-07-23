"use client";

import { signUp } from "@/api/authApi";
import ModalBlock from "@/components/modal-block/ModalBlock";
import ModalButton from "@/components/modal-button/ModalButton";
import ModalInput from "@/components/modal-input/ModalInput";
import { useRouter } from "next/navigation";

import { ChangeEvent, useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [error, setError] = useState("");

  const router = useRouter();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function userSignUp(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (
      !formData.email.trim() ||
      !formData.password.trim() ||
      !formData.username.trim()
    ) {
      setError("Все поля должны быть заполнены");
      return;
    }
    signUp({ data: formData })
      .then(() => {
        router.push("/signin");
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <div className="container-signup">
      <ModalBlock>
        <ModalInput
          type="text"
          name="email"
          placeholder="Почта"
          onChange={onChange}
          value={formData.email}
        />
        <ModalInput
          type="password"
          name="password"
          placeholder="Пароль"
          onChange={onChange}
          value={formData.password}
        />
        <ModalInput
          type="text"
          name="username"
          placeholder="Введите имя"
          onChange={onChange}
          value={formData.username}
        />
        <div>{error}</div>
        <ModalButton type="primary" onClick={userSignUp}>
          Зарегистрироваться
        </ModalButton>
      </ModalBlock>
    </div>
  );
};

export default SignUp;
