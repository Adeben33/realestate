import AmenitiesComponent from "./AmenitiesComponent";
import "./DescriptionComponent.css"
import DescriptionCard from "./descriptionCard";
import houseImage1 from "./../../assets/property/houseImage1.png"
import locationIcon from "./../../assets/icons/location.svg"
import { useState } from "react";
// import rightArrow from "./../../assets/rightArrow.svg"
import rightArrow from "./../../assets/rightArrow.svg"
// import leftArrow from "./../../assets/leftArrow.svg"
import leftArrow from "./../../assets/leftArrow.svg"


function DescriptionComponent() {
    
const [currentIndex, setCurrentIndex] = useState(0);
    

 const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? totalItems - itemsPerSlide : currentIndex - 1;
    setCurrentIndex(newIndex);
    };
    
    const goToNext = () => {
    const isLastSlide = currentIndex === totalItems - itemsPerSlide;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };


    let xAxis = 50.85;
let totalItems = 8; 
let itemsPerSlide = 2; 




    return (
        <>
        <div className="Description">
            <div className="heading">
                <h4 className="text">Seaside Serenity Villa
                    <span className="location"> <img src={locationIcon} alt="" />
                    Malibu, California
                    </span></h4>
                <span className="price" >Price 
                    <p>$1,250,000</p>
                </span>
            </div>
                <div className="image--container">
                <div className="hidden">
                <div className="image--small">
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />
                    <img src={houseImage1} alt="" srcset="" />

                </div>
                    <div className="image--large" style={{
                        transform: `translateX(-${xAxis * currentIndex}%)`
                    }}>
                     <img src={houseImage1} alt=""  />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />
                    <img src={houseImage1} alt="" />

                </div>
                <div className="pagination--control">
                     <div className="arrow" onClick={goToPrevious}>
                    <img src={leftArrow} alt="right Arrow"/>
                            </div>
                        <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                            </div>
        
                        <div className="arrow" onClick={goToNext}>
                        <img src={rightArrow} alt="right Arrow"/>
                        </div>

                 </div>
             </div>
              </div>  
         </div>
        <div className="descriptionComponent">
            <DescriptionCard  />
            <AmenitiesComponent/>
        </div>
       
   </>
    )
}


export default DescriptionComponent;