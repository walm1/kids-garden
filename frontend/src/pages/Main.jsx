import Footer from "../components/Footer"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import portrait from '../assets/portrait.png'
import { Fade } from 'react-awesome-reveal'

export default function MainPage({page}){
    return(
        <>
        <Navbar/>
        <div className="flex flex-col min-h-[100vh] mt-[150px]">
            <div className="flex justify-center items-center mt-[20px]">
                <img src={portrait} alt="anuncio" className="rounded-2xl"/>
            </div>
            <div className="flex w-[100%] justify-center items-center mt-[60px]">
                <h1 className="font-ubuntu font-extrabold text-[28px]">Centro Educativo Cristiano</h1>
                <h1 className="font-ubuntu font-extrabold text-[28px]">"Liga de Vida Nueva"</h1>
            </div>
            <section className="flex flex-col font-ubuntu w-[100%] mr-auto ml-auto items-center">
                <h2 className="
                flex
                text-[20px]
                ">
                    Con más de 30 años de experiencia impartiendo educación.
                </h2> 
                <h2 className="flex mr-auto ml-auto items-center
                text-[20px]">
                    Cuenta con profesionales universitarios y personal altamente calificado
                    en todas las áreas. 
                </h2>
            </section>
        </div>
            <Footer />
        </>
    )
}