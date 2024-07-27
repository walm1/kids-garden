import Footer from "../components/Footer";
import Form from '../components/Form'
import Navbar from "../components/Navbar";
import { Fade } from 'react-awesome-reveal'
import { TbClockHour9 } from "react-icons/tb";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { MdOutlineMail, MdOutlineLocationOn, MdWhatsapp  } from "react-icons/md";

export default function Contact(){

    const info = [
        {data: 'Horario de Oficina: Lunes a Viernes de 7:00 a 13:00 hrs.', icon: TbClockHour9 },
        {data: '6627-8010', icon: BsFillTelephoneFill },
        {data: 'secretaria@ligadevidanueva.edu.gt', icon: MdOutlineMail },
        {data: '5a. Calle 15-20 Los Angeles Zona 4 Villa Nueva, Guatemala', icon: MdOutlineLocationOn },
    ]

     {/*const mails = [
        {name: 'Director:', adress: 'admineducativa@ligadevidanueva.edu.gt'},
        {name: 'Asistente de Direccion:', adress: 'asisdir@ligadevidanueva.edu.gt'},
        {name: 'Secretaría:', adress: 'secretaria@ligadevidanueva.edu.gt'},
        {name: 'Coordinación Programa Apoyo Escolar:', adress: 'pae@ligadevidanueva.edu.gt'},
        {name: 'Coordinación Pre Primaria:', adress: 'prepri@ligadevidanueva.edu.gt'},
        {name: 'Coordinación Primaria:', adress: 'primaria@ligadevidanueva.edu.gt'},
        {name: 'Coordinación Secundaria:', adress: 'basicos@ligadevidanueva.edu.gt'},
        {name: 'Contabilidad del colegio:', adress: 'cobros@ligadevidanueva.edu.gt'},
        
    ] */}
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.513672464238!2d-90.58643132430929!3d14.512585179224263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a3d87de100ed%3A0xaf7d08fcbd0d4694!2sCentro%20Educativo%20Cristiano%20%22Liga%20de%20Vida%20Nueva%22!5e0!3m2!1ses-419!2sgt!4v1722111519030!5m2!1ses-419!2sgt" 
                        className="w-[100%] md:h-[300px]"
                        allowfullscreen="true" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div className="flex w-[100%] mt-[50px]">
                        <div className="flex w-[50%] flex-col ml-[50px] justify-center">
                            <h1 className="justify-start ml-[50px] font-ubuntu text-[45px] font-extrabold">Contacto</h1>
                            <div className="flex flex-col">
                                {info.map(item =>(
                                    <>
                                        <div className="flex gap-5 mt-[20px]">
                                            <item.icon className="size-7"/>
                                            <h1 className="text-lg">{item.data}</h1>
                                        </div>
                                    </>
                                ))}
                            </div>
                            <div className="flex left-12 gap-4 w-[100%] mt-[50px] h-[100px] ml-[50px]">
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdOutlineLocationOn className=" size-9" onClick={() => {window.open('https://www.google.com/maps/place/Centro+Educativo+Cristiano+%22Liga+de+Vida+Nueva%22/@14.5125852,-90.5864313,17z/data=!3m1!4b1!4m6!3m5!1s0x8589a3d87de100ed:0xaf7d08fcbd0d4694!8m2!3d14.51258!4d-90.5838564!16s%2Fg%2F1ptw__45z?entry=ttu', '_blank')}}/>
                                </div>
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdOutlineMail onClick={()=>{window.open('https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSMTDxFvbhWdZHfltQldjzrksPRHNrLNrhJhNzbTvCVlTKKTcHvpQBldmZdkRRhBrMhwXrXs', '_blank')}} className="size-9"/>
                                </div>
                                <div className="transition-all duration-200 hover:bg-gray-200 hover:size-15 flex items-center justify-center border-black border-solid border-2 rounded-[100px] size-14">
                                    <MdWhatsapp onClick={()=>{window.open('https://wa.link/vz5az1', '_blank')}} className="size-9"/>
                                </div>                           
                            </div>
                            <div className="flex w-[90%]">
                                <p className="font-ubuntu text-center">Somos parte del miniesterio New Life Advance International <a title="Ir a www.nlai.org" href="https://nlai.org" target="_blank">(www.nlai.org).</a></p>
                            </div>
                        </div>
                        <div className="flex w-[50%] h-[100%]">
                            <Form />
                        </div>
                    </div>
                    
                </div>
            </section>
            <Footer />
        </>
    )
}