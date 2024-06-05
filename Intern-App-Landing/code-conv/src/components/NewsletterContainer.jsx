import PropTypes from "prop-types";
import styles from "./NewsletterContainer.module.css";

const NewsletterContainer = ({ className = "" }) => {
  return (
    <div className={[styles.newsletterParent, className].join(" ")}>
      <div className={styles.newsletter}>Newsletter</div>
      <div className={styles.stayUpTo}>Stay up to date</div>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangle} />
        <div className={styles.yourEmail}>{`Your email `}</div>
        <div className={styles.group}>
          <div className={styles.rectangle1} />
          <div className={styles.subscribe}>Subscribe</div>
        </div>
      </div>
    </div>
  );
};

NewsletterContainer.propTypes = {
  className: PropTypes.string,
};

export default NewsletterContainer;
