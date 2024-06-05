import PropTypes from "prop-types";
import styles from "./Group.module.css";

const Group = ({ className = "" }) => {
  return (
    <div className={[styles.group, className].join(" ")}>
      <div className={styles.group1}>
        <div className={styles.tm}>TM</div>
        <div className={styles.group2}>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        </div>
      </div>
      <div className={styles.group3}>
        <div className={styles.helpfrybixcom}>help@frybix.com</div>
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
      </div>
      <div className={styles.group4}>
        <div className={styles.div}>+1 234 456 678 89</div>
        <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
      </div>
    </div>
  );
};

Group.propTypes = {
  className: PropTypes.string,
};

export default Group;
