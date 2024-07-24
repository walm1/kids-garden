import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

export default function Navbar(){
    return(
        <div className="
        flex 
        top-0 
        h-[150px] 
        w-[100%]
        bg-[#195e9b]
        z-0
        ">
            <div className='
            flex
            w-[15%]
            items-center
            justify-center
            '>
                <Link to={'/'}><img src={logo} alt="logo" className='
                h-[120px]
                w-[130px]
                '/></Link>
            </div>
            <div className='
            flex
            w-[85%]
            text-white
            font-bold
            text-[18px]
            items-center
            gap-7
            '>
                <h1 className='
            transition-all
            duration-100
            ease-in-out
            hover:text-[19px]
            hover:text-[#e9e6e6]
            active:text-[#8898ca]
            '><Link to={'/'}>Inicio</Link></h1>
                <h1 className='
                transition-all
            duration-100
            ease-in-out
            hover:text-[19px]
            hover:text-[#e9e6e6]'><Link to={'/nosotros'}>Nosotros</Link></h1>
                <h1 className='
                transition-all
            duration-100
            ease-in-out
            hover:text-[19px]
            hover:text-[#e9e6e6]'><Link to={'/contacto'}>Contáctanos</Link></h1>
                <h1 className='
            transition-all
            duration-100
            ease-in-out
            hover:text-[19px]
            hover:text-[#e9e6e6]'><Link to={'/planes'}>Planes de estudio</Link></h1>
            </div>
        </div>
    )
}