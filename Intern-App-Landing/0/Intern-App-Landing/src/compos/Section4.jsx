import sec3img from '/sec3_mob.png'
import bulstar from '/bul_icon.svg'
import classNames from 'classnames';
import styles from './Section4.module.css'

export const Section4 = ()=> {
    return(
        <>
            <section className={styles.sec}>
                    <div className={styles.left}>
                            <img src={sec3img} alt="Section3 Image" />
                    </div>

                    <div className={styles.right}>
                        <div className={styles.heading}>
                            <img src={bulstar} alt="" />
                            <h2>Fully Customizable</h2>
                        </div>
                        
                        <p className={styles.para}>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
                    </div>

               
            </section>
        </>
    );
}
