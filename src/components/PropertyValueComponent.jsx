

import arrowicon from "./../assets/arrowicon.svg";
import PropertyValueCard from "./propertyValueCard";
import "./PropertyValueComponent.css"


function PropertyValueComponent({text1,logo1,text2,logo2,text3,logo3,text4,logo4}) {
    
    return (
    <section className="propertyValueComponent">
            < PropertyValueCard arrowIcon={arrowicon} dreamHome={logo1} text={text1} /> 
            < PropertyValueCard arrowIcon={arrowicon} dreamHome={logo2} text={text2} /> 
            < PropertyValueCard arrowIcon={arrowicon} dreamHome={logo3} text={text3} /> 
            < PropertyValueCard arrowIcon={arrowicon} dreamHome={logo4} text={text4} /> 
   </section>
    )
}

export default PropertyValueComponent;
