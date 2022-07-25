import { createContext, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";

export const ProductsContext = createContext();

const initialState = {
    products: [
        {
            id: 1,
            name: "Lekem's Raw Shea Butter",
            src: "shea-butter.jpg",
            price: "GHS25.00"
        },
        {
            id: 2,
            name: "Lekem's Raw Cinnamon Powder",
            src: "cinnamon.jpg",
            price: "GHS35.00"
        },
        {
            id: 3,
            name: "Lekem's Raw Tumeric Powder",
            src: "tumeric.jpg",
            price: "GHS30.00"
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