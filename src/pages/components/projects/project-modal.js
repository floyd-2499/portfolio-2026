import Image from "next/image";
import { FaPlay } from "react-icons/fa";

import styles from "./styles.module.scss";
import { projectData } from "../../../project-data/project-data";
import { useState } from "react";
import ProjectModal from "./modal";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)

  const onSelectProject = (e) => {
    setSelectedProject(e)
  }

  return (
    <div className={styles["section-main"]} id="experience">
      {selectedProject ? (<ProjectModal projectDetails={selectedProject} setSelectedProject={setSelectedProject} />) : null}
      <div className={styles["section-container"]}>
        <div className={styles["section-container-contents"]}>
          {projectData?.map((project) => {
            return (
              <div className={styles["project-card"]} key={project?.id}>
                <Image alt={project?.name} src={project?.image} />
                <div className={styles["project-details-section"]}>
                  {/* <Link href={project?.url} target="_blank" className={styles["redirection-button"]}><FaPlay /></Link> */}
                  <div className={styles["redirection-button"]} onClick={() => onSelectProject(project)}><FaPlay /></div>
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
