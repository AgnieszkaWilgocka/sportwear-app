import {useContext} from "react";
import {ProductsContext} from "../store/products-context.jsx";

export default function Basket() {

    const productContext = useContext(ProductsContext);

    const totalPrice = productContext.items.reduce((total, product) => total + (product.price * product.amount), 0);
    return(
        <>
            <h3>Products</h3>
            <ul>
                {productContext.items.map((product) => (
                    <>
                        <li>{product.title}</li>
                        <li>{product.size} </li>
                        <li>Cena</li>
                        <button onClick={() => productContext.addItem(product)}>+</button>

                        <p>{product.amount}</p>
                        <button onClick={() => productContext.removeItem(product.id)}>-</button>
                    </>
                ))}
                <p>Total price: {totalPrice}</p>
            </ul>
        </>
    )
}