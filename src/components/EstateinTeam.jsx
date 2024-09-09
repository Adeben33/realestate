import "./EstateinTeam.css"
import stars from "./../assets/stars.svg";
import ComponentHeader from "./ComponentHeader";
import TeamCard from "./TeamCard";
import maxPic from "./../assets/aboutus/maxmitchellpic.png"
import sarahpic from "./../assets/aboutus/sarahpic.png"
import michaelpic from "./../assets/aboutus/michaelpic.png"
import david from "./../assets/aboutus/david.png"

function EstateinTeam() {
    


    return (
        <section className="estateinTeam">
               <img src={stars} alt="star pic" />
            <div className="teams">
            <ComponentHeader headingText="Meet the Estatein Team"
                    text="At Estatein, our success is driven by 
                    the dedication and expertise of our team.
                    Get to know the people behind our mission
                    to make your real estate dreams a reality." />
                <div className="team--container">
                    <TeamCard pic={maxPic} name="Max Mitchell" position="Founder" />
                    <TeamCard pic={sarahpic} name="Sarah Johnson" position="Chief Real Estate Officer"/>
                    <TeamCard pic={david} name="David Brown" position="Head of Property Management"/>
                     <TeamCard pic={michaelpic} name="Michael Turner" position="Legal Counsel"/>
              </div>
            </div>
        </section>
    )
}

export default EstateinTeam;