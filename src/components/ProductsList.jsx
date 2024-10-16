import styles from "./ProductsList.module.css";
import{useState} from 'react';
import {DUMMY_DATA} from "../products.js";
import ProductItem from "./ProductItem.jsx";
import {motion, stagger} from "framer-motion";

export default function ProductsList() {
    // const[products, setProducts] = useState(DUMMY_DATA);


    return(
        <>
            {/*basket*/}


            <h1 className={styles["products-h1"]}>Sportswear.com</h1>

            <motion.ul variants={{
                show: { transition: {staggerChildren: 0.1,} }

            }}
                       initial="hidden"
                       animate ="show"
                className={styles.container}>
                {DUMMY_DATA.map((product) =>
                    <motion.li variants={{
                        hidden: {opacity: 0},
                        show: {opacity: 1},
                        exit: {opacity: 1}
                        }}
                             className={styles.product} key={product.id}>
                            <ProductItem product={product} />
                    </motion.li>
                )
                }
            </motion.ul>
        </>
    )
}