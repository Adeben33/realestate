import "./service.css"

import PropertyValueComponent from "../components/PropertyValueComponent";
import UPropertyValue from "../components/UPropertyValue";
import UPropertyCard from "../components/UPropertyCard";
import Icon from "./../assets/icons/UValueM.svg";
import PropertyValueUnlock from "../components/PropertyValueUnlock";
import Decisions from "../components/Decisions";
import PropertyHero from "../components/properties/propertyhero";
import dreamhome from "./../assets/dreamhome.svg";
import propertymanagement from "./../assets/propertymanagement.svg";
import propertyvalue from "./../assets/propertyvalue.svg";
import investments from "./../assets/investments.svg";



function ServicePage() {
  

    return (
        <>
            <PropertyHero heading="Elevate Your Real Estate Experience" text="Welcome to Estatein, 
             where your real estate aspirations meet expert guidance.
             Explore our comprehensive range of services, each designed
              to cater to your unique needs and dreams."/>
            <PropertyValueComponent text1="Find Your Dream Home" logo1={dreamhome} text2="Unlock Property Value" logo2={propertyvalue} text3="Effortless Property Management" logo3={ propertymanagement}  text4 ="Smart Investments, Informed Decisions" logo4 ={investments} />
            <div className="property">
             <div className="propertyIntegrity">
             <UPropertyValue  heading="Unlock Property Value" text="Selling your property should be a rewarding experience,
                 and at Estatein, we make sure it is. Our Property Selling Service
                  is designed to maximize the value of your property, ensuring you
                  get the best deal possible. Explore the categories below to see
                  how we can help you at every step of your selling journey">
                    <UPropertyCard Icon={Icon} heading="Valuation Mastery" text="Discover the true worth of 
                    your property with our expert valuation services." />
                    <UPropertyCard Icon={Icon} heading="Strategic Marketing" text="Selling a property requires more 
                    than just a listing; it demands a strategic marketing approach."/>
                    <UPropertyCard Icon={Icon} heading="Negotiation Wizardry" text="Negotiating the best deal is 
                    an art, and our negotiation experts are masters of it."/>
                    <UPropertyCard Icon={Icon} heading="Closing Success" text="A successful sale is not complete 
                     until the closing. We guide you through the intricate closing process." />
                    <PropertyValueUnlock className="grid--span-2"  heading=" Unlock the Value of Your Property Today" text="Ready to unlock the true
                value of your property? Explore our
                Property Selling Service categories
                and let us help you achieve the best
                deal possible for your valuable asset."/>
                  </UPropertyValue>
            </div>
             <div className="propertyIntegrity margin-top-100">
                <UPropertyValue heading="Effortless Property Management"
                    text="Owning a property should be a pleasure, not a hassle.
                     Estatein's Property Management Service takes the stress out
                      of property ownership, offering comprehensive solutions tailored
                      to your needs. Explore the categories below to see how we can make
                       property management effortless for you">
                    <UPropertyCard Icon={Icon} heading="Tenant Harmony" text="Discover the true worth of 
                    your property with our expert valuation services." />
                    <UPropertyCard Icon={Icon} heading="Maintenance Ease" text="Selling a property requires more 
                    than just a listing; it demands a strategic marketing approach."/>
                    <UPropertyCard Icon={Icon} heading="Financial Peace of Mind" text="Negotiating the best deal is 
                    an art, and our negotiation experts are masters of it."/>
                    <UPropertyCard Icon={Icon} heading="Legal Guardian" text="A successful sale is not complete 
                     until the closing. We guide you through the intricate closing process." />
                    <PropertyValueUnlock className="grid--span-2" heading="Experience Effortless Property Management"
                        text="Ready to experience hassle-free property management? Explore our Property Management 
                        Service categories and let us handle the complexities while you enjoy the benefits of property
                         ownership." />
                  </UPropertyValue>
            </div>
             <Decisions className="margin-top-100 " />  
            </div>
       
         

        </>
    )
}

export default ServicePage;