import SideBarBlock from "../side-bar-block/SideBarBlock";
import SideBarPersonal from "../side-bar-personal/SideBarPersonal";
import s from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={s.mainSidebar}>
      <SideBarPersonal />
      <SideBarBlock />
    </div>
  );
};

export default SideBar;
