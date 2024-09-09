import "./UPropertyValue.css"
import ComponentHeader from "./ComponentHeader";
import stars from "./../assets/stars.svg";
import UPropertyCard from "./UPropertyCard";




function UPropertyValue({ heading, text, children }) {
    

    return (
        <div className="uPropertyValue">
            
             <img src={stars} alt="star pic" />
            <div className="uPropertyValue-container">
            <ComponentHeader headingText={heading}
                    text={text} />
                <div className="propertyValues">
                  {children}
            </div>
            </div>
           
        </div>
    )
}


export default UPropertyValue;