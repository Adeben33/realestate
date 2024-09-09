import "./TeamCard.css"

import twitterLogo from  "./../assets/aboutus/x.svg"
import send from "./../assets/aboutus/send.svg"




function TeamCard({pic, name, position,link, onClick}) {
    


    return (
        <div className="team">
            <div className="pic">
                <img src={pic} alt="" />
            </div>
            <div className="xlogo">
            <a href="#" > 
                <img src={twitterLogo} alt="twitter logo" />
                </a>
            </div>
            <h3>{name}</h3>
            <p>{position}</p>
        <div className="sayHello">
            <a href={link} >
                    Say Hello 👋
                </a> 
                <button className="team--btn" onClick={onClick}>
                    <img src={send} alt="send button" />
                </button>
               
        </div>
       
        </div>
    )
}

export default TeamCard;