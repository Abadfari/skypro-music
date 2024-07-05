import Burger from "../burger/Burger";
import Logo from "../logo/Logo";
import NavMenu from "../nav-menu/NavMenu";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.mainNav}>
      <div className={s.navLogo}>
        <Logo width={113} height={17} />
      </div>
      <NavMenu />
    </nav>
  );
};

export default Nav;
