export default function Map() {
    return (
        <section className="my-20 space-y-5">
            <h2 className="text-[2rem] font-semibold text-center">Where To Find Us</h2>
            <div className="relative">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10499.121323542464!2d2.2887120097192226!3d48.8623991109385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sni!4v1695061762829!5m2!1sen!2sni" className="w-full peer" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="bg-black opacity-50 absolute top-0 bottom-0 right-0 left-0 pointer-events-none peer-hover:opacity-0 transition-[opacity] duration-1000 mb:hidden"></div>
            </div>
        </section>
    )
}

//AIzaSyByyGFnowqbr0_p711dvloSZetTUgwMRmc