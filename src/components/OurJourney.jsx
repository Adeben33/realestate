import "./OurJourney.css"
import aboutUsHero from "./../assets/aboutUsHero.png"
import StatCard from "../pages/StatCard"
import stars from "./../assets/stars.svg";


function OurJourney() { 
 return (
        <div className="container">
         <div className="container--textSection">
            <img src={stars} alt="star pic" />
                <h2 className="title">Our Journey</h2>
                <p className="description">
                    Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
                </p>
             <div className="container--statsContainer">
                    <StatCard number="200+" label="Happy Customers" />
                    <StatCard number="10k+" label="Properties For Clients" />
                    <StatCard number="16+" label="Years of Experience" />
                </div>
         </div>
            <div className="container-imageSection">
                <img
                    src={aboutUsHero}
                 alt="House Model"
                 className="image"
                />
            </div>
        </div>
    )
}


export default OurJourney