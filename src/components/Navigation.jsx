import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import styles from "./Navigation.module.css";
import { NavLink} from "react-router-dom";
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";

const variants = {
    initial: {
        scaleY: 0,
    },
    show: {
        scaleY: 1,
        transition: {staggerChildren: 0.2, duration: 0.2},
    },
    exit: {
        scaleY: 0,
        transition: {delay: 0.2}
    }
}

const liVariants = {
    initial: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

export default function Navigation() {

    const[isActive, setIsActive] = useState(false);

    console.log(isActive);
    function handleActiveClass() {
        setIsActive(prevActive => !prevActive);
    }

    return (

        <nav>
            <div className={styles.button}>
            <button onClick={handleActiveClass} className={`${styles["button-menu"]} ${isActive ? styles["active-icon"] : 'undefined'}`}><FontAwesomeIcon icon={faBars}/></button>
            </div>


            <AnimatePresence>
            {isActive && (

                <motion.ul
                    variants={variants}
                    initial="initial"
                    animate="show"
                    exit="exit"

                    className={`${styles.navigation} ${isActive ? styles["active-menu"] : 'undefined'}`}>
                    <motion.li variants={liVariants}>
                        <NavLink to={"/"}
                                 className={({isActive}) => isActive ? styles.active : 'undefined'}>About</NavLink>
                    </motion.li>
                    <motion.li variants={liVariants}>
                        <NavLink to={"/products"}
                                 className={({isActive}) => isActive ? styles.active : 'undefined'}>Products</NavLink>
                    </motion.li>

                </motion.ul>
            )}
            </AnimatePresence>


                {!isActive && (
                <ul className={`${styles.navigation} ${styles["large-devices"]}`}>
                    <li>
                        <NavLink to={"/"}
                                 className={({isActive}) => isActive ? styles.active : 'undefined'}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/products"}
                                 className={({isActive}) => isActive ? styles.active : 'undefined'}>Products</NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
}