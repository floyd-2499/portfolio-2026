import Image from "next/image";

import { useState } from "react";
import { FaAward, FaExternalLinkAlt, FaMugHot } from "react-icons/fa";

import styles from "./styles.module.scss";
import { careerHighlights, experiencesData } from "../../../project-data/experience-data";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(experiencesData[0]);

  const handleChangeTab = ({ selectedTab }) => {
    setActiveTab(selectedTab);
  };

  return (
    <div className={styles["section-main"]} id="experience">
      <div className={styles["section-background-container"]}>
        <div className={styles["backgrond-text-1"]}>experience</div>
        <div className={styles["backgrond-text-2"]}>experience</div>
      </div>
      <div className={styles["section-container"]}>
        <div className={styles["section-container-contents"]}>
          <div className={styles["company-details-section"]}>
            <div className={styles["company-details-section-header"]}>
              <div className={styles["company-details"]}>
                <div className={styles["company-name"]}>
                  {activeTab?.companyName}
                </div>
                <div className={styles["designation"]}>{activeTab?.role}</div>
                <div className={styles["tenure"]}>{activeTab?.tenure}</div>
              </div>
              <div className={styles["company-link-button"]}>
                <FaExternalLinkAlt /> Visit Company
              </div>
            </div>
            <div className={styles["work-details-section"]}>
              <div className={styles["work-detail-header"]}>
                Work & Achievements
              </div>
              <div className={styles["work-detail-content"]}>
                {activeTab?.points?.map((item, index) => {
                  return (
                    <li
                      className={styles["highlights-content-line"]}
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
          <div className={styles["company-options-section"]}>
            <div className={styles["mini-section"]}>
              <div className={styles["mini-section-header"]}>
                <FaMugHot />
                Companies
              </div>
              <div className={styles["company-options"]}>
                {experiencesData?.map((company) => {
                  return (
                    <div
                      className={`${styles["company-option-card"]} ${
                        company?.companyName === activeTab?.companyName
                          ? styles["active-card"]
                          : styles[""]
                      }`}
                      key={company?.key}
                      onClick={() => handleChangeTab({ selectedTab: company })}
                    >
                      <Image alt={company?.companyName} src={company?.logo} />
                      <div className={styles["company-name"]}>
                        {company?.companyName}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className={`${styles["mini-section"]} ${styles["career-highlights"]}`}
            >
              <div className={styles["mini-section-header"]}>
                <FaAward />
                Career Highlights
              </div>
              <div className={styles["highlights-content"]}>
                {careerHighlights?.map((item, index) => {
                  return (
                    <li
                      className={styles["highlights-content-line"]}
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
