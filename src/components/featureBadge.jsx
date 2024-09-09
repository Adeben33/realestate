import "./featureBadge.css"


function FeatureBadge({icon, text}) {
    

    return (
    <div className="featured-badge">
            <img src={icon} alt="icon" />
            {text}
    </div>
)
}

export default FeatureBadge;