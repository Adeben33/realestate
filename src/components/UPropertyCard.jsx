import "./UPropertyCard.css"



function UPropertyCard({ Icon, heading, text,className }) {
    


    return (
        <div className={`propertyCard ${className}`} >
            <div className="heading">
                <img src={Icon} alt="" />
                <h3> { heading}</h3>
            </div>
            <p className="text">
                {text}
            </p>
        </div>
    )
}
export default UPropertyCard;