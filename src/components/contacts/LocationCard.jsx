import Button from "../Button";
import FeatureBadge from "../featureBadge";
import "./LocationCard.css"
import callIcon from "./../../assets/icons/callIcon.svg"
import emailIcon from "./../../assets/icons/email.svg"

function LocationCard() {
    

    return (
        <div className="container">
           
            
        <div className="locationCard">
            <p className="heading-p">Main Headquarters</p>
            <h3 className="heading">123 Estatein Plaza, City Center, Metropolis</h3>
            <p className="locationCard-text">Our main headquarters serve as the heart of Estatein.
                Located in the bustling city center, this is where
                our core team of experts operates, driving the excellence
                and innovation that define us. </p>
            <div className="info">
                <FeatureBadge icon={callIcon} text="info@estatein.com" />
                <FeatureBadge icon={emailIcon} text="+1 (123) 456-7890"/>
                <FeatureBadge icon={callIcon} text="Metropolis"/>
                
            </div>
            <Button label="Get Direction" variant="locationCard"/>
            </div>
             </div>
    )
}

export default LocationCard;

