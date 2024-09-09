import "./FeesOrCostCard.css"



function FeesOrCostCard({heading,cost,moredetails}) {
    

    return (
        <div className="FeesOrCostCard">
            <div className="heading">{heading}</div>
        <div className="FeesOrCostCard--details">
                <p className="cost">{cost}</p>
                {moredetails ? (<p className="more--details">
                    {moredetails}</p>):(null)}
            
        </div>
    </div>
    )
}



export default FeesOrCostCard;