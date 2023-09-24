import { type CartProduct, type CartConfig } from "../types";
import HomeNav from "../layout/HomeNav";
import Footer from "../layout/Footer";
import ProductPreview from "../shop/ProductPreview";
import { useState } from "react";
import { createContext } from "react";
import Summary from "../cart/Summary";

export const CartContext = createContext([] as unknown);

export default function Cart() {

    const userProducts: CartProduct[] = JSON.parse(localStorage.getItem('userProducts') ?? '[]');

    const [cartProducts, setCartProducts] = useState(userProducts)

    const myCartStyle: CartConfig = {
        imageStyle: 'w-[100px] h-[100px]',
        headingsStyle: 'text-xl font-bold slg:text-sm slg:font-medium slg:text-center',
        numbersStyle: 'text-xl font-bold slg:text-sm slg:font-bold',
        alignment: 'items-center',
        justifyContent: 'justify-between'
    }

    function deleteProduct(id: number) {
        const updatedUserProducts = cartProducts.filter((uProduct) => {
            if (uProduct.id !== id) {
                return true;
            } else {
                return false;
            }
        })

        localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts));
        setCartProducts(updatedUserProducts);
    }

    return (
        <div>
            <HomeNav></HomeNav>
            <div className="max-w-[1240px] p-8 mx-auto space-y-20">
                <section className="rounded-md flex gap-10 shadow-2xl p-10 slg:flex-col">
                    <div className="min-w-[70%] slg:w-full space-y-10">
                        <h1 className="font-bold text-4xl">Your Cart</h1>
                        <CartContext.Provider value={[deleteProduct, setCartProducts]}>
                            <article className="space-y-10 overflow-y-scroll max-h-[450px] transition-[height] duration-300 px-4">
                                <hr />
                                {cartProducts.map((product) => {
                                    return <div key={product.id}>
                                        <ProductPreview product={product} config={myCartStyle}></ProductPreview>
                                        <hr className="my-5"/>
                                    </div>
                                })}
                            </article>
                        </CartContext.Provider>
                    </div>
                    <div className="w-full space-y-5">
                        <h2 className="font-bold text-3xl">Summary</h2>
                        <hr />
                        <Summary products={cartProducts}></Summary>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    )
}