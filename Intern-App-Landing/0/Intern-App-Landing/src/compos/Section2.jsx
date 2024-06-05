import styles from './Section2.module.css'
import classNames from 'classnames';
export const Section2 = () => {
    return(
        <>
        <div className={styles.section2}>
            <div className={styles.leftImgCon}>
                <img src="/public/sec2_mob.png" alt="" />
            </div>
            <div className={styles.rightCon}>
                <div className={styles.heading}>
                    <h3>FEATURES</h3>
                    <h1>UIFRY PREMIUM</h1>
                </div>

                <div className={styles.body}>
                   <div className={classNames(styles.item1,styles.item)}>
                        <span>
                            <img src="" alt="" />
                            <h3>Budgeting Intervals</h3>
                        </span>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                   </div>
                   <div className={classNames(styles.item2,styles.item)}>
                        <span>
                            <img src="" alt="" />
                            <h3>Budgeting Intervals</h3>
                        </span>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                   </div>
                   <div className={classNames(styles.item3,styles.item)}>
                        <span>
                            <img src="" alt="" />
                            <h3>Budgeting Intervals</h3>
                        </span>
                        <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                   </div>
                </div>
            </div>
        </div>
        </>
    );
}