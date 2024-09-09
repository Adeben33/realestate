import FeesCard from "./FeesCard"
import "./ComprehensivePricing.css"



function ComprehensivePricing({heading,children}) {
    


    return (
        <div className="ComprehensivePricing">
          <FeesCard heading={heading} />
            <div className="grid--containter">
        <div className="line"></div>
                {children}
            </div>
    </div>

    )
}


   export default ComprehensivePricing