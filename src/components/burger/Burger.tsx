import s from "./Burger.module.css";

type Props = {
  handleMenu: () => void;
};
const Burger = ({ handleMenu }: Props) => {
  return (
    <div className={s.navBurger} onClick={handleMenu}>
      <span className={s.burgerLine}></span>
      <span className={s.burgerLine}></span>
      <span className={s.burgerLine}></span>
    </div>
  );
};

export default Burger;
