export default function InputDefault({type, name, text, method}){
    return(
        <>
           {
            type != "select" ?
            <input onChange={method} className="
            shadow-sm
            shadow-[#90b3ff]
            p-[5px]
            w-[90%]
            rounded-lg
            text-[14px]
            border-none
            focus:outline-1
            focus:outline
            focus:outline-black
            focus:outline-offset-[-2px]
            " type={type} name={name} placeholder={text} />
        : 
        <select onChange={method} className="
            p-[5px]
            w-[90%]
            rounded-lg
            text-[14px]
            border-none
            bg-white
            shadow-sm
            shadow-[#90b3ff]
        " name="classes">
            <option value=""></option>
            <option value="Pre-primaria">Pre-primaria</option>
            <option value="Primaria">Primaria</option>
            <option value="Basicos">Básicos</option>
            <option value="Programa Matemática Saxon">Programa Matemática Saxon</option>
            <option value="Diversificado">Diversificado</option>
        </select>
        }
        </>
    )
}