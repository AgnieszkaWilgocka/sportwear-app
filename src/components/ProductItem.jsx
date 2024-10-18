import styles from "./ProductsList.module.css";
import {motion} from "framer-motion";
import {useContext} from "react";
import {ProductsContext} from "../store/products-context.jsx";

export default function ProductItem({product}) {

    const productContext = useContext(ProductsContext);

    return(
        <>
            {/*// <div className={styles.product}>*/}
            {/*<div className={styles["container-img"]}>*/}
            <img src={product.image} alt=""/>
            <h3>{product.title}</h3>

        {/*</div>*/}
            <p>Description: {product.description}</p>
            <p>Size: {product.size}</p>
            <p>Price: {product.price}</p>
            <div className={styles.actions}>
                {/*<div className={styles.buttons}>*/}
                    <motion.button whileHover={{ scale: 1.1 }} onClick={() => productContext.addItem(product)}>Add</motion.button>
                {/*</div>*/}
            </div>
        </>
        // </div>
    )
}