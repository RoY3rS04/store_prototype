import Parfum from '../assets/parfum.png'
import { Link } from 'react-router-dom'

export default function Logo({ className }: {className?: string}) {
    return (
        <Link to='/' className={`flex items-center gap-x-2 ${className}`}>
            <div className='w-10 h-10'>
                <img className='w-ful' src={Parfum} alt="Logo image"/>
            </div>
            <h2 className='font-semibold text-xl xs:text-sm'>Eau de Parfum Store</h2>
        </Link>
    )
}