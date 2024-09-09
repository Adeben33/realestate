import "./property-showcase.css"
import bedIcon from "./../../assets/bedroom.svg"
import bathIcon from "./../../assets/bathroom.svg"
import villaIcon from "./../../assets/villa.svg"
import FeatureBadge from "../featureBadge";
import Button from "../Button";



function PropertyShowcase({name,motto,Img, details ,nBed,nBath,sType, price , onClick}){

    return <>
        <div className="property-showcase">
            <img src={Img} alt="" srcset="" className="propertyImg"/>
            <div className="property--info">
                <div className="motto">
                    {motto}
                </div>
            <div className="heading">
                    {name}
                    <span> {details}... 
                        <a href="#">
                            Read More
                        </a>
                    </span>   
                </div>
                {
                nBed || nBath || sType ?
                (<div className="property-feactures">
                    {nBed ? (
                        <FeatureBadge icon={bedIcon} text={nBed} />
                    ): (
                            null
                    )}
                     {nBath ? (
                        <FeatureBadge icon={bathIcon} text={nBath} />
                    ): (
                            null
                    )}
                     {sType ? (
                        <FeatureBadge icon={villaIcon} text={sType} />
                    ): (
                            null
                    )}
                        
                    
                        
                        </div>) : (
                     null       
                )
                }
                
            <div className="property-details">
                    <div className="price">
                        Price
                        <span>
                            ${price}
                        </span>
                    </div> 
                    <Button label="View Property Details" variant="property-details" onClick={onClick}/>
            </div>
            </div>
        </div>
    </>
}

export default PropertyShowcase;