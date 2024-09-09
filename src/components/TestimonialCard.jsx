import "./TestimonialCard.css"
import StarRating from "./StarRating";


function  TestimonialCard ({ service,rating, review, userName, userLocation , profilePic})  {
  return (
    <div className="testimonialCard ">
      <StarRating rating={rating} />
          <h3 className="testimonialCard--title">{service}</h3>
      <p className="testimonialCard--reviewText">{review}</p>
      <div className="testimonialCard--userInfo">
        <img
          src={profilePic}
          alt={userName}
          className="testimonialCard--avatar"
        />
        <div>
          <p className="testimonialCard--userName">{userName}</p>
          <p className="testimonialCard--userLocation">{userLocation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
