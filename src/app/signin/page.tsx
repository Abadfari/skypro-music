"use client";

import ModalBlock from "@/components/modal-block/ModalBlock";
import ModalButton from "@/components/modal-button/ModalButton";
import ModalInput from "@/components/modal-input/ModalInput";
import s from "./Page.module.css";
import { ChangeEvent, useState } from "react";
import { signIn } from "@/api/authApi";
import { useAppDispatch } from "@/store/store";
import { setUser } from "@/store/features/authSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function userLogin(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!formData.email.trim() || !formData.password.trim()) {
      setError("Все поля должны быть заполнены");
      return;
    }
    signIn({ data: formData })
      .then((result) => {
        dispatch(setUser(result));
        router.push("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <div className="container-enter">
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
        <div className={s.errorText}>{error}</div>
        <div className={s.modalButtonWrapper}>
          <ModalButton type="primary" onClick={userLogin}>
            Войти
          </ModalButton>
          <Link href="/signup">
            <ModalButton type="secondary">Зарегистрироваться</ModalButton>
          </Link>
        </div>
      </ModalBlock>
    </div>
  );
};

export default SignIn;
