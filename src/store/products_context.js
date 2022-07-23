import { createContext, useReducer } from "react";
import productsReducer from "../reducers/productsReducer";

export const ProductsContext = createContext();

const initialState = {
    products: [
        {
            id: 1,
            name: "Shea Butter",
            src: "shea-butter.jpg",
            price: "GHS25.00"
        },
        {
            id: 2,
            name: "Cinnamon Powder",
            src: "cinnamon.jpg",
            price: "GHS35.00"
        },
        {
            id: 3,
            name: "Tumeric Powder",
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