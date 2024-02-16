import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <section className={styles.macbookPro161Inner}>
      <div className={styles.projectsFrameWrapper}>
        <div className={styles.projectsFrame}>
          <div className={styles.projectsFrameChild} />
          <h1 className={styles.projects}>Projects</h1>
          <div className={styles.contactimgFrame}>
            <img
              className={styles.projectImg1Icon}
              loading="eager"
              alt=""
              src="/projectimg1@2x.png"
            />
            <img
              className={styles.projectImg2Icon}
              loading="eager"
              alt=""
              src="/projectimg2@2x.png"
            />
            <img
              className={styles.projectImg3Icon}
              alt=""
              src="/projectimg3@2x.png"
            />
            <img
              className={styles.projectImg1Icon1}
              alt=""
              src="/projectimg1@2x.png"
            />
            <img
              className={styles.projectImg2Icon1}
              alt=""
              src="/projectimg2@2x.png"
            />
            <img
              className={styles.projectImg3Icon1}
              alt=""
              src="/projectimg3@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
