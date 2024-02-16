import { FunctionComponent } from "react";
import YourNameMessage from "./YourNameMessage";
import styles from "./ColorBackground.module.css";

const ColorBackground: FunctionComponent = () => {
  return (
    <section className={styles.colorBackground}>
      <div className={styles.contactFormFrame}>
        <div className={styles.contactImage}>
          <img
            className={styles.contactImg1Icon}
            loading="eager"
            alt=""
            src="/contactimg-1.svg"
          />
        </div>
        <div className={styles.particlesBackdrop}>
          <div className={styles.inputFieldsFrame} />
          <div className={styles.yourNameFrame}>
            <div className={styles.whatYouWantText}>
              <div className={styles.gerInTouch}>GER IN TOUCH</div>
              <h1 className={styles.contact}>Contact</h1>
            </div>
          </div>
          <div className={styles.yourEmailField}>
            <YourNameMessage
              yourName="Your Name"
              whatsYouNamePlaceholder="What’s you name?"
            />
            <YourNameMessage
              yourName="Your Email"
              whatsYouNamePlaceholder="What’s you email?"
            />
            <div className={styles.yourNameMessage}>
              <div className={styles.yourMessage}>Your Message</div>
              <textarea
                className={styles.yourNameMessageChild}
                placeholder="What’s  do you want to say?"
                rows={15}
                cols={29}
              />
            </div>
          </div>
          <div className={styles.footerCopyright}>
            <button className={styles.rectangleShape}>
              <div className={styles.send}>Send</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorBackground;
