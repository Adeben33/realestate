import AmenitiesCard from "./AmenitiesCard";
import "./AmenitiesComponent.css"



function AmenitiesComponent() {
    

    return (
        <div className="amenitiesComponent">
            <h4 className="heading">Key Features and Amenities</h4>
            <div className="amenities">
            <AmenitiesCard text="Expansive ocean front terrace for
                outdoor entertaining"/>
            <AmenitiesCard text="Gourmet kitchen with top-of-the-line appliances"/>
            <AmenitiesCard text="Private beach access for morning strolls and sunset views"/>
            <AmenitiesCard text="Master suite with a spa-inspired bathroom and ocean-facing balcony"/>
            <AmenitiesCard text="Private garage and ample storage space" />
            </div>
        </div>
    )
}

export default AmenitiesComponent;