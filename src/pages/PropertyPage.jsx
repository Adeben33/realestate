import { useParams } from "react-router-dom"
import "./PropertyPage.css"
import DescriptionComponent from "../components/property/DescriptionComponent";
import PricingDetails from "../components/property/PricingDetails";
import Carousel from "../components/carousel";
import FAQ from "../components/FAQ";
import stars from "./../assets/stars.svg";
import ComponentHeader from "../components/ComponentHeader";



function PropertyPage() {


    // params
    const { propertyId } = useParams();




    return (
        <div className="propertyPage">
            <DescriptionComponent />
            <PricingDetails />
            <div className="testing1">
       
            <div className="stars">
            <img src={stars} alt="star pic" />
                </div>
            
            <ComponentHeader headingText="Frequently Asked Questions"
            text="Find answers to common questions about Estatein's services,
             property listings, and the real estate process.
             We're here to provide clarity and assist you every step of the way."
            buttonLabel="View All FAQ'S" buttonVariant="FAQ" />   
                <Carousel itemsPerSlide={3} totalItems={6} xAxis={33.8}>
                    <FAQ heading="How do I search for properties on Estatein?"
                        text="Learn how to use our user-friendly search tools 
                        to find properties that match your criteria." />
                         <FAQ heading="What documents do I need to sell my property through Estatein?"
                        text="Find out about the necessary documentation for listing your property with us." />
                         <FAQ heading="How can I contact an Estatein agent?"
                        text="Discover the different ways you can get in touch with our experienced agents." />
                         <FAQ heading="How do I search for properties on Estatein?"
                        text="Learn how to use our user-friendly search tools 
                        to find properties that match your criteria." />
                         <FAQ heading="What documents do I need to sell my property through Estatein?"
                        text="Find out about the necessary documentation for listing your property with us." />
                         <FAQ heading="How can I contact an Estatein agent?"
                        text="Discover the different ways you can get in touch with our experienced agents." />                         
                        
            </Carousel>
            </div>
        </div>
     ) 
}

export default PropertyPage;