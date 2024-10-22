import {useContext} from "react";
import {ProductsContext} from "../store/products-context.jsx";
import styles from "./Basket.module.css";

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
                                <li>{product.title}</li>
                                <li>{product.size} </li>
                                <li>Cena</li>
                            </div>
                            <div className={styles["actions-details"]}>
                                <button onClick={() => productContext.addItem(product)}>+</button>

                                <p>{product.amount}</p>
                                <button onClick={() => productContext.removeItem(product.id)}>-</button>
                            </div>
                        </>
                    ))}
                    <p>Total price: {totalPrice}</p>
                </ul>
            </div>
        </>
    )
}