import { CartConfig, CartProduct } from "../types";
import { useState, useContext } from "react";
import { CartProductsContext } from "../routes/Shop";
import { type UserProductsTuple } from "../types";
import { ProductContext } from "../routes/Product";
import { useLocation } from "react-router-dom";
import { CartContext } from "../routes/Cart";
import { type Dispatch, type SetStateAction } from "react";

export default function ProductPreview({ product, config }: { product: CartProduct, config?: CartConfig }) {
    
    let imgStyle: string = 'w-10 h-9';
    let headiingsStyle: string = 'text-xs font-bold';
    let numsStyle: string = 'font-bold';
    let align: string = '';
    let justify: string = '';

    if (config) {
        const {
            imageStyle,
            headingsStyle,
            numbersStyle,
            alignment,
            justifyContent
        } = config;

        imgStyle = imageStyle;
        headiingsStyle = headingsStyle;
        numsStyle = numbersStyle;
        align = alignment;
        justify = justifyContent
    }

    const { pathname } = useLocation();

    const [quantity, setQuantity] = useState(product.quantity);
    const userProductsStorage: CartProduct[] = JSON.parse(localStorage.getItem('userProducts') ?? '[]');

    let handleDelete: (id: number) => void;
    let setCart: Dispatch<SetStateAction<CartProduct[]>>;

    if (pathname.includes('shop')) {
        const [, , deleteProduct] = useContext(CartProductsContext) as UserProductsTuple<CartProduct[]>;

        handleDelete = deleteProduct;
    } else if (pathname.includes('product')) {
        const [, , deleteProduct] = useContext(ProductContext) as UserProductsTuple<CartProduct[]>;

        handleDelete = deleteProduct;
    } else if (pathname.includes('cart')) {
        const [deleteProduct, setCartProducts] = useContext(CartContext) as [(id: number) => void, Dispatch<SetStateAction<CartProduct[]>>];

        handleDelete = deleteProduct;
        setCart = setCartProducts;
    }

    function handlePlusClick() {
        //if the quantity is equal to all the stock of that product the store has then quantity can't increase. (You can implement this with a stock property in your CartProduct type, I won't do this cause the api i'm working with doesn't have the field)
        setQuantity((prev) => prev + 1);
        product.quantity = quantity + 1;

        const updatedUserProducts = userProductsStorage.map((uProduct) => {
            if (uProduct.id === product.id) {
                uProduct.quantity++;
            }

            return uProduct;
        })

        if (pathname.includes('cart')) {
            setCart(updatedUserProducts);
        }
        
        localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts))
    }

    function handleMinusClick() {
        //if the quantity is 1 you can't decrease it, you have to click the delete button to delete the final one.
        if (quantity === 1) {
            return;
        }

        setQuantity((prev) => prev - 1);
        product.quantity = quantity - 1;

        const updatedUserProducts = userProductsStorage.map((uProduct) => {
            if (uProduct.id === product.id) {
                uProduct.quantity--;
            }

            return uProduct;
        })

        if (pathname.includes('cart')) {
            setCart(updatedUserProducts);
        }
        
        localStorage.setItem('userProducts', JSON.stringify(updatedUserProducts))
    }

    return (
        <div className={`${align} ${justify} flex slg:flex-col gap-5`}>
            <div className="space-y-3 slg:flex slg:flex-col slg:items-center flex-1">
                <h3 className={headiingsStyle}>{product.title}</h3>
                <div className={imgStyle}>
                    <img className='w-full h-full object-fill object-center' src={product.image} alt="Product image" />
                </div>
            </div>
            <div className="flex flex-1 gap-x-5 slg:flex slg:gap-x-5">
                <div className="flex-1 space-y-1">
                    <h3 className={`${headiingsStyle} text-center`}>Quantity</h3>
                    <div className={`flex ${pathname.includes('cart') ? 'flex-row-reverse gap-x-4' : 'flex-col'} justify-center items-center`}>
                        <button onClick={handlePlusClick} type='button'>+</button>
                        <span className={numsStyle}>{quantity}</span>
                        <button onClick={handleMinusClick} type="button">-</button>
                    </div>
                </div>
                <div className="flex flex-1 space-y-1 flex-col">
                    <h3 className={headiingsStyle}>Total</h3>
                    <div className="flex items-center justify-between">
                        <span className={numsStyle}>${(product.price*quantity).toFixed(2)}</span>
                        <button onClick={() => handleDelete(product.id)} className="font-bold text-red-600">x</button>
                    </div>
                </div>
            </div>
        </div>
    )
}