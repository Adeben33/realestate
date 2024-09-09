import Button from "./Button";
import "./Explore.css"

function Explore() {
    

    return (
        <>
         <section className="explore">
                <div className="text">
                    Start Your Real Estate Journey Today
                    <span>
                        Your dream property is just a click away. Whether you're looking for a new home,
                        a strategic investment, or expert real estate advice, Estatein is here to assist
                        you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
                    </span>
                </div>
            <Button label="Explore Properties" variant="explore" />
            
            </section>

</>
    )
}

export default Explore;