import vision from "../assets/vision.jpeg"
const Vision = () => {
    return (
        <section className="flex justify-between items-center max-lg:flex-col gap-2 w-full max-container min-h-96">
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
        </section>
    );
}

export default Vision