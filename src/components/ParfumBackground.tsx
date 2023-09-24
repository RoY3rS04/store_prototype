import parfumBackground from '../assets/parfums-background.jpg'

export default function ParfumBackground() {
    return (
        <section className='relative flex items-center isolate justify-center h-[500px]'>
            <img className='absolute w-full h-full object-cover object-center z-[-1]' src={parfumBackground} alt="The Best Parfums" />
            <div className='h-full w-full flex justify-center items-center absolute z-[-1] bg-black opacity-30'>
            </div>
            <h2 className='text-white uppercase text-[125px] text-center xs:text-[4rem] mb:text-[6rem] font-bold z-1'>The Best Parfums</h2>
        </section>
    )
}