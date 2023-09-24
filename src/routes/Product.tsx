import { useLoaderData } from "react-router-dom";
import { CartProduct, type Product } from "../types";
import HomeNav from "../layout/HomeNav";
import Footer from "../layout/Footer";
import { createContext } from "react";
import { useState } from 'react'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton
} from '@chakra-ui/react'

export const ProductContext = createContext([] as unknown);

export async function loader(id: string){
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);

    const products: Product = await resp.json();

    return products;
}
    
export default function Product() {

    const product = useLoaderData() as Product;
    const userProductsStorage = JSON.parse(localStorage.getItem('userProducts') ?? '[]');
    const [cartProduct, setCartProduct] = useState(userProductsStorage as CartProduct[])
    const [quantity, setQuantity] = useState(1);
    const [showAlert, setShowAlert] = useState(false);

    let updatedCart: CartProduct[];

    function handleAdd() {
        
        if (cartProduct.find((uProduct) => uProduct.id === product.id)) {
            const updatedExistingProducts = cartProduct.map((uProduct) => {
                if (uProduct.id === product.id) {
                    uProduct.quantity += quantity;
                }

                return uProduct;
            })

            updatedCart = updatedExistingProducts;
        } else {
            updatedCart = [
                ...cartProduct,
                {
                    ...product,
                    quantity: quantity
                }
            ]
        }

        localStorage.setItem('userProducts', JSON.stringify(updatedCart))
        setCartProduct(updatedCart);

        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 4000)
    }

    function deleteProduct(id: number) {
        
        const updatedUserProducts = cartProduct.filter((uProduct) => {
            if (uProduct.id !== id) {
                return true;
            } else {
                return false;
            }
        })

        localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts));
        setCartProduct(updatedUserProducts);
    }

    function handlePlusClick() {
        setQuantity((prev) => prev + 1);
    }

    function handleMinusClick() {
        if (quantity === 1) {
            return;
        }

        setQuantity((prev) => prev - 1);
    }

    return (
        <div>
            <ProductContext.Provider value={[quantity, cartProduct, deleteProduct]}>
                <HomeNav></HomeNav>
            </ProductContext.Provider>
            <div className="max-w-[1240px] p-8 mx-auto space-y-20">
                <section className="space-y-10">
                    <h1 className="font-bold text-center text-[2rem]">{product.title}</h1>
                    <article className="flex slg:flex-col slg:items-center gap-10">
                        <div className="w-[600px] slg:w-[30%] slg:h-auto">
                            <img className="w-full h-full object-fill object-center" src={product.image} alt="Product image" />
                        </div>
                        <div className="space-y-5">
                            <p className="text-xl font-medium slg:text-base slg:text-cente">{product.description}</p>
                            <div className="flex items-center justify-between xs:flex-col-reverse gap-y-4">
                                <div className="flex items-center gap-x-5 text-xl">
                                    <h2 className="text-xl font-bold">Quantity</h2>
                                    <button onClick={handleMinusClick} className="w-10 h-10 border border-black rounded-full">-</button>
                                    <span className="font-bold">{quantity}</span>
                                    <button onClick={handlePlusClick} className="w-10 h-10 border border-black rounded-full">+</button>
                                </div>
                                <div className="flex items-center gap-x-3">
                                    <p className="text-xl font-medium">Price: <span className="font-bold">${product.price}</span></p>
                                </div>
                            </div>
                            <p className="font-bold text-xl">Total: <span>${(product.price*quantity).toFixed(2)}</span></p>
                            <button onClick={handleAdd} className="font-bold text-white text-lg bg-black rounded py-2 px-3 slg:w-full">Add to Cart</button>
                        </div>
                    </article>
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