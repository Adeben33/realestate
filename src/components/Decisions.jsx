import "./Decisions.css"
import stars from "./../assets/stars.svg";
import UPropertyCard from "./UPropertyCard"
import Icon from "./../assets/icons/UValueM.svg";
import Button from "./Button";


function Decisions({className}) {
    

    return (
        <div className={className}>
            <img src={stars} alt="star pic" />
            <div className="decisions">
            
            <div className="informed--decisions">
                <div className="heading">
                    Smart Investments, Informed Decisions
                </div>
                <p>Building a real estate portfolio requires a
                    strategic approach. Estatein's Investment Advisory
                    Service empowers you to make smart investments and
                    informed decisions.</p>
                <div className="investment--potential">
                    <h3>Unlock Your Investment Potential</h3>
                    <p>Explore our Property Management Service
                        categories and let us handle the complexities
                        while you enjoy the benefits of property ownership.</p>
                    <Button label="Learn More" variant="investment--potential"/>
                </div>
            </div>
            <div className="decisions--list">
                 <UPropertyCard className="decision" Icon={Icon} heading="Market Insight" text="Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions" />
                    <UPropertyCard className="decision" Icon={Icon} heading="ROI Assessment" text="Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments"/>
                    <UPropertyCard className="decision" Icon={Icon} heading="Customized Strategies" text="Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs"/>
                    <UPropertyCard className="decision" Icon={Icon} heading="Diversification Mastery" text="Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations" />
                </div>
                </div>
       </div>
    )
}

export default Decisions;