import banner from '../assets/welcome_banner.jpg'

export default function AboutUs(){
    return(
        <section id='aboutus' className="py-12 md:py-24 bg-gray-100 text-justify">
        <div className="container px-4 md:px-6 py-24">
          <div className="grid md:grid-cols-16 gap-8 items-center">
            <div>
              <img
                src={banner}
                alt="Teachers"
                className="rounded-lg"
                width="600"
                height="400"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-3xl font-bold">Sobre Nosotros</h2>
              <p className="text-[#777] text-lg">
                Kids Garden es un colegio con una larga trayectoria en la educación de niños. Nuestro equipo docente
                está altamente calificado y comprometido con brindar una educación de excelencia, utilizando
                metodologías innovadoras y enfocadas en el desarrollo integral de los estudiantes.
              </p>
              <p className="text-[#777] text-lg">
                Nuestra misión es formar a los niños como ciudadanos responsables, con valores éticos y habilidades para
                enfrentar los desafíos del mundo actual. Nos enorgullece ser un espacio seguro y acogedor donde los
                niños pueden crecer y aprender.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}