import { Link } from "react-router-dom";
import InfoIcon from "../icons/Info";

export default function ProductCard({name, price, image, handleClick, id}: {name: string, price: number, image: string, handleClick: (id: number) => void, id:number}) {
    return (
        <article className="p-4 rounded-[10px] shadow-xl space-y-5">
            <div className="w-full h-[250px] xs:h-[300px] rounded-[10px]">
                <img className="w-full h-full object-fill object-center" src={image} alt="Product image" />
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold">{name.split(' ').slice(0, 2).join(' ')}</h2>
                    <span className="text-sm font-bold">${price}</span>
                </div>
                <div className="flex gap-x-2">
                    <button onClick={() => handleClick(id)} type="button" className="bg-[#b51f42] flex-1 text-white font-semibold py-2 px-3 rounded">Add to cart</button>
                    <Link className="bg-gray-200 flex items-center justify-center p-2 rounded" to={`/product/${id}`}>
                        <InfoIcon></InfoIcon>
                    </Link>
                </div>
            </div>
        </article>
    )
}