import Button from "./Button";
import "./PropertyValueUnlock.css"


function PropertyValueUnlock({heading,text ,className }) {
    
    return (
        <div className={`propertyValueUnlock ${className}`} >
            <div className="heading">
                {heading}
                <Button label="Learn More" variant="propertyValue"/>
            </div>
            <p>
                {text}
            </p>
        </div>
    )
}

export default PropertyValueUnlock;