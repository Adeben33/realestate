import "./Experience.css"
import stars from "./../assets/stars.svg";
import ComponentHeader from "./ComponentHeader";
import StepCard from "./stepCard";


function Experience() {
    


    return (
        <div className="Experience">
              <img src={stars} alt="star pic" />
            <div>
            <ComponentHeader headingText="Navigating the Estatein Experience"
                    text="At Estatein, we've designed a straightforward process 
                to help you find and purchase your dream property with ease.
                Here's a step-by-step guide to how it all works." />
            <div className="steps--container">
                    <StepCard stepNumber="01" />  
                    <StepCard stepNumber="02" />  
                    <StepCard stepNumber="03" />  
                    <StepCard stepNumber="04" />  
                    <StepCard stepNumber= "05"/>  
                    <StepCard stepNumber="06" />      
           </div>
            </div>
        </div>
    )
}


export default Experience;