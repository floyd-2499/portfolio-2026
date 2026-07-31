import Link from "next/link"
import Image from "next/image";

import logo from "../../../assets/logo/logo-dark.svg";
import { PiSmileyWink } from "react-icons/pi";
import { menuData } from "../header"
import { socialMediaContents } from "../hero"
import styles from "./styles.module.scss"

const Footer = () => {
    return (
        <div className={styles["footer-main"]}>
            <div className={styles["footer-top"]}>
                <div className={styles["footer-left"]}>
                    <div className={styles["footer-left-main-text"]}>Thanks for visiting <PiSmileyWink className={styles["smiley"]} /></div>
                    <Image className={styles["footer-left-logo"]} alt="Floyd Manuel Dsouza Portfolio Logo" src={logo} />
                    <div className={styles["footer-left-sub-text"]}>FLOYD MANUEL DSOUZA</div>
                    <div className={styles["footer-left-sub-text"]}>floydmanuel011@gmail.com</div>
                    <div className={styles["footer-left-sub-text"]}>+91 9740 250911</div>
                </div>
                <div className={styles["footer-mid"]}>
                    {menuData?.map((menu) => {
                        return (
                            <Link href={menu?.id} className={styles["page-links"]} id={menu?.id}>{menu?.name}</Link>
                        )
                    })}
                </div>
                <div className={styles["footer-right"]}>
                    {socialMediaContents?.map((media) => {
                        return (
                            <Link href={media?.link} target="_blank" className={styles["media-icons"]}>{media?.icon}</Link>
                        )
                    })}
                </div>
            </div>
            <div className={styles["footer-copyright"]}>Designed & Developed by Floyd</div>
        </div>
    )
}

export default Footer