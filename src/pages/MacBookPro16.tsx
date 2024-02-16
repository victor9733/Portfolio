import { FunctionComponent } from "react";
import FRAMEHEADERIMAG from "../components/FRAMEHEADERIMAG";
import FrameComponent from "../components/FrameComponent";
import ColorBackground from "../components/ColorBackground";
import LogoAndFrame from "../components/LogoAndFrame";
import styles from "./MacBookPro16.module.css";

const MacBookPro16: FunctionComponent = () => {
  return (
    <div className={styles.macbookPro161}>
      <FRAMEHEADERIMAG />
      <img className={styles.macbookPro161Child} alt="" src="/group-1.svg" />
      <section className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img
          className={styles.colorSharp1Icon}
          alt=""
          src="/colorsharp-1@2x.png"
        />
        <img
          className={styles.particleSvgrepoCom1Icon}
          alt=""
          src="/particlesvgrepocom-1.svg"
        />
        <img
          className={styles.frameItem}
          loading="eager"
          alt=""
          src="/group-1.svg"
        />
      </section>
      <FrameComponent />
      <ColorBackground />
      <LogoAndFrame />
    </div>
  );
};

export default MacBookPro16;
