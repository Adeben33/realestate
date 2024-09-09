import "./carousel.css"
import { useState } from "react";
import rightArrow from "./../assets/rightArrow.svg"
import leftArrow from "./../assets/leftArrow.svg"



function Carousel({children , totalItems, itemsPerSlide , xAxis}) {
    
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


    return (
         <div className="carousel" >
                        <div className="showcase"
                        style={{
                        transform: `translateX(-${xAxis* currentIndex }%)`,
          }} >
                        {children}
                        </div>
                        <div className="pagination-control">
                            <div className="count">
                             {`0${currentIndex + 1} of ${totalItems}`}
                            </div>
                            <div className="button">
                                <div className="arrow" onClick={goToPrevious}>
                                <img src={leftArrow} alt="right Arrow"/>
                                </div>
                                 <div className="arrow" onClick={goToNext}>
                                <img src={rightArrow} alt="right Arrow"/>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default Carousel;