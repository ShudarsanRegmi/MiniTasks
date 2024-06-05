import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <div className={[styles.groupParent, className].join(" ")}>
      <div className={styles.groupWrapper}>
        <div className={styles.arcuAtDictumSapienMollisParent}>
          <div className={styles.arcuAtDictum}>
            Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
            In ultrices malesuada elit mauris etiam odio. Duis tristique lacus,
            et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse
            sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
            suspendisse aliquam.
          </div>
          <div className={styles.fullyCustomizableParent}>
            <div className={styles.fullyCustomizable}>fully customizable</div>
            <img className={styles.groupChild} alt="" src="/group-358992.svg" />
          </div>
        </div>
      </div>
      <img className={styles.groupItem} alt="" src="/group-35937@2x.png" />
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
