import "./ValueCard.css"


const ValueCard = ({ icon, title, description, className }) => {
  return (
      <div className={`valueCard ${className}`}>
        
      <div className="iconContainer">
              <span className="icon">{icon}</span>
               <h3 className="cardTitle">{title}</h3>
      </div>
     
      <p className="cardDescription">{description}</p>
    </div>
  );
};

export default ValueCard;