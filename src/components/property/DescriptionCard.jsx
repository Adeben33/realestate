import "./DescriptionCard.css"
import bathIcon from "./../../assets/bathroom.svg"
import bedIcon from "./../../assets/bedroom.svg"
import areaIcon from "./../../assets/icons/area.svg"

function DescriptionCard() {
    


    return (
        <div className="descriptionCard">
            <h4 className="heading">
                Description
            </h4>
            <p className="text">
                Discover your own piece of paradise with
                the Seaside Serenity Villa. T With an open
                floor plan, breathtaking ocean views from
                every room, and direct access to a pristine
                sandy beach, this property is the epitome of
                coastal living.
            </p>

            
            <div className="features">
                <div className="feature">
                    <span className="feature---name"> <img src={bedIcon} alt="" />
                       <p>Bedrooms </p> 
                    </span>
                    <span className="feature--number"> 04 </span>
                </div>
                 <div className="feature">
                    <span className="feature---name"> <img src={bathIcon} alt="" />
                       <p>Bedrooms </p> 
                    </span>
                    <span className="feature--number"> 03 </span>
                </div>
                 <div className="feature">
                    <span className="feature---name"> <img src={areaIcon} alt="" />
                       <p>Bedrooms </p> 
                    </span>
                    <span className="feature--number"> 2,500 Square Feet </span>
                </div>
            </div>
        </div>
    )
}


export default DescriptionCard;


