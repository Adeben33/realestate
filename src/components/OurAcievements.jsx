import "./OurAchievements.css"
import ComponentHeader from "./ComponentHeader";
import stars from "./../assets/stars.svg";
import AchievementCard from "./AchievementCard";




function OurAchievements() {
    
    return (
        <section className="ourAchievements">
            <img src={stars} alt="star pic" />
            <div className="ourAchievement-container">
            <ComponentHeader headingText="OurAchievement"
                text="Our story is one of continuous growth 
                and evolution. We started as a small team with 
                big dreams, determined to create a real estate
                 platform that transcended the ordinary." />
            
            <div className="achievements--list">
                <AchievementCard heading="3+ Years of Excellence"
                text="With over 3 years in the industry,
                we've amassed a wealth of knowledge and experience,
                becoming a go-to resource for all things real estate."/>
                 <AchievementCard heading="Happy Clients"
                    text="Our greatest achievement is the satisfaction of 
                our clients. Their success stories fuel our passion
                for what we do."/>
                 <AchievementCard heading="Industry Recognition"
                    text="We've earned the respect of our peers
                 and industry leaders, with accolades and awards
                 that reflect our commitment to excellence."/>
                </div>
            </div>
        </section>
    )
}

export default OurAchievements;