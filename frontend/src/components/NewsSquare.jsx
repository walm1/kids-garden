import { useEffect, useState } from "react";
import {Oval} from 'react-loader-spinner'

export default function NewsSquare(){ 

    const [news, setNews] = useState([])

    const getNewsData = async() =>{
        let newsPetiton = await fetch('https://sheetdb.io/api/v1/iiemrf9oaf3w9')
        let newsData = await newsPetiton.json()
        setNews(newsData)
    }

    useEffect(()=>{
        async function setData(){
            await getNewsData()
        }  
        setData()
    }, [])

    return(
        <>
            <div className="
            grid    
            grid-cols-16
            gap-6
            justify-center
            items-center
            w-[100%] 
            h-[430px]            
            ">
                {news.length != 0 ? 
                    news.map(noticia =>(
                        <>
                            <div key={noticia.Fecha} className="flex flex-col border-[.1px] border-solid hover:h-[415px] hover:cursor-pointer transition-all duration-100 font-ubuntu shadow-2xl h-[400px]">
                                <h1 
                                className="
                                w-[100%]
                                text-center
                                text-wrap
                                text-[26px]
                                p-2
                                font-semibold
                                "
                                title="noticias kids garden">{noticia.Titulo}</h1>
                                <p className="ml-[16px]">{noticia.Contenido}</p>
                                <div className="flex w-[100%] h-auto">
                                    <div className="flex w-[100%] items-end justify-end h-[90%] bg-gray-200">
                                        <img className="w-[100%] h-[100%]" src={noticia.Imagen} alt="Imagen de noticias kids garden" />
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                : <><h1 className="w-[100%] text-center text-[30px]">Cargando...</h1><Oval
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                /></>}
            </div>
        </>
    )
}