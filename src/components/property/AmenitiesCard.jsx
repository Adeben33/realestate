import "./AmenitiesCard.css"
import lightningIcon from "./../../assets/icons/tunderstrike.svg"


function AmenitiesCard({text}) {
    

    return (
        <div className="amenitiesCard">
            <img src={lightningIcon} alt="" />
            <span>{text}</span>
        </div>
    )
}

export default AmenitiesCard;