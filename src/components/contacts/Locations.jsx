import "./Locations.css"
import stars from "./../../assets/stars.svg";
import ComponentHeader from "../ComponentHeader";
import LocationCard from "./LocationCard";
import Button from "../Button";

function Locations() {
    
    return (
        <div className="locations-container">
            <img src={stars} alt="star pic" />
            <div className="locations">
                <ComponentHeader headingText="Discover Our Office Locations"
                    text="Estatein is here to serve you across multiple locations.
                 Whether you're looking to meet our team, discuss real estate 
                 opportunities, or simply drop by for a chat, we have offices 
                 conveniently located to serve your needs. Explore the categories below
                  to find the Estatein office nearest to you" />
                <div className="locations-btn">
                 <Button label="All" variant="locations-btn" />    
                <Button label="Regional" variant="locations-btn" />
                <Button label="International" variant="locations-btn"/>
             </div>
                <div className="locations-list">
                    <LocationCard />
                     <LocationCard />
                </div>
            
            </div>
           
        </div >
    )
}

export default Locations;