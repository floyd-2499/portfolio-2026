import Image from "next/image";

import styles from "./styles.module.scss"
import { FaXmark } from "react-icons/fa6"

const ProjectModal = ({ projectDetails, setSelectedProject }) => {

    const OnCloseModal = () => {
        setSelectedProject(null)
    }

    return (
        <div className={styles["project-modal"]}>
            <div className={styles["project-modal-container"]}>
                <div className={styles["modal-header"]}>
                    <div className={styles["modal-header-text"]}>{projectDetails?.name}</div>
                    <FaXmark className={styles["close-icon"]} onClick={() => OnCloseModal()} />
                </div>

                <div className={styles["modal-body"]}>
                    <div className={styles["modal-body-details"]}>
                        {projectDetails?.details?.map((detail) => (
                            <div className={styles["description-set"]} key={detail?.key}>
                                <div className={styles["description-set-title"]}>{detail?.title}</div>
                                <div className={styles["description-set-content"]}>{detail?.content}</div>
                            </div>
                        ))}
                        <a
                            href={projectDetails?.url || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles["redirect-button"]}
                        >
                            Visit Site
                        </a>                    </div>
                    <Image alt={projectDetails?.name} src={projectDetails?.image} className={styles["modal-body-image"]} />
                </div>
            </div>
        </div>
    )
}

export default ProjectModal