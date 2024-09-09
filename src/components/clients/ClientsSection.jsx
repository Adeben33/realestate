import "./ClientSection.css"
import stars from "./../../assets/stars.svg";
import ComponentHeader from "../ComponentHeader";
import Carousel from "../carousel";
import TestimonialCard from "../TestimonialCard";
import profilePic from "./../../assets/Profile.png";
import ClientCard from "./ClientCard";

function ClientSection() {
    

    return <section className="clientSection">
        <img src={stars} alt="star pic" />
        <ComponentHeader headingText="Our Valued Clients"
            text="At Estatein, we have had the privilege of
                     working with a diverse range of clients across 
                     various industries. Here are some of the clients we've
                      had the pleasure of serving"
        />
        <Carousel itemsPerSlide={3} totalItems={10} xAxis={50.8} >
            <ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
        <ClientCard year="2018" companyName="GreenTech Enterprises" domain="Commercial Real Estate" category="Retail Spacev"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>
<ClientCard year="2019" companyName="ABC Corporation" domain="Commercial Real Estate" category="Luxury Home Development"
            text="Estatein's expertise in finding the perfect
                    office space for our expanding operations was invaluable.
                    They truly understand our business needs."/>

        </Carousel>
        
    </section>
}

export default ClientSection;