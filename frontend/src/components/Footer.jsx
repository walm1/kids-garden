import logo from '../assets/kids_garden_logo.png'
import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa'
import { FaSquareEnvelope } from "react-icons/fa6";
import { IconContext } from 'react-icons'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer(){
    const handleFacebook = () =>{
        let confirmPrompt = confirm('¿Desea ir a facebook?')
        if(confirmPrompt == false) return toast.error('Cancelado', {
            autoClose: 1500,
            pauseOnHover: false
        }) 

        window.open('https://www.facebook.com/colegioKG')
    }

    const handleWhastapp = () =>{
        let confirmPrompt = confirm('¿Desea ir a whatsapp?')
        if(confirmPrompt == false) return toast.error('Cancelado', {
            autoClose: 1500,
            pauseOnHover: false
        })

        // window.open('https://wa.link/vz5az1')
    }

    const handleMail = () =>{
        let confirmPrompt = confirm('¿Desea ir a gmail?')
        if(confirmPrompt == false) return toast.error('Cancelado', {
            autoClose: 1500,
            pauseOnHover: false
        })

        //window.open('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMTDxFvbhWdZHfltQldjzrksPRHNrLNrhJhNzbTvCVlTKKTcHvpQBldmZdkRRhBrMhwXrXs')
    }

    const getInTouch = () =>{
        window.open('https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZdBnpgRdrCmGcJwDczPQjTksFvfsxKfTvqKCchBMqShWrRnzsrdzdTFQgdwsjLDzxHnvB')
    }

    return(
        <>
        <div className='
        flex
        w-[100%]
        bg-[#2c9928]
        bottom-0
        h-[150px]
        '>
            <div className='flex w-[30%] h-[100%] items-center justify-center'>
                <img src={logo} alt="Kids garden" className='flex w-[150px] h-[150px]'/>
            </div>

            <div className='flex w-[70%] flex-col justify-center items-center'>
                <div className='
                flex w-[100%] items-center 
                justify-center h-[35%]
                text-white'
                >
                    <IconContext.Provider value={{size: "2.3rem"}}>
                        <FaFacebookSquare title='Ir a facebook' className='hover:text-gray-200 cursor-pointer' onClick={handleFacebook}/>
                        <FaWhatsappSquare title='Ir a Whatsapp' className='hover:text-gray-200 cursor-pointer' onClick={handleWhastapp}/>
                        <FaSquareEnvelope title='Ir al correo' className='hover:text-gray-200 cursor-pointer' onClick={handleMail}/>
                    </IconContext.Provider>
                </div>
                <div className='flex flex-col text-white w-[100%] h-[65%] items-center mt-[5px]'>
                    <h3 className='font-bold text-center'>22 Calle 6 - 03</h3>
                    <h3 className='font-bold text-center'>Fuentes del Valle 2, Villa Nueva</h3>
                    <h3 className='font-bold text-center'>Tel: 6640 4530</h3>
                </div>
            </div>       
        </div>
        <div className='
        text-white
        bg-[#2c9928]
        flex
        w-[100%]
        bottom-0
        h-[40px]
        '>
            <div className='flex  items-center w-[50%] justify-center'>
                <h1 className='text-[10px]'>&copy; COLEGIO KIDS GARDEN GUATEMALA 2024. TODOS LOS DERECHOS RESERVADOS</h1>
            </div>
            <div className='flex items-center justify-center w-[50%]'>
                <h1 className='text-[11px]'>DESARROLLADO POR: <strong onClick={getInTouch} title='Ir a gmail' className='text-blue-500 hover:underline hover:cursor-pointer'>jsdevelopers21@gmail.com</strong></h1>
            </div>
        </div>
        </>
    )
}