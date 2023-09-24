import { useEffect, useState } from "react"
import { type Product } from "../types"
import TopProduct from "./TopProduct";

export default function TopProducts() {

    const [products, setProducts] = useState([] as Product[]);
    let top: Product[] = [];

    useEffect(() => {
        async function getProducts() {
            const resp = await fetch('https://fakestoreapi.com/products');

            const products: Product[] = await resp.json();

            setProducts(products);
        }

        getProducts();
        
    }, [])

    if (products.length > 1) {
        const [top1, top2, top3] = products;

        top = [top1, top2, top3];
    }

    return (
        <section className="space-y-20 my-20">
            <h2 className="text-[2rem] text-center font-semibold">Top Products</h2>
            {top.length > 1 ? top.map((product) => {
                return <TopProduct id={product.id} key={product.id} name={product.title} description={product.description} price={product.price} image={product.image}></TopProduct>
            }) : <p>Loading...</p>}
        </section>
    )
}