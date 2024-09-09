import "./PricingDetails.css"
import stars from "./../../assets/stars.svg";
import ComponentHeader from "../ComponentHeader";
import ComprehensivePricing from "./ComprehensivePricing";
import FeesOrCostCard from "./FeesOrCostCard";


function PricingDetails() {
    

    return (
        <>
        <div className="PricingDetails">
            <img src={stars} alt="star pic" />
             <div className="PricingDetails--container">
                <ComponentHeader headingText="Comprehensive Pricing Details"
                    text="At Estatein, transparency is key. We want you to have 
                a clear understanding of all costs associated with your property 
                investment. Below, we break down the pricing for Seaside Serenity 
                Villa to help you make an informed decision" />
                <div className="PricingDetail--container">
                <p className="Listing-Price">
                    <h5>Listing Price</h5>
                    <span className="price">
                        $1,250,000
                    </span>
                    </p>
                    <div className="pricingAndCostList">

                        <ComprehensivePricing heading="Pricing">
                            <FeesOrCostCard  heading="Property Transfer Tax" cost="$25,000" moredetails="Based on the sale price and
                    local regulations"/>
            <FeesOrCostCard  heading="Legal Fees" cost="$3,000" moredetails="Approximate cost for legal services, including title transfer"/>
        <div className="line"></div>  
           <FeesOrCostCard  heading="Home Inspection" cost="$500" moredetails="Recommended for due diligence"/>
            <FeesOrCostCard  heading="Property Insurance" cost="$1,200" moredetails="Annual cost for comprehensive property insurance"/>
        <div className="line"></div>
            <FeesOrCostCard  heading="Mortgage Fees" cost="Varies" moredetails="Based on the sale price and
                    local regulations"/>
                        </ComprehensivePricing> 

                        <ComprehensivePricing heading="Monthly Costs">
                        <FeesOrCostCard heading="Property Taxes" cost="$1,250" moredetails="Approximate monthly property tax based on the sale price and local rates" />
                        <div className="line"></div>  
                        <FeesOrCostCard  heading="Homeowners' Association Fee" cost="$300" moredetails="Monthly fee for common area maintenance and security"/>
                        </ComprehensivePricing>


                        <ComprehensivePricing heading="Total initial Cost">
                        <FeesOrCostCard  heading="Listing Price" cost="$1,250,000" moredetails="Based on the sale price and
                    local regulations"/>
                        <FeesOrCostCard  heading="Additional Fees" cost="$300" moredetails="Property transfer tax, legal fees, inspection, insurance"/>
                        <div className="line"></div>  
                        <FeesOrCostCard  heading="Down Payment" cost="$250,000" moredetails="20%"/>
                        <FeesOrCostCard  heading="Mortgage Amount" cost="$1,200" moredetails="Annual cost for comprehensive property insurance"/>
                        </ComprehensivePricing>

                        <ComprehensivePricing heading="Monthly Expenses">
                        <FeesOrCostCard  heading="Property Taxes" cost="$1,250,000" />
                        <FeesOrCostCard  heading="Homeowners' Association Fee" cost="$29,700" />
                        <div className="line"></div>  
                        <FeesOrCostCard  heading="Mortgage Payment" cost="Varies based on terms and interest rate" moredetails="If applicable"/>
                        <FeesOrCostCard  heading="Property Insurance" cost="$100" moredetails="Approximate monthly cost"/>
                        </ComprehensivePricing>
                        
                     </div>    
                </div> 

            </div>
            </div>

            
            
       </> 
    )
}


export default PricingDetails;