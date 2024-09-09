import "./PropertyHero.css"



function PropertyHero({heading,text}) {
    

    return (
        <section className="propertyHero">
            <div className="heading">{ heading}</div>
            <p className="text">{ text}</p>
        </section>
    )
}

export default PropertyHero;