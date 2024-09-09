import Button from "../Button"
import "./clientCard.css"
import domainIcon from "./../../assets/icons/domain.svg"
import categoryIcon from "./../../assets/icons/category.svg"


function ClientCard({year, companyName, domain, category, text}) {
    

    return (
        <div className="clientCard">
            <div className="corporation">
                <div className="heading">
                    Since {year }
                    <span>{ companyName}</span>
                </div>
                <Button label="Visit Website" variant="clientCard" />
            </div>
            <div className="clientDetails">
                <div className="domain">
                    <div className="type">
                    <img src={domainIcon} alt="domain Icon" />
                    <p>Domain</p>
                    </div>
                    <p className="white--color">{ domain}</p>
                </div>
                <div className="category">
                    <div className="type">
                    <img src={categoryIcon} alt="Category Icon" />
                    <p>Category</p>
                    </div>
                    <p className="white--color">{category}</p>
                </div>
            </div>
            <div className="testimonial">
                <h3 className="heading"> What They Said 🤗 </h3>
                <p>{ text}</p>
            </div>
        </div>
    )
}

export default ClientCard;