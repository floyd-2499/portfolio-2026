import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import logo from "../../../assets/logo/logo-dark.svg";

const menuData = [
  { key: 1, name: "Home", id: "#home" },
  { key: 2, name: "Skills", id: "#skills" },
  { key: 3, name: "Experience", id: "#experience" },
  { key: 4, name: "Projects", id: "#projects" },
];

const HeaderMain = () => {
  const [activeMenu, setActiveMenu] = useState("#home");

  const handleMenuClick = ({menu}) => {
    setActiveMenu(menu?.id)
  }

  return (
    <div className={styles["header-main"]}>
      <div className={styles["logo-section"]}>
        <Image alt="Floyd Manuel Dsouza Portfolio Logo" src={logo} />
      </div>
      <div className={styles["menu-section"]}>
        {menuData?.map((menu) => {
          return (
            <Link
              key={menu?.key}
              href={menu?.id}
              className={`${styles["menu-item"]} ${(activeMenu === menu?.id) ? styles["menu-active"] : ""}`}
              onClick={() => handleMenuClick({menu: menu})}
            >
              {menu?.name}
            </Link>
          );
        })}
      </div>
      <div className={styles["hire-section"]}>
        <Link href="#contact" className={styles["hire-section-button"]}>
          Hire me?
        </Link>
      </div>
    </div>
  );
};

export default HeaderMain;
