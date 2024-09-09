import Button from "./Button";
import "./FAQ.css"




function FAQ({heading, text, link }) {
    
    return (
        <div className="FAQ-component">
            <div className="heading">
                {heading}
            </div>
            <div className="text">
                {text}
            </div>
            <Button label="Read More" variant="faq" />
      </div>
    )
}

export default FAQ;