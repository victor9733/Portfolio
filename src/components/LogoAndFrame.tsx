import { FunctionComponent } from "react";
import styles from "./LogoAndFrame.module.css";

const LogoAndFrame: FunctionComponent = () => {
  return (
    <footer className={styles.logoAndFrame}>
      <div className={styles.particlesVectorFrames}>
        <div className={styles.logoContainer}>
          <div className={styles.headerFrame}>
            <div className={styles.headerFrameChild} />
            <img
              className={styles.logo2Icon}
              loading="eager"
              alt=""
              src="/logo-2@2x.png"
            />
            <div className={styles.logo}>
              <div className={styles.framesGroup}>
                <div className={styles.footerText}>
                  <div className={styles.ellipseFrame}>
                    <div className={styles.vectorsGroup} />
                    <img
                      className={styles.vectorOneIcon}
                      loading="eager"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <button className={styles.footerText1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                </button>
                <button className={styles.footerText2}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameItem} />
                    <img
                      className={styles.vectorIcon1}
                      alt=""
                      src="/vector-2.svg"
                    />
                  </div>
                </button>
              </div>
              <div className={styles.copyright2024All}>
                Copyright 2024. All Rights Reserved
              </div>
            </div>
          </div>
          <div className={styles.rectangleContainer} />
        </div>
      </div>
    </footer>
  );
};

export default LogoAndFrame;
