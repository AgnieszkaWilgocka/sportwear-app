import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";



export default function Modal({open, children, onClose}) {


    const dialog = useRef();

    useEffect(() => {
        const modal = dialog.current;

        if(open) {
            modal.showModal()
        } else {
            modal.close()
        }
    }, [open]);

    return createPortal(
        <dialog ref={dialog} onClose={onClose}>
            {open ? children : null}
            <div className="actions">
                <button onClick={onClose}>Close</button>
            </div>
        </dialog>,

        document.getElementById("modal")
    );
}