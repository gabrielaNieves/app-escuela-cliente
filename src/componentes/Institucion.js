import mision from "../assets/mision.jpeg"
import vision from "../assets/vision.jpeg"
const Institucion = () => {
    return (
        <section>
            <div className="flex justify-between items-center max-lg:flex-col gap-2 w-full max-container min-h-96">
            <div className="flex flex-1 flex-col padding-l">
                <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
                    Misión
                </h2>
                <p className="mt-4 lg:max-w-lg text-lg leading-7 text-justify">
                    En la Escuela Artesanal “Raimundo Pernalete” cultivamos el talento de niños y adolescentes, 
                    potenciando sus habilidades a través de actividades culturales, deportivas y pedagógicas. 
                    Preparamos individuos creativos, críticos y solidarios, respetuosos de los valores morales, patrióticos y regionales. 
                    Además, apoyamos a las familias en la educación integral de sus hijos, formando seres capaces de alcanzar sus metas.
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={mision}
                alt="mision"
                width={270}
                height={200}
                className="object-container rounded"
                />
            </div>
        </div>
        <div className="flex justify-between items-center max-lg:flex-col gap-2 w-full max-container min-h-96">
            <div className="flex-1 flex justify-center items-center">
                <img src={vision}
                alt="vision"
                width={270}
                height={200}
                className="object-container rounded"
                />
            </div>
            <div className="flex flex-1 flex-col padding-l">
                <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
                    Visión
                </h2>
                <p className="mt-4 lg:max-w-lg text-lg leading-7 text-justify">
                Ser una institución pública estadal reconocida a nivel, local, regional y nacional mediante la promoción de los valores, morales, 
                culturales y espirituales dentro y fuera de ella, procurando una mayor y mejor integración en base a la trilogía Escuela – Comunidad. 
                – Estado, a través del ejercicio eficaz – eficiente de la orientación, formación y capacitación de niñas y niños, que forman parte de esta casa de estudio
                </p>
            </div>
        </div>
        </section>
        
    );
}

export default Institucion