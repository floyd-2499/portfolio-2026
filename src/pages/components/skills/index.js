import { useState } from "react";

import styles from "./styles.module.scss";
import skillSets from "./data";

const defaultTab = skillSets[1];

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(defaultTab?.category);
  const [activeTabcontent, setActiveTabContent] = useState(defaultTab?.skills);

  const handleSelectTab = (tab) => {
    setActiveTab(tab?.category);
    setActiveTabContent(tab?.skills);
  };

  return (
    <div className={styles["section-main"]} id="skills">
      <div className={styles["section-background-container"]}>
        <div className={styles["backgrond-text-1"]}>SKILLS</div>
        <div className={styles["backgrond-text-2"]}>SKILLS</div>
      </div>
      <div className={styles["section-container"]}>
        <div className={styles["section-tabs"]}>
          {skillSets?.map((skill) => {
            return (
              <div
                key={skill?.key}
                className={`${styles["section-tab-item"]} ${
                  activeTab === skill?.category ? styles["active-tab"] : ""
                }`}
                onClick={() => handleSelectTab(skill)}
              >
                {skill?.icon}
                {skill?.category}
              </div>
            );
          })}
        </div>
        <div className={styles["active-tab-contents"]}>
          {activeTabcontent?.map((skill, index) => {
            return (
              <div key={skill?.key} className={styles["active-tab-item"]} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={styles["item-top-row"]}>
                  <div className={styles["item-title"]}>{skill?.name}</div>
                  <div className={styles["item-percentage"]}>{skill?.percent}%</div>
                </div>
                <div className={styles["progress-container"]}><div className={styles["progress-bar"]} style={{width: `${skill?.percent}%`}} /></div>
                <div className={styles["item-description"]}>{skill?.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
