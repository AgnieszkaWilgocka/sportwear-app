import styles from "./Checkout.module.css"
import Button from "./Button.jsx";
import {useContext, useState} from "react";
import {emailIsValid, isNotEmpty, hasMinLength} from "./../validation.js";
import {stagger, useAnimate} from "framer-motion";
import {ProductsContext} from "../store/products-context.jsx";
import Modal from "./Modal.jsx";

export default function Checkout({onClose, open}) {

    const productsContext = useContext(ProductsContext);

    const[error, setError] = useState(false);
    const[summary, setSummary] = useState(false);

    const[scope, animate] = useAnimate();

    function handleSubmit(event) {
        event.preventDefault();
        const fd = new FormData(event.target);
        const data = Object.fromEntries(fd.entries());

        if(!emailIsValid(data.email) ||
            !isNotEmpty(data.email) ||
            !isNotEmpty(data.name) ||
            !isNotEmpty(data.surname) ||
            !isNotEmpty(data.street) ||
            !isNotEmpty(data.phone) ||
            !hasMinLength(data.phone, 6) ||
            !isNotEmpty(data.postalCode)
        ) {

            console.log('halo?');

            setError(true);

            animate('input' ,
                {x: [-10, 0, 10, 0]},
                {type: 'spring', duration: 0.2, delay: stagger(0.05)}
            );

        } else {
            setError(false);
            setSummary(true);

        }
    }

    function handleFinish() {
        productsContext.clearOrder();
        onClose();
        setError(false);
        setSummary(false);
    }

    if(summary && !error) {

        return (
            <>
            <Modal open={open} onClose={onClose}>
                <div className="summary">
                    <h2>Success!</h2>
                    <p>Your order has been sent</p>
                    <p>We will inform you about more informations via email in couple of minutes...</p>
                </div>
                <div className={styles.buttons}>
                    <Button
                        onClick={handleFinish}
                    >
                        Close</Button>
                </div>
            </Modal>
                </>
    );
    }

    return (
        <>
            <h3>Checkout</h3>
            <form className={styles["form-modal"]} onSubmit={handleSubmit} ref={scope} >
                {error && <p>Please enter valid data</p>}
                <label htmlFor="name"> Name</label>
                <input type="text" name="name"/>
                <label htmlFor="surname">Surname</label>
                <input type="text" name="surname"/>
                <label htmlFor="email">Email</label>
                <input type="text" name="email"/>
                <label htmlFor="phone">Phone</label>
                <input type="text" name="phone"/>
                <div className={styles.aside}>
                    <div>
                        <label htmlFor="street">Street</label>
                        <input type="text" name="street"/>
                    </div>
                    <div>
                        <label htmlFor="postal-code">Postal Code</label>
                        <input type="text" name="postalCode"/>
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button onClick={onClose}>Close</Button>
                    <Button>Apply</Button>
                </div>
            </form>
        </>
    )
}