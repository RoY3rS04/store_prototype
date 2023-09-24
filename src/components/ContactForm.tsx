export default function ContactForm() {
    return (
        <section className='relative bg-side-parfums bg-no-repeat bg-right bg-xs xs:bg-xxs' id="contact-us">
            <div className='max-w-[1240px] p-8 mx-auto'>
                <div className='max-w-[70%]'>
                <h2 className="text-[2rem] font-semibold my-10">Contact Us</h2>
                <form className="space-y-5">
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="name">Name</label>
                        <input className="rounded border-b-[1px] focus:outline-none border-[gray] py-1 px-2" id="name" name="name" type="text" placeholder="Your Name"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="email">Email</label>
                        <input className="rounded border-b-[1px] focus:outline-none border-[gray] py-1 px-2" id="email" name="email" type="email" placeholder="Your Email"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="phone">Phone</label>
                        <input className="rounded border-b-[1px] focus:outline-none border-[gray] py-1 px-2" id="phone" name="phone" type="tel" placeholder="Your Phone"/>
                    </div>
                    <div className="flex flex-col gap-y-1">
                        <label htmlFor="message">Message</label>
                        <input className="rounded border-b-[1px] focus:outline-none border-[gray] py-1 px-2" id="message" name="message" type="text" placeholder="Write a Message"/>
                    </div>
                    <button className="text-lg text-white font-medium py-2 px-10 bg-[#b51f42] rounded-[10px]" type="submit">Send</button>
                </form>
            </div>
            </div>
        </section>
    )
}