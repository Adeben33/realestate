import "./ContactFormComponent.css"
import stars from "./../../assets/stars.svg";
import ContactForm from "./ContactForm";


function ContactFormComponent() {
    

    return (
        <div className="contactFormComponent">
            <img src={stars} alt="star pic" />
            <ContactForm className="contactForm" />
        </div>
    )
}

export default ContactFormComponent;