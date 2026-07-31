import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.scss";
import logo from "../../../assets/logo/logo-dark.svg";
import { FaBars } from "react-icons/fa";
import { FaX, FaXmark } from "react-icons/fa6";


const menuData = [
  { key: 1, name: "Home", id: "#home" },
  { key: 2, name: "Skills", id: "#skills" },
  { key: 3, name: "Experience", id: "#experience" },
  { key: 4, name: "Projects", id: "#projects" },
];

const HeaderMain = () => {
  const [activeMenu, setActiveMenu] = useState("#home");
  const [deviceWidth, setDeviceWidth] = useState(0);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenuClick = ({ menu }) => {
    setActiveMenu(menu?.id || menuData[0]?.id)
  }

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu)
  }

  const menuSection = () => {
    return (
      <>
        <div className={styles["menu-section"]}>
          {menuData?.map((menu) => {
            return (
              <Link
                key={menu?.key}
                href={menu?.id}
                className={`${styles["menu-item"]} ${(activeMenu === menu?.id) ? styles["menu-active"] : ""}`}
                onClick={() => handleMenuClick({ menu: menu })}
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
      </>
    )
  }

  useEffect(() => {
    const updateWidth = () => setDeviceWidth(window.innerWidth);

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  return (
    <div className={styles["header-main"]}>
      <div className={styles["logo-section"]}>
        <Image alt="Floyd Manuel Dsouza Portfolio Logo" src={logo} />
      </div>

      {deviceWidth < 800 ? (
        <>
          <div className={styles["icons-container"]} onClick={() => handleMobileMenu()}>
            {!showMobileMenu ? <FaBars /> : <FaXmark />}
          </div>
          {showMobileMenu && (
            <div className={styles["mobile-menu-container"]} onClick={() => handleMobileMenu()}>
              {menuSection()}
            </div>
          )}
        </>
      ) : (
        menuSection()
      )}

    </div>
  );
};

export default HeaderMain;
