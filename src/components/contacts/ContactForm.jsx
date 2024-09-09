import Button from "../Button";
import ComponentHeader from "../ComponentHeader";
import "./ContactForm.css"


function ContactForm({className}) {
    
    
    return (
        <div className={`contactForm ${className}`}>
            <ComponentHeader headingText="Let's Connect"
                text="We're excited to connect with you and 
                learn more about your real estate goals.
                 Use the form below to get in touch with Estatein.
                  Whether you're a prospective client, partner, or
                  simply curious about our services, we're here to
                  answer your questions and provide the assistance
                  you need." />
        <div class="form-container">
                <form>
    <div className="form">           
    <div class="form-grid">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="Enter First Name" />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Enter Last Name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter your Email" />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input type="tel" id="phone" placeholder="Enter Phone Number" />
      </div>
      <div class="form-group">
        <label for="inquiry-type">Inquiry Type</label>
        <select id="inquiry-type">
          <option>Select Inquiry Type</option>
        </select>
      </div>
      <div class="form-group">
        <label for="how-hear">How Did You Hear About Us?</label>
        <select id="how-hear">
          <option>Select</option>
        </select>
      </div>
      <div class="form-group grid--span-3">
        <label for="message">Message</label>
        <textarea id="message" placeholder="Enter your Message here.."></textarea>
      </div>
         </div>
                          </div>
    <div className="submit--container">
    <div class="form-agreement">
     <input type="checkbox" id="terms" />
     <div className="box"></div>
      <label for="terms">I agree with <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></label>
    </div>
        <Button label="Send Your Message" type="submit" variant="contact--form"/>
    
    </div>
   
        </form>
    </div>

    </div>
            
    )
}


export default ContactForm; 