import { type CartProduct } from "../types"
import ProductPreview from "./ProductPreview"
import { Link } from "react-router-dom"

export default function CartPreview({ userProducts, handleClose }: { userProducts: CartProduct[], handleClose: () => void}) {
    return (
        <div className="absolute left-[-280px] top-[30px] border rounded border-black bg-white min-w-[300px] z-10">
            <div className="relative p-5 flex flex-col gap-y-4">
                <div className="space-y-5 max-h-[300px] overflow-y-scroll px-2">
                    {userProducts.map((product) => {
                        return <ProductPreview key={product.id} product={product}></ProductPreview>
                    })}
                </div>
                <button onClick={handleClose} className="absolute top-1 right-2 font-meidum">x</button>
                <Link className="py-2 px-3 text-center rounded font-semibold text-white bg-black" to='/cart'>Go to cart</Link>
            </div>
        </div>
    )
}