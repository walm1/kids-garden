export default function InputDefault({type, name, text, method}){
    return(
        <>
           {
            type != "select" ?
            <input onChange={method} className="
            border-gray-200
            border-2 
            border-solid
            p-[5px]
            w-[90%]
            h-[50px]
            rounded-lg
            text-[14px]
            focus:outline-1
            focus:outline
            focus:outline-black
            focus:outline-offset-[-2px]
            " type={type} name={name} placeholder={text} />
        : 
        <select onChange={method} className="
            p-[5px]
            w-[90%]
            h-[50px]
            rounded-lg
            text-[14px]
            border-gray-200
            border-2 
            border-solid
            bg-white
        " name="classes">
            <option value="">Grado de interés</option>
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