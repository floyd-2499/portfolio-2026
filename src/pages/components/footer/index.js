import Link from "next/link"
import { menuData } from "../header"
import { socialMediaContents } from "../hero"
import styles from "./styles.module.scss"

const Footer = () => {
    return (
        <div className={styles["footer-main"]}>
            <div className={styles["footer-top"]}>
                <div className={styles["footer-left"]}></div>
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