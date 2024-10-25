import {motion} from "framer-motion";
import logo from "../assets/jacket-start.png";
import styles from "./Header.module.css";

export default function Header({scrollImg, scrollH1, rotate, opacity, scrollH1SmallDevice}) {


    return (
        <header>
            <motion.div className={styles["logo-img"]} style={{y: scrollImg}}>
                <img className={styles.logo} src={logo} alt="Logo"/>
            </motion.div>
            <motion.h1 style={{y: scrollH1, rotate, opacity}}
                       animate={{type: 'spring'}}
            >
                Sportswear.com
            </motion.h1>
            <div className={styles.text}>
                <motion.h1 style={{y: scrollH1SmallDevice}}
                    className={styles["small-device"]}>Sportswear.com</motion.h1>
            </div>
        </header>
);

}