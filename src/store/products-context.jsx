import {createContext, useReducer} from "react";

export const ProductsContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearOrder: () => {}
});


function productsReducer(state, action) {

    if(action.type === "ADD") {
        const updatedProducts = [...state.items];

        const indexOfProductToUpdate = updatedProducts.findIndex((product) => product.id === action.item.id);

        if(indexOfProductToUpdate === -1){
            updatedProducts.push({...action.item, amount: 1});
        } else {
            updatedProducts[indexOfProductToUpdate].amount++;
        }

        return {...state, items: updatedProducts}

    }

    if(action.type === "DELETE") {
        let updatedProducts = [...state.items];
        const indexOfProductToRemove = updatedProducts.findIndex((product) => product.id === action.id);


        if(updatedProducts[indexOfProductToRemove].amount === 1) {
            updatedProducts = updatedProducts.filter((product) => product.id !== action.id);
        } else {
            updatedProducts[indexOfProductToRemove].amount--;
        }

        return {...state, items: updatedProducts}
    }

    if(action.type === "CLEAR") {
        return {...state, items: []}
    }
}

export default function ProductsContextProvider({children}) {

    const[products, dispatchProductsAction] = useReducer(productsReducer, {items: []});


    function handleAddItem(item) {
        dispatchProductsAction({
            type: "ADD",
            item
        });
    }

    function handleRemoveItem(id) {
        dispatchProductsAction({
            type: "DELETE",
            id
        });
    }

    function handleClearOrder() {
        dispatchProductsAction({
            type: "CLEAR"
        })
    }

    const productsContext = {
        items: products.items,
        addItem: handleAddItem,
        removeItem: handleRemoveItem,
        clearOrder: handleClearOrder
    }

    return <ProductsContext.Provider value={productsContext}> {children} </ProductsContext.Provider>
}