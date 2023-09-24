import HomeNav from "../layout/HomeNav"
import { useState, createContext} from "react"
import { type Product, type ArrayState} from "../types";
import ProductCard from "../shop/ProductCard";
import Filters from "../shop/Filters";
import { useLoaderData } from "react-router-dom";
import Footer from "../layout/Footer";
import { type CartProduct } from "../types";

import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

export function loader() {

    async function getProducts(){
        const resp = await fetch('https://fakestoreapi.com/products');

        const products: Product[] = await resp.json();

        return products;
    }

    return getProducts()
}

export const ProductsContext = createContext([] as unknown);
export const CartProductsContext = createContext([] as unknown);

export default function Shop() {

    const myProducts = useLoaderData() as Product[];
    const [products, setProducts]: ArrayState<Product> = useState(myProducts);
    const [showAlert, setShowAlert] = useState(false);

    const userProductsStorage = JSON.parse(localStorage.getItem('userProducts') ?? '[]');
    const [userProducts, setUserProducts] = useState(userProductsStorage as CartProduct[])

    const cartProducts: CartProduct[] = myProducts.map((product) => {
        return {
            ...product,
            quantity: 1
        }
    })

    function handleClick(id: number) {

        const addedProduct = cartProducts.find(product => product.id === id);

        if (addedProduct && !userProducts.find((product) => product.id === addedProduct.id)) {
            setUserProducts((prev) => {
                const updatedUserProducts = [
                    ...prev,
                    addedProduct
                ]

                localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts));

                return updatedUserProducts;
            })

            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 4000)

        } else if (addedProduct && userProducts.find((product) => product.id === addedProduct.id)) {
            
            const updatedUserProducts = userProducts.map((product) => {
                    if (product.id === addedProduct.id) {
                        product.quantity++;
                    }

                    return product;
                })

            localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts));

            setUserProducts(updatedUserProducts)
        }

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000)
    }

    function deleteProduct(id: number) {
        const updatedUserProducts = userProducts.filter((product) => {
            if (product.id !== id) {
                return true;
            } else {
                return false;
            }
        })

        localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts));
        setUserProducts(updatedUserProducts);
    }

    return (
        <div className="relative">
            <CartProductsContext.Provider value={[reducer(userProducts), userProducts, deleteProduct]}>
                <HomeNav></HomeNav>
            </CartProductsContext.Provider>
            <div className='max-w-[1240px] p-8 mx-auto space-y-10'>
                <div className="flex justify-between md:flex-col md:gap-y-5">
                    <h1 className="text-[3rem] flex-1 font-semibold xs:text-center">Our Products</h1>
                    <ProductsContext.Provider value={[myProducts, setProducts]}>
                        <Filters></Filters>
                    </ProductsContext.Provider>
                </div>
                <section className="grid grid-cols-4 gap-5 md:grid-cols-3 mb:grid-cols-2 xs:block xs:space-y-5">
                    {products.map(product => {
                        return <ProductCard key={product.id} name={product.title} image={product.image} price={product.price} handleClick={handleClick} id={product.id} />
                    })}
                </section>
            </div>
            <Footer></Footer>
            {
                showAlert ? <div className="w-[280px] rounded-md sticky overflow-hidden bottom-4 right-4">
                        <Alert className="w-full h-full" status="success" variant='left-accent'>
                            <AlertIcon></AlertIcon>
                            <AlertTitle>Product Added To Cart!</AlertTitle>
                            <CloseButton position='absolute' onClick={() => setShowAlert(false)} top={0} right={0}></CloseButton>
                        </Alert>
                    </div>
                : null
            }
        </div>
    )
}

export function reducer(arr: CartProduct[]) {
    return arr.reduce((accum, product) => {
            return accum + product.quantity;
        }, 0)
}