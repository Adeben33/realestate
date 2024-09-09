import ComponentHeader from "../ComponentHeader"
import Carousel from "../carousel"

import stars from "./../../assets/stars.svg";
import "./PropertiesSection.css"

import ssVilla from "./../../assets/SSvilla.png"
import PropertyShowcase from "./property-showcase";
import { useNavigate } from "react-router-dom";

function PropertiesSection(){

    const navigate = useNavigate();

    let propertyId = 10;

    const handleClick = (event) => {
        navigate(`/propertiespage/:${propertyId}`)
    }


        return <> 
	<div className="propertiesSection">
                <div className="stars">
            <img src={stars} alt="star pic" />
            </div>
            <ComponentHeader headingText="Discover a World of Possibilities"
                text='Our portfolio of properties is as diverse as your dreams. 
                Explore the following categories to find the perfect property that
                 resonates with your vision of home'
            />   
                <Carousel itemsPerSlide={3} totalItems={10} xAxis={33.8} >
                                <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                       price={`1,250,000`} onClick={handleClick} />
                               <PropertyShowcase name="Metropolitan Haven"
                                        details="Immerse yourself in the energy 
                                     of the city. This modern apartment in the heart" Img={ssVilla}
                                        motto="Urban Oasis - Life in the Heart of the City"
                                        price={`650,000`} link="PropertyPage" onClick={handleClick}/>
                                <PropertyShowcase name="Rustic Retreat Cottage"
                                        details="Find tranquility in the countryside.
                                      This charming cottage is nestled amidst rolling hills." Img={ssVilla}
                                        motto="Countryside Charm - Escape to Nature's Embrace"
                                        price={`350,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`}link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                        price={`550,000`} link="PropertyPage" onClick={handleClick}/>
                                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                                        motto="Coastal Escapes - Where Waves Beckon"
                                       price={`550,000`} link="PropertyPage" onClick={handleClick} />
            </Carousel>
         </div>
                
	</>
}

export default PropertiesSection;