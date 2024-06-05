import PropTypes from "prop-types";
import styles from "./StartContainer.module.css";

const StartContainer = ({ className = "" }) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/group-35905.svg" />
      <img className={styles.frameItem} alt="" src="/group-35905.svg" />
      <div className={styles.frameInner}>
        <div className={styles.readyToGetStartedParent}>
          <b className={styles.readyToGet}>ready to get started?</b>
          <div className={styles.risusHabitantLeo}>
            Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <div className={styles.downloadAppWrapper}>
                <div className={styles.downloadApp}>download app</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.groupIcon} alt="" src="/group-35932@2x.png" />
      <img className={styles.iphone13Pro} alt="" src="/iphone-13-pro@2x.png" />
      <img className={styles.starIcon} alt="" src="/star-71.svg" />
      <img className={styles.frameChild1} alt="" src="/star-6.svg" />
    </div>
  );
};

StartContainer.propTypes = {
  className: PropTypes.string,
};

export default StartContainer;
