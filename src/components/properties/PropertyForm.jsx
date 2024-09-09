import "./PropertyForm.css"
import stars from "./../../assets/stars.svg";
import ComponentHeader from "../ComponentHeader";
import callIcon from "./../../assets/icons/callIcon.svg"
import emailIcon from "./../../assets/icons/email.svg"
import { useState } from "react";




function PropertyForm() {
    
  const [isRadio1Checked, setIsRadio1Checked] = useState(true);
  const [isRadio2Checked, setIsRadio2Checked] = useState(false);
  const [isRadio1Disabled, setIsRadio1Disabled] = useState(false);
  const [isRadio2Disabled, setIsRadio2Disabled] = useState(true);

  const handleRadio1Change = () => {
    setIsRadio1Checked(true);  
    setIsRadio2Checked(false); 
    setIsRadio1Disabled(false); 
    setIsRadio2Disabled(true); 
  };

  const handleRadio2Change = () => {
    setIsRadio1Checked(false); 
    setIsRadio2Checked(true);  
    setIsRadio1Disabled(true); 
    setIsRadio2Disabled(false); 
  };

  

    

    return (
        <div className="propertyList">
            <img src={stars} alt="star pic" />
            <div className="propertyList--section">
            <ComponentHeader headingText="Let's Make it Happen"
                text="Ready to take the first step toward your dream property? 
                Fill out the form below, and our real estate wizards will work 
                their magic to find your perfect match. Don't wait; let's embark 
                on this exciting journey together."
                /> 
            <div className="form-container">
                <form>
                <div className="form-component">
               <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter First Name" />
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter Last Name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your Email" />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Enter Phone Number" />
                </div>
                <div className="form-group">
                    <label>Preferred Location</label>
                    <select>
                        <option>Select Location</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Property Type</label>
                    <select>
                        <option>Select Property Type</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>No. of Bathrooms</label>
                    <select>
                        <option>Select no. of Bathrooms</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>No. of Bedrooms</label>
                    <select>
                        <option>Select no. of Bedrooms</option>
                    </select>
                </div>
                <div className="form-group grid-column-span-2">
                    <label>Budget</label>
                    <select>
                        <option>Select Budget</option>
                    </select>
                </div>
                <div className="form-group preferred-contact-method  grid-column-span-2">
                    <label>
                       Preferred Contact Method
                        </label>
                            <div className="method">
                                <div className="method--number">
                                <img src={callIcon} alt="call icon" />
                                <input type="text" name="contact-method" id="" disabled={isRadio1Disabled}  placeholder="Enter Your Number"/>  
                                        <input type="radio" name="contact-method" onClick={handleRadio1Change}
                                        
                                             checked={isRadio1Checked}
                                             
                                        
                                        /> 
                                <div className="box"></div>
                                </div>
                                <div className="method--number">
                                <img src={emailIcon} alt="email icon" />
                                        <input type="text" name="contact-method" placeholder=" Enter Your Email"
                                        
                                        disabled={isRadio2Disabled}        />   
                                        <input type="radio" name="contact-method" checked={isRadio2Checked} onClick={handleRadio2Change}
                                        
                                    
                                        
                                        /> 
                                    <div className="box"></div>
                                        
                                </div>
                        </div>    
                  
                </div>
                <div className="form-group grid-column-span-4 ">
                    <label>Message</label>
                    <textarea placeholder="Enter your Message here."></textarea>
                </div>
                <div className="form-group">
                            </div>   
                </div> 
             <div className="termsAndSend">
                <label>
                                <input type="checkbox" /> 
                                <div className="box"></div>
                    I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>
                    </label>
                <button type="submit" className="submit-button">Send Your Message</button>
                </div>
                
                           
            </form>
            </div>
             </div>   
        </div>
    )
}

export default PropertyForm;