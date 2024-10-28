import styles from "./Products.module.css";
import {motion} from "framer-motion";
import {useContext} from "react";
import {ProductsContext} from "../store/products-context.jsx";

export default function ProductItem({product}) {

    const productContext = useContext(ProductsContext);

    return(
        <>
            <img src={product.image} alt=""/>
            <div className={styles["products-details"]}>
                <h3>{product.title}</h3>
                <p><span style={{fontWeight: "bold"}}>Description: </span>{product.description}</p>
                <p><span style={{fontWeight: "bold"}}>Size: </span>{product.size}</p>
                <p><span style={{fontWeight: "bold"}}>Price: </span>{product.price}</p>
            </div>
            <div className={styles.actions}>
                <motion.button whileHover={{scale: 1.1}} onClick={() => productContext.addItem(product)}>Add
                </motion.button>
            </div>
        </>
    )
}