import PropertyValueComponent from "../components/PropertyValueComponent";
import PropertyHero from "../components/properties/propertyhero";
import dreamhome from "./../assets/dreamhome.svg";
import propertymanagement from "./../assets/propertymanagement.svg";
import propertyvalue from "./../assets/propertyvalue.svg";
import investments from "./../assets/investments.svg";
import "./ContactPage.css"
import ContactFormComponent from "../components/contacts/ContactFormComponent";
import Locations from "../components/contacts/Locations";
import EstateinsWorld from "../components/EstateinsWorld";

function ContactPage() {

    return (
        <>
         <PropertyHero heading="Elevate Your Real Estate Experience" text="Welcome to Estatein, 
             where your real estate aspirations meet expert guidance.
             Explore our comprehensive range of services, each designed
              to cater to your unique needs and dreams."/>
        <PropertyValueComponent text1="info@estatein.com" logo1={dreamhome} text2="+1 (123) 456-7890" logo2={propertyvalue} text3="Main Headquarters" logo3={ propertymanagement}  text4 ="LinkedIn
Instagram
Facebook" logo4 ={investments} />
         <div className="contact">
                <ContactFormComponent />
                <Locations />
                <EstateinsWorld />
       </div>
        
        </>
    )
}

export default ContactPage;