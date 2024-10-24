import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";
import { NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive ? styles.active : 'undefined'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={"/products"} className={({isActive}) => isActive ? styles.active : 'undefined'}>Products</NavLink>
                </li>

            </ul>
        </nav>
    )
}