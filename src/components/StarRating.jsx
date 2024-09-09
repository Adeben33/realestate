import "./StarRating.css"

const Star = ({ fillType }) => {
  const fullStarPath = "M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21 12 17.27Z";

  const getFillColor = () => {
    switch (fillType) {
      case 'full':
        return "#FFD700"; // Gold color for full star
      case 'half':
        return "url(#halfGradient)"; // Gradient fill for half star
      case 'empty':
        return "#CCCCCC"; // Gray color for empty star
      default:
        return "#CCCCCC";
    }
  };

  return (
    <div className="star">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={getFillColor()}
    >
      {/* Define gradient for half star fill */}
      {fillType === 'half' && (
        <defs>
          <linearGradient id="halfGradient">
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="50%" stopColor="#CCCCCC" />
          </linearGradient>
        </defs>
      )}
      {/* Star path */}
      <path d={fullStarPath} />
      </svg>
    </div>
  );
};



const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating - fullStars >= 0.5; // Determine if there's a half star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Calculate empty stars

  return (
    <div className="starRating">
      {/* Render full stars */}
      {[...Array(fullStars)].map((_, index) => (
        <Star key={`full-${index}`} fillType="full" />
      ))}
      {/* Render half star if needed */}
      {hasHalfStar && <Star fillType="half" />}
      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <Star key={`empty-${index}`} fillType="empty" />
      ))}
    </div>
  );
};

export default StarRating;
