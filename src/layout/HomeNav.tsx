import Logo from "../components/Logo";
import { Link, useLocation } from "react-router-dom";
import CartIcon from "../icons/Cart";
import CartPreview from "../shop/CartPreview";
import { CartProductsContext } from "../routes/Shop";
import { ProductContext } from "../routes/Product";
import { useContext, useState } from "react";
import { CartProduct, UserProductsTuple } from "../types";
import { reducer } from "../routes/Shop";
import MenuIcon from "../icons/Menu";

import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";

export default function HomeNav() {
    const { pathname: actualPath } = useLocation();

    let count: number = 0,
        products: CartProduct[] = [];

    if (actualPath === "/shop") {
        const [, userProducts] = useContext(
            CartProductsContext
        ) as UserProductsTuple<CartProduct[]>;

        count = reducer(userProducts);
        products = userProducts;
    } else if (actualPath.includes("product")) {
        const [, cartProduct] = useContext(ProductContext) as UserProductsTuple<
            CartProduct[]
        >;

        if (cartProduct.length > 0) {
            count = reducer(cartProduct);
            products = cartProduct;
        }
    }

    const [openCart, setOpenCart] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleClick() {
        setOpenCart((prev) => !prev);
    }

    return (
        <div className="flex justify-between px-20 items-center sticky py-8 z-10 top-0 bg-white xs:px-10">
            <Logo></Logo>
            <nav className="w-[400px] mb:hidden">
                <ul className="flex items-center justify-between text-lg font-medium">
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <a href="/#we-offer">Why We</a>
                    </li>
                    <li>
                        <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                        <a href="/#contact-us">Contact Us</a>
                    </li>
                    {actualPath.includes("shop") ||
                    actualPath.includes("product") ? (
                        <div className="relative">
                            <div
                                onClick={handleClick}
                                className="cursor-pointer"
                            >
                                <CartIcon productsCount={count}></CartIcon>
                            </div>
                            {openCart ? (
                                <CartPreview
                                    handleClose={handleClick}
                                    userProducts={products}
                                ></CartPreview>
                            ) : null}
                        </div>
                    ) : null}
                </ul>
            </nav>
            <div
                className="hidden mb:block cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
            >
                <MenuIcon></MenuIcon>
                <Drawer
                    isOpen={isMenuOpen}
                    placement="right"
                    onClose={() => setIsMenuOpen(false)}
                    size="xs"
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <Logo></Logo>
                        </DrawerHeader>

                        <DrawerBody>
                            <nav>
                                <ul className="flex flex-col items-center gap-y-5 text-lg font-medium">
                                    <li>
                                        <Link to={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/#we-offer">Why We</Link>
                                    </li>
                                    <li>
                                        <Link to={"/shop"}>Shop</Link>
                                    </li>
                                    <li>
                                        <Link to="/#contact-us">
                                            Contact Us
                                        </Link>
                                    </li>
                                    {actualPath.includes("shop") ||
                                    actualPath.includes("product") ? (
                                        <div className="relative">
                                            <Link
                                                className="py-2 px-3 rounded bg-black text-white font-medium"
                                                to="/cart"
                                            >
                                                Your Cart
                                            </Link>
                                            <div
                                                className={`absolute rounded-full text-white flex items-center justify-center bg-[#b51f42] w-6 h-6 top-[-15px] right-[-15px] opacity-0 transition-[opacity] duration-300 ${
                                                    count > 0
                                                        ? "opacity-100"
                                                        : null
                                                }`}
                                            >
                                                <span className="text-xs font-medium">
                                                    {count > 99
                                                        ? "99+"
                                                        : count}
                                                </span>
                                            </div>
                                        </div>
                                    ) : null}
                                </ul>
                            </nav>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    );
}
