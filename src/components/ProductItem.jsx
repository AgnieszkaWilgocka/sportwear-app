import styles from "./ProductsList.module.css";
import {motion} from "framer-motion";
export default function ProductItem({product}) {
    return(
        <>
            {/*// <div className={styles.product}>*/}
            {/*<div className={styles["container-img"]}>*/}
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>

        {/*</div>*/}
            <p>Description: {product.description}</p>
            <p>Size: {product.size}</p>
            <div className={styles.actions}>
                <div className={styles.buttons}>
                    <motion.button whileHover={{ scale: 1.1 }}>Add</motion.button>
                </div>
            </div>
        </>
        // </div>
    )
}