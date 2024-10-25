import {motion, useInView} from "framer-motion";
import image from "../assets/background/ryan-plomp-4bEJQM9u-Fc-unsplash-removebg-preview.png";
import {Link} from "react-router-dom";
import {useRef} from "react";
import styles from "./AnimatingBackground.module.css";

export default function AnimatingBackground({opacity, topAnimate, leftAnimate, rightAnimate, downAnimate}) {
        const refTarget = useRef(null);

        const isInView = useInView(refTarget, {
                amount: 0.5,
        });

    return (
        <>
            <motion.div style={{opacity}} className={styles["background-container"]}>
                <div className={styles["inner-container"]}>
                    <motion.div style={{y:topAnimate}} className={styles["img-container"]}>
                        <div className={`${styles.img} ${styles["img-1"]}`}></div>
                        <div className={`${styles.img} ${styles["img-2"]}`}></div>
                        <div className={`${styles.img} ${styles["img-3"]}`}></div>
                        <div className={`${styles.img} ${styles["img-4"]}`}></div>
                    </motion.div>
                    <motion.div style={{x: rightAnimate}} className={styles["img-container"]}>
                        <div className={`${styles.img} ${styles["img-5"]}`}></div>
                        <div className={`${styles.img} ${styles["img-6"]}`}></div>
                        <div className={`${styles.img} ${styles["img-7"]}`}></div>
                        <div className={`${styles.img} ${styles["img-8"]}`}></div>
                    </motion.div>
                    <motion.div style={{x: leftAnimate}} className={styles["img-container"]}>
                        <div className={`${styles.img} ${styles["img-9"]}`}></div>
                        <div className={`${styles.img} ${styles["img-10"]}`}></div>
                        <div className={`${styles.img} ${styles["img-11"]}`}></div>
                        <div className={`${styles.img} ${styles["img-12"]}`}></div>
                    </motion.div>
                    <motion.div style={{y: downAnimate}} className={styles["img-container"]}>
                        <div className={`${styles.img} ${styles["img-13"]}`}></div>
                        <div className={`${styles.img} ${styles["img-14"]}`}></div>
                        <div className={`${styles.img} ${styles["img-15"]}`}></div>
                        <div className={`${styles.img} ${styles["img-16"]}`}></div>
                    </motion.div>
                </div>
            </motion.div>

                <div className={styles.about}>
                        <motion.div ref={refTarget} className={styles["img-about-first"]}>
                                <motion.img
                                    animate={{
                                        x: isInView ? "var(--x-move-percentage)" : "0%"
                                    }}
                                    transition={{duration: 0.5, type: 'spring', bounce: 0.5}}
                                    src={image} alt="Image"/>

                        </motion.div>
                        <motion.div className={styles["button-about"]}>
                                <motion.button
                                    whileHover={{
                                            scale: 1.2,
                                            rotate: -10,
                                    }}
                                    animate={{x: isInView ? "var(--button-move-percentage)" : "0%"}}
                                    transition={{duration: 1.2, type: 'spring', bounce: 0.5}}
                                >
                                        <Link to="/products">Check it out</Link>
                                </motion.button>
                        </motion.div>
                </div>
        </>
    )
}