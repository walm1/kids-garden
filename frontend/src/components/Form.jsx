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
        ) return toast.error('Faltan datos en el formulario', {autoClose: 1500, hideProgressBar: true})

        toast.success('Enviado correctamente', {autoClose: 1500})
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
        flex    
        w-[100%]
        h-[350px]
        items-end
        justify-center
        mb-[20px]
        ">
            <div className="
            flex
            flex-col
            items-center
            justify-center
            w-[60%]
            h-[330px]
            bg-[#195e9b]
            rounded-xl
            mt-auto
            ">
                <div className="flex mb-[20px] top-20 text-white font-extrabold text-lg">
                    <h1>¿Necesitas más información?</h1>
                </div>
                <div className="flex w-[100%]">
                    <div className="
                    flex
                    flex-col
                    text-white
                    font-extrabold
                    gap-5
                    w-[50%]
                    justify-center
                    items-center
                    ">
                        <label htmlFor="name">Nombre completo:</label>
                        <label htmlFor="email">Correo electrónico:</label>
                        <label htmlFor="tel">Teléfono:</label>
                        <label htmlFor="level">Plan de estudio de interés: </label>
                    </div>
                    <div className="
                    flex
                    flex-col
                    gap-3
                    w-[50%]
                    justify-start
                    items-start
                    ">
                        <InputDefault method={handleName} type={"text"} name={"name"} text={"Ejemplo: Marcos López"}/>
                        <InputDefault method={handleEmail} type={"email"} name={"email"} text={"ejemplo@ejemplo.com"}/>
                        <InputDefault method={handleTel} type={"tel"} name={"tel"} text={"Ejemplo: 12981045"} />              
                        <InputDefault method={handleLevel} type={"select"} name={"level"} />
                    </div>
                </div>
                <div className="flex justify-center items-center flex-row h-[50px] bottom-6 mt-[20px]">
                    <button onClick={handleSubmit} title="Enviar información" className="
                    transition
                    ease-linear
                    duration-200
                    text-white 
                    bg-[#1874c3]
                    w-[90px]
                    h-[40px]
                    border-[2px]
                    border-solid
                    border-white
                    rounded-2xl
                    active:bg-[#5aa2e0d5] active:w-[95px] active:h-[45px]
                    "
                    >Enviar</button>
                </div>
            </div>
        </div>
        </>
    )
}