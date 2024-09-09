import "./HomePage.css"
import heroImg from "./../assets/Image.svg"
import Button from "../components/Button";
import arrowIcon from "./../assets/arrowIcon.svg";
import dreamHome from "./../assets/dreamHome.svg";
import propertymanagement from "./../assets/propertymanagement.svg";
import propertyvalue from "./../assets/propertyvalue.svg";
import investments from "./../assets/investments.svg";
import stars from "./../assets/stars.svg";
import { useState } from "react";
import FAQ from "../components/FAQ";
import ComponentHeader from "../components/ComponentHeader";
import Carousel from "../components/carousel";
import TestimonialCard from "../components/TestimonialCard";
import profilePic from "./../assets/Profile.png";

import ssVilla from "./../assets/SSVilla.png"
import PropertyShowcase from "../components/properties/property-showcase";



function HomePage() {
    
    const [currentIndex, setCurrentIndex] = useState(0);
    // const totalItems = properties.lenght;
    const totalItems = 6;
    const itemsPerSlide = 3; //number of items to show per slide


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


    //

    const [currentIndexFAQ, setCurrentIndexFAQ] = useState(0);
    // const totalItems = properties.lenght;
    const totalItemsFAQ = 6;
    const itemsPerSlideFAQ = 3; //number of items to show per slide


    const goToPreviousFAQ = () => {
    const isFirstSlide = currentIndexFAQ === 0;
    const newIndex = isFirstSlide ? totalItemsFAQ - itemsPerSlideFAQ : currentIndex - 1;
    setCurrentIndexFAQ(newIndex);
    };
    
    const goToNextFAQ = () => {
    const isLastSlide = currentIndexFAQ === totalItemsFAQ - itemsPerSlideFAQ;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndexFAQ(newIndex);
    };

    
    return (
        <>
        <section className="hero">
            <div className="hero-details">
                <div className="heading">
                    <p>Discover Your Dream <br/>
                        Propert with Estatein</p>
                </div>
                <div className="text">
                    Your journey to finding the perfect property begins here. Explore our listings to find the home <br />
                    that matches your dreams.
                </div>
                <div className="properties">
                    <Button label="Learn More" variant="primary" />
                    <Button label="Browse Properties" variant="primary" />
                </div>
                <div className="highlights">
                    <div className="highlights--item">
                        <span> 200+ </span> 
                        <span> Happy Customers</span>
                </div>
                    <div className="highlights--item">
                       <span> 10k+ </span> 
                        <span> Properties For Clients</span> 
                </div>
                    <div className="highlights--item">
                        <span>16+</span>
                        <span>Years of Experience</span>
                </div>
                </div>
            </div>
            <div className="hero-img">
                <img src={heroImg} alt="" />
            </div>   
        </section>

        <section className="featured-service">
            <div className="featured-service-item">
                    <img src={arrowIcon} alt="arrow icon" className="icon"/>
                    <img src={dreamHome} alt="dream home icon" />
                    <p className="text">Find Your Dream Home</p>
                </div>
                <div className="featured-service-item" >
                    <img src={arrowIcon} alt="arrow icon" className="icon" />
                    <img src={propertymanagement} alt="property management icon" />
                    <p >Find Your Dream Home</p>
                </div>
                <div className="featured-service-item">
                    <img src={arrowIcon} alt="arrow icon" className="icon" />
                    <img src={propertyvalue} alt="property value icon" />
                    <p className="text">Find Your Dream Home</p>
                </div>
                <div className="featured-service-item">
                    <img src={arrowIcon} alt="arrow icon" className="icon" />
                    <img src={investments} alt="investments icon" />
                    <p className="text">Find Your Dream Home</p>
            </div>
            
            </section>
            
            {/* Featured Properties */}
            <div className="testing1">
            <div className="stars">
            <img src={stars} alt="star pic" />
            </div>
            <ComponentHeader headingText="Featured Properties"
                    text='Explore our handpicked selection of featured properties. 
            Each listing offers a glimpse into exceptional homes and investments 
            available through Estatein. Click "View Details" for more information.'
            buttonLabel="View All Properties" buttonVariant="property" />   
                <Carousel itemsPerSlide={3} totalItems={6} xAxis={33.8}>
                 <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
                   <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
                  <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
                   <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
                   <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
                   <PropertyShowcase name="Seaside Serenity Villa"
                                     details="Wake up to the soothing melody of waves. 
                                         This beachfront villa offers" Img = {ssVilla }
                        nBed="4-Bedroom" motto="Coastal Escapes - Where Waves Beckon" nBath="3-Bathroom" sType="Villa" price={`550,000`} />
            </Carousel>
            </div>

            {/* Testimonials */}

            <div className="testing1">
            <div className="stars">
            <img src={stars} alt="star pic" />
            </div>
            <ComponentHeader headingText="What Our Clients Say"
            text ="Read the success stories and heartfelt testimonials from our valued clients.
            Discover why they chose Estatein for their real estate needs."
            buttonLabel="View All Testimonials" buttonVariant="property" />   
            <Carousel itemsPerSlide={3} totalItems={6} xAxis={33.8}>
        <TestimonialCard profilePic={profilePic} rating={5} service="Exceptional Service!" review={"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"}
             userName="Wade Warren" userLocation ="USA, California"  />
       <TestimonialCard profilePic={profilePic} service="Efficient and Reliable" rating={5} review={"Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results."}
             userName="Wade Warren" userLocation ="USA, California"  />
       <TestimonialCard profilePic={profilePic} service="Trusted Advisors" rating={5} review={"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"}
             userName="Wade Warren" userLocation ="USA, California"  />
       <TestimonialCard profilePic={profilePic} service="Exceptional Service!"  rating={5} review={"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"}
             userName="Wade Warren" userLocation ="USA, California"  />
       <TestimonialCard profilePic={profilePic} service="Trusted Advisors"  rating={5} review={"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"}
             userName="Wade Warren" userLocation ="USA, California"  />
       <TestimonialCard profilePic={profilePic} service="Trusted Advisors"  rating={5} review={"Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"}
             userName="Wade Warren" userLocation ="USA, California"  />
       
            </Carousel>
            </div>

            {/* FAQ */}
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
            
    
            
        </>
  );
};


export default HomePage;