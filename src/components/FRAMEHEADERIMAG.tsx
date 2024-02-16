import { FunctionComponent } from "react";
import styles from "./FRAMEHEADERIMAG.module.css";

const FRAMEHEADERIMAG: FunctionComponent = () => {
  return (
    <section className={styles.fRAMEHEADERIMAG}>
      <div className={styles.skillsSection}>
        <div className={styles.skillsFRAME}>
          <div className={styles.htmlcssFrames}>
            <img
              className={styles.bannerBg1Icon}
              alt=""
              src="/bannerbg-1@2x.png"
            />
            <header className={styles.noFRAME}>
              <div className={styles.logo1Parent}>
                <img
                  className={styles.logo1Icon}
                  loading="eager"
                  alt=""
                  src="/logo-1@2x.png"
                />
                <div className={styles.homeProjectContactFrame}>
                  <div className={styles.home}>Home</div>
                  <div className={styles.project}>Project</div>
                  <div className={styles.contact}>Contact</div>
                </div>
              </div>
            </header>
            <div className={styles.rectangleFrame}>
              <div className={styles.colorsharpRECTANGLE}>
                <div className={styles.particlesvgrepocomFRAME}>
                  <button className={styles.welcomeToMyPortfolioWrapper}>
                    <div className={styles.welcomeToMy}>
                      Welcome to my Portfolio
                    </div>
                  </button>
                  <div className={styles.hiITamaWebDeveloperText}>
                    <h1 className={styles.hiImVictorContainer}>
                      <p
                        className={styles.hiImVictor}
                      >{`Hi! I’m Victor Web `}</p>
                      <p className={styles.developer}>Developer</p>
                    </h1>
                    <div className={styles.aPassionateWeb}>
                      {" "}
                      A passionate web developer with a creative approach and a
                      strong background in crafting dynamic and functional
                      websites. My aim is to merge innovative design with
                      seamless functionality to deliver web solutions that
                      captivate users and drive my clients' success. With skills
                      in multiple technologies and a steadfast commitment to
                      excellence, I'm here to turn your ideas into digital
                      reality. Welcome to my online world, where every line of
                      code tells a story of innovation and progress!
                    </div>
                  </div>
                </div>
              </div>
              <img
                className={styles.headerImg1Icon}
                loading="eager"
                alt=""
                src="/headerimg-1@2x.png"
              />
            </div>
          </div>
          <div className={styles.skills}>
            <div className={styles.skillsChild} />
            <h1 className={styles.skills1}>Skills</h1>
            <div className={styles.skillsFrameParent}>
              <div className={styles.skillsFrame}>
                <button className={styles.reactjsEllipse}>
                  <div className={styles.javascriptEllipse}>
                    <div className={styles.tailwindEllipse} />
                    <img
                      className={styles.reactjsIcon}
                      alt=""
                      src="/reactjs@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.reactjsEllipse1}>
                  <div className={styles.ellipseParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.javascriptIcon}
                      alt=""
                      src="/javascript@2x.png"
                    />
                  </div>
                </button>
                <div className={styles.reactjsEllipse2}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameItem} />
                    <img
                      className={styles.tailwindIcon}
                      loading="eager"
                      alt=""
                      src="/tailwind@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.reactjsEllipse3}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.mongodbIcon}
                      loading="eager"
                      alt=""
                      src="/mongodb@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.reactjsEllipse4}>
                  <div className={styles.frameDiv}>
                    <div className={styles.ellipseDiv} />
                    <img
                      className={styles.figmaIcon}
                      loading="eager"
                      alt=""
                      src="/figma@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.htmlEllipse}>
                <button className={styles.cssEllipse}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild1} />
                    <img
                      className={styles.htmlIcon}
                      alt=""
                      src="/html@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.cssEllipse1}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild2} />
                    <img className={styles.cssIcon} alt="" src="/css@2x.png" />
                  </div>
                </button>
                <button className={styles.cssEllipse2}>
                  <div className={styles.ellipseParent3}>
                    <div className={styles.frameChild3} />
                    <img
                      className={styles.nodejsIcon}
                      alt=""
                      src="/nodejs@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.cssEllipse3}>
                  <div className={styles.ellipseParent4}>
                    <div className={styles.frameChild4} />
                    <img className={styles.gitIcon} alt="" src="/git@2x.png" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FRAMEHEADERIMAG;
