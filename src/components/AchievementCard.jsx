import "./AchievementCard.css"


function AchievementCard({heading , text}) {
    

    return (
     <div className="achievementCard">
            <div className="heading">{heading}</div>
            <div className="text">{text}</div>
        </div>    
    )
}

export default AchievementCard;