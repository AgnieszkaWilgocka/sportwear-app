import {useContext} from "react";
import {ProductsContext} from "../store/products-context.jsx";
import styles from "./Basket.module.css";
import Button from "./Button.jsx";

export default function Basket() {

    const productContext = useContext(ProductsContext);

    const totalPrice = productContext.items.reduce((total, product) => total + (product.price * product.amount), 0);
    return(
        <>
            <div className={styles.basket}>
            <h3>Products</h3>
                <hr/>
                <ul className={styles["products-dialog"]}>
                    {productContext.items.map((product) => (
                        <>
                            <div className={styles.details}>
                                <li>Product: {product.title}</li>
                                <li>Size: {product.size} </li>
                                <li>Price: {product.price}</li>
                            </div>
                            <div className={styles["actions-details"]}>
                                <Button onClick={() => productContext.addItem(product)}>+</Button>
                                <p>{product.amount}</p>
                                <Button onClick={() => productContext.removeItem(product.id)}>-</Button>
                            </div>
                        </>
                    ))}
                    <p>Total price: {totalPrice}</p>
                </ul>
            </div>
        </>
    )
}