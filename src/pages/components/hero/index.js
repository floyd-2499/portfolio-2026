import Image from "next/image";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import styles from "./styles.module.scss";
import profile from "../../../assets/profile/profile.png";
import Link from "next/link";

const socialMediaContents = [
  {
    key: 1,
    name: "Github",
    icon: <FaGithub />,
    link: "https://github.com/floyd-2499",
  },
  {
    key: 2,
    name: "Linkedin",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/floyd-manuel-dsouza-437a03196/",
  },
  {
    key: 3,
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/floyd_manuel_24/",
  },
];

const HeroSectionMain = () => {
  return (
    <div className={styles["section-main"]} id="#home">
      <div className={styles["background-container"]}>
        <div className={styles["backgrond-text-1"]}>Hey, I'm</div>
        <div className={styles["backgrond-text-2"]} data-text="Floyd">
          Floyd
        </div>
        <div className={styles["backgrond-text-3"]}>
          Web developer & UI/UX Designer
        </div>
      </div>
      <div className={styles["hero-main-contents"]}>
        <div className={styles["experience-wrapper"]}>
          <div className={styles["wrapper-row-1"]}>+3 Years</div>
          <div className={styles["wrapper-row-2"]}>Experience</div>
        </div>
        <div className={styles["hero-image-main"]}>
          <Image alt="Floyd Manuel Dsouza Profile" src={profile} />
        </div>
        <div className={styles["social-media-wrapper"]}>
          {socialMediaContents?.map((socialMedia) => {
            return (
              <Link
                key={socialMedia?.key}
                href={socialMedia?.link}
                target="_blank"
              >
                {socialMedia?.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSectionMain;
