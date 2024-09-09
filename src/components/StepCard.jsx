import "./StepCard.css"



function StepCard({stepNumber,}) {
    

    return (
        <div className="step--card">
            <div className="step--card__num">
                Step {stepNumber }
            </div>
            <div className="step--details ">
                <div className="heading ">Discover a World of Possibilities</div>
                <p>Your journey begins with exploring our carefully curated
                    property listings. Use our intuitive search tools
                    to filter properties based on your preferences,
                    including location, type, size, and budget.</p>
            </div>
        </div>
    )
}

export default StepCard;