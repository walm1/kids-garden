import Footer from "../components/Footer";
import Form from '../components/Form'
import Navbar from "../components/Navbar";
import { Fade } from 'react-awesome-reveal'
import { TbClockHour9 } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn, MdWhatsapp } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import NewsSquare from "../components/NewsSquare";

export default function Contact(){

    const info = [
        {data: 'Horario de Oficina: Lunes a Viernes de 7:00 a 13:00 hrs.', icon: TbClockHour9 },
        {data: '6640 4530', icon: BsFillTelephoneFill },
        {data: 'corre@kidsgarden.com', icon: MdOutlineMail },
        {data: '22 calle 6-03 Residenciales FV2 Villa Nueva, Ciudad de Guatemala', icon: MdOutlineLocationOn },
    ]

    return(
        <>
            <Navbar />
            <section
            className="
            flex
            flex-col
            md:mt-[150px]
            mt-[110px]
            min-h-screen
            mb-[30px]
            "
            >
                <div 
                className="
                flex
                flex-col
                h-[60%]
                w-[100%]
                ">
                    <div className="flex flex-col w-[100%]">
                        {/*<iframe
                        className="w-[100%] md:h-[300px] h-[100%]"
                            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDei2mFfNk3BCm9QBvKskEW_ukgz96b9v8&q=Centro+Educativo+Cristiano+Liga+de+Vida+Nueva">
                        </iframe> */}
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d835.7340605642983!2d-90.57084790209134!3d14.526536218948346!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a75145f9567d%3A0x6073a3bbe02b9bb5!2sColegio%20Kids%20Garden!5e0!3m2!1ses-419!2sgt!4v1724275648968!5m2!1ses-419!2sgt"
                        className="w-[100%] md:h-[300px]"
                        allowfullscreen="true" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="flex w-[100%] md:mt-[50px] mt-[20px]">
                        <div className="flex md:w-[50%] w-[90%] flex-col md:ml-[50px] ml-[25px] justify-center">
                            <h1 className="flex md:justify-start md:ml-[50px] justify-center font-ubuntu text-[45px] font-extrabold">Contacto</h1>
                            <div className="flex flex-col">
                                {info.map(item =>(
                                    <>
                                        <div className="flex gap-5 mt-[20px] items-center">
                                            <div className="flex w-[5%]">
                                                <item.icon className="size-7"/>
                                            </div>
                                            <div className="flex">
                                                <h1 className="md:text-lg text-[16px] text-wrap">{item.data}</h1>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="flex justify-center md:justify-start gap-4 w-[100%] mt-[50px] h-[100px] md:ml-[50px]">
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdOutlineLocationOn className=" size-9" onClick={() => {window.open('https://www.google.com/maps/place/Centro+Educativo+Cristiano+%22Liga+de+Vida+Nueva%22/@14.5125852,-90.5864313,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a3d87de100ed:0xaf7d08fcbd0d4694!8m2!3d14.51258!4d-90.5838564!16s%2Fg%2F1ptw__45z?entry=ttu', '_blank')}}/>
                                </div>
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdOutlineMail onClick={()=>{window.open('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMTDxFvbhWdZHfltQldjzrksPRHNrLNrhJhNzbTvCVlTKKTcHvpQBldmZdkRRhBrMhwXrXs', '_blank')}} className="size-9"/>
                                </div>
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdWhatsapp onClick={()=>{window.open('https://wa.link/', '_blank')}} className="size-9"/>
                                </div>                           
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <FaFacebookF onClick={()=>{window.open('https://www.facebook.com/colegioKG', '_blank')}} className="size-7"/>
                                </div>                                             
                            </div>
                        </div>   
                        <div className="md:flex w-[50%] h-[500px] hidden">
                            <Form />
                        </div>              
                    </div>                 
                </div>
                <div className="items-center h-[450px] justify-center flex md:hidden w-[100%] mt-[50px]">
                    <Form />
                </div>
            </section>
            <Footer />
        </>
    )
}