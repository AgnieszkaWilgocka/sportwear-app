import styles from "./Products.module.css";
import {useContext, useState} from 'react';
import {DUMMY_DATA} from "../products.js";
import ProductItem from "./ProductItem.jsx";
import {motion} from "framer-motion";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBasketShopping} from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal.jsx";
import Basket from "./Basket.jsx";
import {ProductsContext} from "./../store/products-context.jsx";

export default function ProductsList() {

    const productContext = useContext(ProductsContext);

    const totalProductsAmount = productContext.items.reduce((total, item) => total + item.amount, 0);

    const[isOpen, setIsOpen] = useState(false);


    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    const buttons = (
        <>
            <button onClick={handleCloseModal}>Close</button>
            {productContext.items.length > 0 && <button>Summary</button>}
        </>
    )


    return (
        <>
            <Modal open={isOpen}
                   onClose={handleCloseModal}
                   buttons={buttons}>
                <Basket />
            </Modal>

            <h1 className={styles["products-h1"]}>Sportswear.com</h1>
            <div className={styles.basket}>
                <button onClick={handleOpenModal}>
                    <span><FontAwesomeIcon style={{paddingRight: 10}} icon={faBasketShopping}/>Koszyk {totalProductsAmount}</span>
                </button>
            </div>


            <motion.ul variants={{
                show: {transition: {staggerChildren: 0.1,}}

            }}
                       initial="hidden"
                       animate="show"
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