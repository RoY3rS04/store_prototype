import { Link } from "react-router-dom";

export default function TopProduct(
    { name, description, price, image, id }: { name: string, description: string, price: number, image: string, id:number }
) {
    return (
        <article className="flex justify-between items-center mb:flex-col-reverse mb:gap-y-5">
            <div className="space-y-10 w-[70%]">
                <div className="flex items-center justify-between mb:flex-col mb:gap-y-4">
                    <h3 className="text-2xl font-medium mb:text-center">{name}</h3>
                    <span className="text-xl font-bold">{ `$${price}` }</span>
                </div>
                <p className="text-left">{description}</p>
                <Link className="bg-black text-white font-semibold rounded py-2 px-3 inline-block" to={`/product/${id}`}>Buy Now</Link>
            </div>
            <div className="w-[200px]">
                <img className="w-full" src={image} alt="Product Image" />
            </div>
        </article>
    )
}