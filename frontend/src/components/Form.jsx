import { useEffect, useState } from "react";
import InputDefault from "./Input";
import { toast } from "react-toastify";

export default function Form(){
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [tel, setTel] = useState()
    const [level, setLevel] = useState()
    const [queryBody, setBody] = useState()

    const handleName = (e) =>{
        setName(e.target.value)
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }

    const handleTel = (e) =>{
        setTel(e.target.value)
    }

    const handleLevel = (e) =>{
        setLevel(e.target.value)
    }

    useEffect(()=>{
        setBody(JSON.stringify({
            name: name,
            email: email,
            tel: tel,
            level: level
        }))
    }, [name, email, tel, level])

    const handleSubmit = async() =>{
        if(!name || !email || !tel || !level
            || name.length == 0 || email.length == 0 || tel.length == 0 || level.length == 0
        ) return toast.error('Faltan datos en el formulario', {position:'bottom-right',autoClose: 1500, hideProgressBar: true})

        toast.success('Enviado correctamente', {position:'bottom-right',autoClose: 1500})
        return await fetch('http://localhost:3000/send-mail', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: queryBody
        }).then(res => res.json()).then(data => console.log(data))
    }

    return(
        <>
        <div className="
        font-ubuntu
        flex    
        w-[100%]
        h-[100%]
        items-start
        justify-center
        mb-[40px]
        ">
            <div className="
            flex
            flex-col
            items-center
            justify-center
            w-[90%]
            h-[100%]
            bg-white
            rounded-xl
            shadow-
            shadow-[#7e7e7e]
            shadow-2xl
            ">
                <div className="flex mb-[15px] flex-col justify-start w-[80%] items-start">
                    <h1 className="text-lg font-bold">
                    ¿Tienes preguntas?
                    </h1>
                    <h2>Escribenos y nos comunicaremos contigo.</h2>
                </div>
                    <div className="
                    flex
                    flex-col
                    gap-3
                    w-[80%]
                    justify-center
                    items-start
                    ">
                        <InputDefault method={handleName} type={"text"} name={"name"} text={"Nombre"}/>
                        <InputDefault method={handleEmail} type={"email"} name={"email"} text={"Correo Electrónico"}/>
                        <InputDefault method={handleTel} type={"tel"} name={"tel"} text={"Teléfono"} />              
                        <InputDefault method={handleLevel} type={"select"} name={"level"} />
                    </div>
                    <div className="flex justify-start items-center w-[80%] mt-[10px]">
                    <button onClick={handleSubmit} title="Enviar información" className="
                    border-black
                    border-[1px]
                    transition-all
                    ease-in-out
                    duration-100
                    text-black 
                    w-[90%]
                    h-[45px]
                    border-solid
                    rounded-2xl
                    active:text-[18px]
                    hover:bg-gray-200
                    "
                    >Enviar</button>
                </div>
                </div>
            </div>
        </>
    )
}