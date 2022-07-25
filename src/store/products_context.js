import { createContext, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";

export const ProductsContext = createContext();

const initialState = {
    products: [
        {
            id: 1,
            name: "Ninette's Deep Moisturizer",
            src: "deep-moisturizer.jpg",
            price: "GHS55.00"
        },
        {
            id: 2,
            name: "Ninette's Ordinary Collection",
            src: "ordinary_collection.jpg",
            price: "GHS75.00"
        },
        {
            id: 3,
            name: "Ninette's Facial Care Package",
            src: "facial_package.jpg",
            price: "GHS100.00"
        }
    ]
    
} 

const ProductsProvider = ({children}) => {
    const [state, dispatch] = useReducer(productsReducer, initialState);

    return <ProductsContext.Provider value={{state, dispatch}}>
        {children}
    </ProductsContext.Provider>
}

export default ProductsProvider;