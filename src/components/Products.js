import { useContext } from "react";
import { ProductsContext } from "../store/products_context";
import Button from "./Button";

const Products = () => {
    const {state} = useContext(ProductsContext);
    
    return (
        <div className="container font-poppins flex flex-col justify-center items-center mt-28"> 
            <div className="text-center lg:mb-20 mb-14">
                <legend className="text-4xl font-medium">Our Products</legend>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, aut.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quasi nisi et, necessitatibus fuga omnis.</p>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
                {state.products.map(product => 
                    <div key={product.id}>
                        <img src={`images/${product.src}`} alt={product.name} className="object-cover w-full h-96 mb-2" />
                        <p className="text-xl font-bold mx-1">{product.name}</p>
                        <p className="text-lg font-medium mx-1">{product.price}</p>
                        <Button className="py-3 px-5">View Details</Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Products;