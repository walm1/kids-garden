import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import welcomeImg from "../assets/welcome_banner.jpg"
import { useEffect } from "react"

export default function TopWelcome({contactRef, aboutUsRef}){

    useEffect(()=>{
      const contact = document.getElementById('contact')
      const planes = document.getElementById('planes')
    }, [])

    return(
        <>
        <section id="inicio" className="flex pt-24 min-h-[85vh]">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <h1 className="text-4xl font-bold">Bienvenidos a Kids Garden</h1>
              <p className="text-muted-foreground text-lg">
                Somos un colegio dedicado a brindar una educación de calidad a nuestros estudiantes. Nuestro enfoque se
                centra en el desarrollo integral de los niños, fomentando su crecimiento académico, emocional y social.
              </p>
              <button
                onClick={()=>{
                  contact?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
                className="inline-flex hover:bg-[#30b32c] justify-center items-center gap-2 bg-[#2c9928] text-white rounded-md px-6 py-3"
              >
                Contáctanos
                <FaArrowRight className="flex h-4 w-4" />
              </button>
              <button
                onClick={()=>{
                  planes?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }}
                className="inline-flex hover:bg-[#ff8c09] ml-[1%] justify-center items-center gap-2 bg-[#ff951c] text-white rounded-md px-6 py-3"
              >
                Planes de Estudio
                <FaArrowRight className="flex h-4 w-4" />
              </button>
            </div>
            <div className="items-center justify-center">
              <img src={welcomeImg} alt="banner" className="h-[400px] w-[550px] rounded-lg "/>
            </div>
            </div >
            </div >
            </ section>
        </>
    )
}