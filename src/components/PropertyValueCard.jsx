import "./PropertyValueCard.css"


function PropertyValueCard({arrowIcon,dreamHome,text}) {
    


    return (
        <div className="propertyValueCard">
        <img src={arrowIcon} alt="arrow icon" className="icon"/>
        <img src={dreamHome} alt="dream home icon" />
            <p className="text">{text}</p>
    </div>
    )
}

export default PropertyValueCard;