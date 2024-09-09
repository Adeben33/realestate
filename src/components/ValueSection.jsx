import ValueCard from "./ValueCard";
import "./ValueSection.css"
import stars from "./../assets/stars.svg";


function ValuesSection() {


  return (
    <div className="container">
    <div className="container--textSection">
    <img src={stars} alt="star pic" />
        <h2 className="title">Our Values</h2>
        <p className="description">
          Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.
        </p>
      </div>
          <div className="container--valuesContainer">
        <ValueCard 
          icon="⭐" 
          title="Trust" 
            description="Trust is the cornerstone of every successful real estate transaction." 
            className=" border--right "
        />
        <ValueCard 
          icon="🎓" 
          title="Excellence" 
                  description="We set the bar high for ourselves. 
          From the properties we list to the services we provide." 
          className=" padding-left "
              />
                <div className='divider'></div>
        <ValueCard 
          icon="👥" 
          title="Client-Centric" 
                  description="Your dreams and needs are at the center of our universe. We listen, understand."   
                  className="border--right  "
        />
        <ValueCard 
          icon="🌟" 
          title="Our Commitment" 
                  description="We are dedicated to providing you with the highest level of service, professionalism, and support." 
                  className="padding-left"
        />
      </div>
    </div>
  );
};


export default ValuesSection;
