import styles from './BodySection.module.css'
import classNames from 'classnames'
import video_player_icon from '/public/video_player.svg'
import mob1 from '/public/mob1.png'
import mob2 from '/public/mob2.png'
import star from '/public/navstar.svg'
import ribbon from '/public/ribbon.svg'
import dhulo from '/public/dhulo.svg'
import dhulo2 from '/public/dhulo2.svg'

export const BodySection = ()=> {
    return (
        <>
            <div className={styles.cons}>
                <div className={classNames(styles.con , styles.con1)}>
                    {/* <img src={dhulo} alt="dhulo" className={styles.dhulo} /> */}
                    <h1>Make The Best Financial Decisions</h1>
                    <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
                
                    <div className={styles.btns}>
                        <button className={styles.getStarted}>Get Started</button>
                        <button className={styles.watchVideo}> <img src={video_player_icon} /> Watch Video</button>
                    </div>
                </div>
                
                <div className={classNames(styles.con , styles.con2)}>
                    <img src={star} alt="Star" className={classNames(styles.con2Star)} />
                    <img src={ribbon} alt="Ribbon" className={styles.ribbonImg} />
                </div>

                <div className={classNames(styles.con , styles.con3)}>
                    con3
                {/* <div className={styles.mobPcon}>

                        <div className={styles.mobCon}>
                            <img src={mob1} alt="Mobile 1" className={classNames(styles.mob1, styles.mobs)} />
                            <img src={mob2} alt="Mobile 2" className={classNames(styles.mob2, styles.mobs)} />
                            <img src={mob1} alt="Mobile 3" className={classNames(styles.mob3, styles.mobs)} />  
                        </div>
                        <img src={star} alt="Mobile 3" className={classNames(styles.star)} />
                        <img src={dhulo2} alt="Dhulo2" className={classNames(styles.dhulo2)} />

                    </div> */}
                </div>
            </div>
        </>
    )
}