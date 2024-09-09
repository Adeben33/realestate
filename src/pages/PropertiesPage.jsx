import PropertiesSection from "../components/properties/PropertiesSection";
import PropertyForm from "../components/properties/PropertyForm";
import PropertyHero from "../components/properties/propertyhero";
import "./PropertiesPage.css"


function PropertyPage() {
    
    return (
        <>
            <PropertyHero heading="Find Your Dream Property" text="Welcome to Estatein, where your dream property awaits
                in every corner of our beautiful world. Explore our
                curated selection of properties, each offering a
                unique story and a chance to redefine your life.
                With categories to suit every dreamer, your journey"/>
            <div className="propertyHeroBody">
                <PropertiesSection />
                <PropertyForm/>
            </div>
            
           
        </>
    )
}

export default PropertyPage;