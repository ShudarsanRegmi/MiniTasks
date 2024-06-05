import PropTypes from "prop-types";
import styles from "./UifryPremiumCard.module.css";

const UifryPremiumCard = ({ className = "" }) => {
  return (
    <div className={[styles.vectorParent, className].join(" ")}>
      <img className={styles.groupChild} alt="" src="/rectangle-4.svg" />
      <img className={styles.groupItem} alt="" src="/rectangle-5.svg" />
      <img className={styles.groupInner} alt="" src="/star-7.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupChild1} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle-3.svg" />
      <div className={styles.makeTheBest}>
        make the best financial decisions
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild2} />
        <img className={styles.groupIcon} alt="" src="/group-35920@2x.png" />
      </div>
      <div className={styles.uifryPremiumParent}>
        <div className={styles.uifryPremium}>Uifry Premium</div>
        <div className={styles.freeTrial}>free trial</div>
      </div>
    </div>
  );
};

UifryPremiumCard.propTypes = {
  className: PropTypes.string,
};

export default UifryPremiumCard;
