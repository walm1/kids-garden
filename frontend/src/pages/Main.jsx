import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import portrait from '../assets/portrait.png'
import { GoDot, GoDotFill } from "react-icons/go"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useEffect, useState } from "react"
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpeg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpg'
import Level from "../components/LevelSelector"

export default function MainPage(){
    
    const imageList = [
        {image: img1, index: 1},
        {image: img2, index: 2},
        {image: img3, index: 3},
        {image: img4, index: 4},
        {image: img5, index: 5},
        {image: img6, index: 6},
        {image: img7, index: 7}
    ]

    const [imageIndex, setImageIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(imageList.length != 0 ? imageList[0].image : '')

    const handleArrowLeft = () =>{
        setImageIndex(imageIndex - 1)
        if(imageIndex <= 0) setImageIndex((imageList.length - 1))
    }

    const handleArrowRight = () =>{
        setImageIndex(imageIndex + 1)
        if(imageIndex >= (imageList.length - 1)) setImageIndex(0)
    }

    useEffect(()=>{
        setCurrentImage(imageList[imageIndex].image)
    }, [imageIndex])

    return(
        <>
        <Navbar/>
        <div className="flex flex-col min-h-[100vh] mt-[150px]">
            <div className="flex justify-center items-center mt-[20px]">
                <img src={portrait} alt="anuncio" className="rounded-2xl"/>
            </div>
            <div className="flex w-[100%] justify-center items-center mt-[60px] flex-col mb-[30px]">
                <h1 className="font-ubuntu font-extrabold text-[28px]">Colegio Kids Garden</h1>
                {/* <h1 className="font-ubuntu font-extrabold mt-[-6px] text-[28px]"></h1> */}
            </div>
            <section className="flex flex-col font-ubuntu w-[100%] items-center">
                <h2 className="
                flex
                text-[20px]
                ">
                    Con más de x años de experiencia impartiendo educación.
                </h2> 
                <h2 className="flex mr-auto ml-auto items-center
                text-[20px]">
                    Cuenta con profesionales y personal altamente calificado
                    en todas las áreas. 
                </h2>

                <Level />
                <div className="
                flex
                mt-[60px]
                w-[100%]
                ">
                    <div className="
                    justify-center
                    items-center
                    w-[100%]
                    flex
                    ">
                        <div className="flex w-[15%] mt-[30px] items-center justify-end">
                            <FaArrowLeft onClick={handleArrowLeft} className="mr-[10px] size-6 hover:size-7 transition-all duration-200"/>               
                        </div>
                        <div className="flex mt-[30px] w-[65%] items-center justify-center flex-col">
                            <img 
                            className="
                            rounded-lg
                            w-[100%]
                            h-[400px]
                            "
                            src={currentImage} alt="imagen de colegio kids garden" />
                            <div className="flex mt-[10px] mb-[50px]">
                                {
                                    imageList.map(i =>(
                                        <>
                                            {
                                                (i.index - 1) == imageIndex ? 
                                                <GoDotFill className="size-5"/>
                                                : <GoDot className="size-5"/>
                                            }
                                        </>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex w-[15%] items-center justify-start mt-[30px]">
                            <FaArrowRight onClick={handleArrowRight} className="ml-[10px] size-6 hover:size-7  transition-all duration-200"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
            <Footer />
        </>
    )
}