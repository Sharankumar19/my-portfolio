import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import '../components/Contact.css'
function Contact(){
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "b85eaf40-4ffd-4b88-8ea4-0862a25a6f13");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
    return(
        <div id="contact" className='contact'>
            <div className="contact-title">
            <h2>Get in touch</h2>
            </div>
        <div className="contact-section">
            <div className="contact-left">
            <h1>let's talk</h1>
            <p>i'm currently available to take on new project,so feel free to send me a msg about anyting that you
                want me to work on.you can contact anytime
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                <IoMdMail />
                    <p>sharankarunakaran19@gmail.com</p>
                    </div>
                <div className="contact-detail">
                    <IoIosContact/>
                    <p>8807172561</p>
                    </div>
                <div className="contact-detail">
                    <FaLocationDot/>
                    <p>cuddalore</p>
                    </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">your name:</label>
            <input type="text" placeholder="enter your name"/>
            <label htmlFor="">your email:</label>
            <input type="email" placeholder="enter your email"/>
            <label htmlFor="">enter your message here</label>
            <textarea name="message" placeholder="enter some msg" rows={10}></textarea>
            <button type="submit" className="contact-submit">submit</button>
        </form>
        </div>
        </div>
    );
}
export default Contact;