import { useEffect, useState } from 'react';
import logo from '../assets/kids_garden_logo.png'
import {Link, NavLink} from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar(){
    const [nav, setNav] = useState(false)
    const [over, setOver] = useState(false)
    const [active, setActive] = useState()

    const handleLinks = ()=>{

    }

    const handleNav = ()=>{
        setNav(!nav)
    }

    const handleOver = () =>{
        setOver(!over)
    }


    useEffect(()=>{
        const inicio = document.getElementById('inicio')
        const aboutus = document.getElementById('aboutus')
    }, [])


    const navItems = [
        {id: 1, text: "Inicio", path: "inicio"},
        {id: 2, text: "Nosotros", path: "aboutus"},
        {id: 3, text: "Contáctanos", path: "contact"},
    ]

    return(
        <div 
        className="
        overflow-hidden
        flex 
        top-0 
        fixed
        md:h-[130px] 
        h-[110px]
        w-[100%]
        bg-[#2c9928]
        rounded-br-2xl
        rounded-bl-2xl
        ">
            <div className='
            flex
            w-[15%]
            items-center
            justify-center
            '>
                <NavLink>
                <img src={logo} 
                alt="logo" className='
                md:h-[120px]
                md:w-[130px]
                w-[130px]
                h-[100px]
                '/></NavLink>
            </div>
            <div 
            className='
            hidden
            md:flex
            w-[85%]
            text-white
            font-bold
            text-[18px]
            items-center
            justify-end
            mr-[50px]
            gap-[40px]
            '>
              {navItems.map(item =>(
                <button 
                onMouseOver={over == true ? handleOver : ''}
            className='transition-all
            duration-100
            ease-in-out
            hover:text-[19px]
            hover:text-[#e9e6e6]' onClick={()=>{
                document.getElementById(item.path).scrollIntoView({behavior: 'smooth'})
            }} key={item.id} >{item.text}</button>
              ))}

            </ div >    

            <div className='flex md:hidden items-center justify-end w-[85%] mr-[10px]'>
                {nav ? <AiOutlineClose className='hover:cursor-pointer' onClick={handleNav} color='white' size={40}/> : <AiOutlineMenu className='hover:cursor-pointer' onClick={handleNav} color='white' size={50} />}
            </div>

            <div className={
                nav ? 'shadow-xl shadow-[#242e68] bg-[#195e9b]  fixed md:hidden left-0 top-0 h-full w-[70%] ease-in-out duration-200'
            : 'ease-in-out w-[60%] fixed top-0 bottom-0 left-[-100%] duration-200'}>

                <div className='flex mt-[50px] flex-col h-[100%] items-start'>
                    {
                    navItems.map(item => (
                        <>
                        <div 
                        className='h-[50px] hover:bg-[#124572] flex gap-6 w-[100%] items-center justify-center'>
                            <NavLink
                            style={({ isActive }) => {
                                return {
                                  color: isActive ? "rgb(190, 300, 255)" : "white",
                                };
                            }}
                            className={"flex text-white text-xl"}
                            key={item.id}
                            >
                                {item.text}
                            </NavLink>
                        </div>
                        </>
                        
                    ))
                }
                <div 
                        className='h-[50px] hover:bg-[#124572] flex gap-6 w-[100%] items-center justify-center'>
                            <NavLink
                            style={({ isActive }) => {
                                return {
                                  color: isActive ? "rgb(190, 300, 255)" : "white",
                                };
                            }}
                            className={"flex text-white text-xl"}
                            to={'/noticias'}
                            >
                                Noticias
                            </NavLink>
                        </div>
                </div>
              
            </div>
        </div>
    )
}