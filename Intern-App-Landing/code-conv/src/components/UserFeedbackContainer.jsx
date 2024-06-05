import PropTypes from "prop-types";
import styles from "./UserFeedbackContainer.module.css";

const UserFeedbackContainer = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.whatOurUsersSayAboutUsParent}>
        <b className={styles.whatOurUsers}>what our users say about us?</b>
        <div className={styles.testimonial}>testimonial</div>
      </div>
      <div className={styles.groupContainer}>
        <div className={styles.arcuAtDictumSapienMollisParent}>
          <div className={styles.arcuAtDictum}>
            “Arcu at dictum sapien, mollis. Vulputate sit id accumsan,
            ultricies. In ultrices malesuada elit mauris etiam odio. Duis
            tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus,
            diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor
            neque lorem sapien, suspendisse aliquam.”
          </div>
          <div className={styles.theBestFinancial}>
            the best financial accounting app ever!
          </div>
          <div className={styles.groupDiv}>
            <img className={styles.groupChild} alt="" src="/group-28@2x.png" />
            <div className={styles.groupParent1}>
              <img className={styles.groupItem} alt="" src="/group-27@2x.png" />
              <img
                className={styles.groupInner}
                alt=""
                src="/group-29@2x.png"
              />
              <img className={styles.groupIcon} alt="" src="/group-30@2x.png" />
              <img
                className={styles.groupChild1}
                alt=""
                src="/group-31@2x.png"
              />
            </div>
          </div>
          <div className={styles.nickJonas}>nick jonas</div>
        </div>
        <img
          className={styles.groupChild2}
          alt=""
          src="/group-1000002332.svg"
        />
      </div>
    </div>
  );
};

UserFeedbackContainer.propTypes = {
  className: PropTypes.string,
};

export default UserFeedbackContainer;
