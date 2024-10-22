import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";
import styles from "./Modal.module.css";


export default function Modal({open, children, onClose, buttons}) {


    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if(open) {
            modal.showModal()
        }

        return () => modal.close()

    }, [open]);

    return createPortal(
        <dialog ref={dialog} onClose={onClose}>
            <div className={styles["dialog-content"]}>
                {children}
                <div className={styles["button-dialog"]}>
                    {buttons}
                </div>
            </div>
        </dialog>,

        document.getElementById("modal")
    );
}