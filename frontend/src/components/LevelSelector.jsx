import { useState } from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

function Display({isOpen, callbck, title, text}){
    return(
        <>
        <div className="flex flex-col items-center justify-center w-[100%] mt-[30px]">
            <div onClick={callbck} className="hover:bg-gray-100 h-[50px] flex w-[60%] border-solid border-[1px] border-black rounded-xl">
                <div className="flex w-[70%]">
                    <h1 className="p-[15px] w-[70%] text-start self-center">{title}</h1>
                </div>
                <div className="flex h-[100%] w-[30%] items-center justify-end">
                    {
                        isOpen ? <TiArrowSortedUp size={'30'} className="mr-[20px]"/>
                        : <TiArrowSortedDown size={'30'} className="mr-[20px]"/>
                    }
                    
                </div>
            </div>
        </div>
       
        <div className={`w-[60%] transition-all duration-200 self-center items-center justify-center mt-2 bg-white rounded-lg shadow-lg ${
          isOpen ? 'flex' : 'flex h-0'
        }`}
           >
            <div className={`flex flex-col transition-all duration-1000 ${isOpen ? "h-[100%] items-center justify-center w-[80%]" : "h-0 items-center justify-center"} `}>
                <h1>{isOpen ? title : ''}</h1>
                <p>{isOpen? 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque quisquam eveniet optio eligendi, tempore ea ut harum qui recusandae temporibus unde molestias id, dolore non porro nemo eum nobis illo.' : ''}</p>
            </div>
        </div>

    </>
    )
}

export default function Level(){
    const [isActive, setActive] = useState(false)

    const handleActive = (menuId) =>{
        if(menuId == isActive){
            return setActive(false)
        } 

        console.log('activo: ' + isActive + ' clickeado: ', menuId)

        setActive(menuId)
    }

    console.log(isActive)

    const levelsInfo = [
        {name: 'Pre Primaria', info: 'Información sobre pre primaria', id: 1},
        {name: 'Primaria', info: 'Información sobre primaria', id: 2},
        {name: 'Básicos', info: 'Información sobre primaria', id: 3},

    ]

    return(
        levelsInfo.map(level => (
            <>
                <Display title={level.name} text={level.info} isOpen={isActive == `${level.id}`} callbck={()=> handleActive(`${level.id}`)}/>
            </>  
        ))
    )
}