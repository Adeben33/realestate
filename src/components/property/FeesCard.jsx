import "./FeesCard.css"
import Button from "../Button"
import React from "react"

function FeesCard({ heading,children}) {
    // Determine the number of children
  const childrenCount = React.Children.count(children);

    const containerClass = childrenCount > 2 ? 'container-many' : 'container-few'
    
    return (
        <div className="FeesCard">
            <div className="header">
                <h4>{heading}</h4>
                <Button label="Learn More" variant="Fees-card" />
            </div>
        </div>
    )
}

export default FeesCard;