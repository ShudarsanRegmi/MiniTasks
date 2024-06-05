
import sec4img from '/sec4_mob.png'
import classNames from 'classnames';
import styles from './Section3.module.css'

export const Section3 = ()=> {
    return(
        <>
            <section className={styles.sec}>
            
                <div className={styles.left}>
                    <div className={styles.heading}>
                        <h3>ADVANTAGES</h3>
                        <h1>Why Choose Uifry?</h1>
                    </div>
                    <span className={styles.span}>
                         <img src="/noti.svg" alt="Notifications" className={styles.notiIcon} />
                        <h3>Clear Notifications</h3>
                    </span>
                    
                    <p className={styles.para}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                </div>

                <div className={styles.right}>
                    <img src={sec4img} alt="Section3 Image" />
                </div>

               
            </section>
        </>
    );
}