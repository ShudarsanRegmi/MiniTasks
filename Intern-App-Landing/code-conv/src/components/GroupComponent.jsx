import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "", star05, propTop }) => {
  const groupDivStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={[styles.groupParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.budgetingIntervalsParent}>
        <div className={styles.budgetingIntervals}>budgeting intervals</div>
        <img className={styles.star05Icon} alt="" src={star05} />
      </div>
      <div className={styles.cumEtConvallis}>
        Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
        faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  star05: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default GroupComponent;
