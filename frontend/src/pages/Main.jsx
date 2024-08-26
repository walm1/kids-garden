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
import TopWelcome from "../components/TopWelcome"
import AboutUs from "../components/Aboutus"
import Contact from "../components/Contact"

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
            <TopWelcome />
            <AboutUs />
            <Contact />
            <Level />
        </div>
            <Footer />
        </>
    )
}