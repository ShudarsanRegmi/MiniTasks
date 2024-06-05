import PropTypes from "prop-types";
import styles from "./FormContainer.module.css";

const FormContainer = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.groupContainer}>
        <div className={styles.whyChooseUifryParent}>
          <b className={styles.whyChooseUifry}>why choose Uifry?</b>
          <div className={styles.advatnages}>advatnages</div>
        </div>
        <div className={styles.arcuAtDictumSapienMollisParent}>
          <div className={styles.arcuAtDictum}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
          <div className={styles.cleverNotificationsParent}>
            <div className={styles.cleverNotifications}>
              clever notifications
            </div>
            <img className={styles.groupChild} alt="" src="/group-358991.svg" />
          </div>
        </div>
      </div>
      <img className={styles.groupItem} alt="" src="/group-35935@2x.png" />
    </div>
  );
};

FormContainer.propTypes = {
  className: PropTypes.string,
};

export default FormContainer;
