import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";
import styles from "./PremiumCard.module.css";

const PremiumCard = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.groupContainer}>
        <div className={styles.uifryPremiumParent}>
          <b className={styles.uifryPremium}>uifry premium</b>
          <div className={styles.features}>features</div>
        </div>
        <GroupComponent star05="/star05.svg" />
        <GroupComponent star05="/cube02.svg" propTop="calc(50% + 8px)" />
        <GroupComponent star05="/cube04.svg" propTop="calc(50% + 136px)" />
      </div>
      <img className={styles.groupChild} alt="" src="/group-35933@2x.png" />
    </div>
  );
};

PremiumCard.propTypes = {
  className: PropTypes.string,
};

export default PremiumCard;
