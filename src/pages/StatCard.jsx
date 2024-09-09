import "./StatCard.css"


const StatCard = ({ number, label }) => {
  return (
    <div className="statCard">
      <h3 className="statCard--statNumber">{number}</h3>
      <p className="statCard--statLabel">{label}</p>
    </div>
  );
};


export default StatCard;
