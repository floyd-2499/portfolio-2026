import Image from "next/image";
import { projectData } from "../../../project-data/project-data";
import styles from "./styles.module.scss";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <div className={styles["section-main"]} id="experience">
      <div className={styles["section-container"]}>
        <div className={styles["section-container-contents"]}>
          {projectData?.map((project) => {
            return (
              <div className={styles["project-card"]} key={project?.id}>
                <Image alt={project?.name} src={project?.image} />
                <div className={styles["project-details-section"]}>
                  <Link href={project?.url} target="_blank" className={styles["redirection-button"]}><FaPlay /></Link>
                  <div className={styles["project-name"]}>{project?.name}</div>
                  <div className={styles["project-description"]}>
                    {project?.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["section-background-container"]}>
        <div className={styles["backgrond-text-1"]}>projects</div>
        <div className={styles["backgrond-text-2"]}>projects</div>
      </div>
    </div>
  );
};

export default ProjectsSection;
