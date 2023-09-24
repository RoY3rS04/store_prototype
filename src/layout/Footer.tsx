import Logo from "../components/Logo";
import Networks from "../components/Networks";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="py-10 px-20 mb:px-5 flex gap-x-20 mb:flex-col mb:items-center justify-between">
            <div className="flex flex-1 justify-between mb:gap-x-3 slg:grid slg:grid-cols-2 slg:gap-x-5 slg:gap-y-10">
                <div className="space-y-3 slg:col-span-2 slg:flex slg:flex-col slg:items-center">
                    <Logo></Logo>
                    <p className="text-sm slg:text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Networks></Networks>
                </div>
                <div className="slg:flex slg:flex-col slg:items-center">
                    <h2 className="font-bold text-[18px]">Navigate</h2>
                    <div className="flex text-lg font-medium gap-4 flex-col mt-6">
                        <Link className="slg:text-center" to="/">Home</Link>
                        <Link className="slg:text-center" to="/shop">Shop</Link>
                        <Link className="slg:text-center" to="/cart">Cart</Link>
                    </div>
                </div>
                <div className="slg:flex slg:flex-col slg:items-center">
                    <h2 className="font-bold text-[18px]">Company</h2>
                    <div className="flex text-lg font-medium gap-4 flex-col mt-6">
                        <a className="slg:text-center" href="#">About Us</a>
                        <a className="slg:text-center" href="/#contact-us">Contact Us</a>
                        <a className="slg:text-center" href="/#we-offer">What We Offer</a>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6 slg:col-span-2">
                    <h2 className=" font-bold text-[18px]">Suscribe Us</h2>
                    <form action="">
                        <div className="relative">
                            <input
                                placeholder="Info@yourgmail.com"
                                name="sub-email"
                                className="py-[17px] w-full  bg-transparent border-[1px] border-[#343444] rounded-[10px] pl-6 pr-[100px] placeholder-[#8A8AA0]"
                                type="email"
                            />
                            <button className="bg-[#b51f42] py-4 px-[18px] absolute right-0 h-full rounded-r-[10px]">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M3.91533 2.18876C4.23957 1.95506 4.67182 1.93688 5.01454 2.14251L20.0145 11.1425C20.3157 11.3232 20.5 11.6487 20.5 12C20.5 12.3513 20.3157 12.6768 20.0145 12.8575L5.01454 21.8575C4.67182 22.0631 4.23957 22.0449 3.91533 21.8112C3.5911 21.5775 3.43715 21.1732 3.52386 20.7831L5.25343 13L10.5 13C11.0523 13 11.5 12.5523 11.5 12C11.5 11.4477 11.0523 11 10.5 11L5.25343 11L3.52386 3.21693C3.43715 2.82677 3.5911 2.42246 3.91533 2.18876Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </footer>
    );
}
