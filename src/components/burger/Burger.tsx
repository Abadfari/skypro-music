import s from "./Burger.module.css";

const Burger = () => {
  return (
    <div className={s.navBurger}>
      <span className={s.burgerLine}></span>
      <span className={s.burgerLine}></span>
      <span className={s.burgerLine}></span>
    </div>
  );
};

export default Burger;
