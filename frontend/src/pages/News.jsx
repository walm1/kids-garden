import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsSquare from "../components/NewsSquare";

export default function News(){
    return(
        <>
            <Navbar />
            <section className="w-[100%] min-h-screen mt-[200px] ">
            <h1 className="flex md:justify-start md:ml-[50px] justify-center font-ubuntu text-[45px] font-extrabold">Noticias</h1>
                <NewsSquare />
            </section>
            <Footer />
        </>
    )
}