import { CartProduct } from "../types";
import { reducer } from "../routes/Shop";
import { getTotal } from "../types";

export default function Summary({ products }: { products: CartProduct[] }) {
    
    let deliveryCost = 0;

    if (products.length > 0) {
        deliveryCost = 4.99;
    }

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <p className="font-medium">Products: <span className="font-bold">{reducer(products)}</span></p>
                <p className="font-medium">Total: <span className="font-bold">${getTotal(products)}</span></p>
            </div>
            {products.length > 0 ? 
                <span className="inline-block font-medium">Delivery: <span className="font-bold">${deliveryCost}</span></span>
                : null
            }
            <hr />
            <div className="flex items-center justify-between">
                <span className="font-bold text-gray-500 text-xl uppercase">Total Price</span>
                <span className="font-bold text-lg">${(Number(getTotal(products))+deliveryCost).toFixed(2)}</span>
            </div>
            <button className="font-bold text-white text-lg bg-black rounded py-2 px-3 w-full">Buy Now</button>
        </div>
    )
}