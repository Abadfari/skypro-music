import Image from "next/image";
import Burger from "../burger/Burger";
import Logo from "../logo/Logo";
import NavMenu from "../nav-menu/NavMenu";

const Nav = () => {
  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <Logo width={113} height={17} />
      </div>
      <Burger />
      <NavMenu />
    </nav>
  );
};

export default Nav;
