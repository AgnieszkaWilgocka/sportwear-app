import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import styles from "./Navigation.module.css";

export default function Navigation() {
    return (
        <nav>
            <ul className={styles.navigation}>
                <li>O nas</li>
                <li>Produkty</li>

            </ul>
        </nav>
    )
}