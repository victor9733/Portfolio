import { FunctionComponent } from "react";
import styles from "./YourNameMessage.module.css";

export type YourNameMessageType = {
  yourName?: string;
  whatsYouNamePlaceholder?: string;
};

const YourNameMessage: FunctionComponent<YourNameMessageType> = ({
  yourName,
  whatsYouNamePlaceholder,
}) => {
  return (
    <div className={styles.yourNameMessage}>
      <div className={styles.yourName}>{yourName}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <input
          className={styles.whatsYouName}
          placeholder={whatsYouNamePlaceholder}
          type="text"
        />
      </div>
    </div>
  );
};

export default YourNameMessage;
