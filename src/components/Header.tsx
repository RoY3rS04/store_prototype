import perfumeBanner from '../assets/perfumeBanner.png'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
    return (
        <header className="flex md:flex-col md:gap-y-10 gap-x-10 mt-10">
            <section className="flex flex-col gap-y-5 flex-1">
                <h1 className="font-bold text-left text-[4rem] xs:text-[2rem]">Welcome to Eau de Parfum Store</h1>
                <p className="text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi earum corrupti facilis repellat qui ea in dolorum beatae saepe expedita voluptatibus minima, velit placeat voluptas! Maxime voluptatibus assumenda quae.</p>
                <div className="flex items-center gap-3 xs:flex-col xs:items-stretch">
                    <Link to="/shop" className="py-2 px-3 bg-[#b51f42] rounded text-white font-medium xs:text-center">Go to shop</Link>
                    <a className="py-2 px-3 bg-black rounded text-white font-medium xs:text-center" href="#contact-us">Contact Us</a>
                </div>
            </section>
            <div className="flex-1 md:flex md:items-center md:justify-center">
                <img className='w-full md:w-[70%]' src={perfumeBanner} alt="Banner image" />
            </div>
        </header>
    )
}