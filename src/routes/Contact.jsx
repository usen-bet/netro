import "./Styles/Contact.scss"
import Navbar from "../components/Navbar/Navbar"
import contactimg from "./Images/Tablet/contact-img.png"

function Contact() {
  return (
    <div className="Contact-page">
      <Navbar />
      <h1>Contact Me</h1>
       <div className="form-box">
         <div className="form">
         <input type="text" placeholder="Name"/>
         <input type="text" placeholder="Email"/> 
         <textarea cols="30" rows="10" className="message" name="message" placeholder="Message"></textarea>
         <button>Send</button>
         </div>
         <img src={contactimg} alt="" className="img-contact"/>
       </div>
    </div>
  )
}

export default Contact