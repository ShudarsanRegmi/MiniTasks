import PropTypes from "prop-types";
import styles from "./CreditCardForm.module.css";

const CreditCardForm = ({ className = "" }) => {
  return (
    <div className={[styles.group, className].join(" ")}>
      <div className={styles.frame}>
        <div className={styles.rectangle} />
      </div>
      <div className={styles.div}>0000 8888 2222 3333</div>
      <div className={styles.group1}>
        <div className={styles.div1}>07/24</div>
        <div className={styles.validThru}>VALID THRU</div>
      </div>
      <img
        className={styles.creditCardvisaTypewhite}
        alt=""
        src="/credit-cardvisa-typewhite.svg"
      />
      <div className={styles.group2}>
        <div className={styles.tm}>TM</div>
        <img className={styles.groupIcon} alt="" src="/group@2x.png" />
      </div>
    </div>
  );
};

CreditCardForm.propTypes = {
  className: PropTypes.string,
};

export default CreditCardForm;
