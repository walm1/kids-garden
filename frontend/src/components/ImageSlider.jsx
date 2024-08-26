
export default function ImageSlider(){
return(
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
    )
}