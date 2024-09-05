import "./Styles/Contact.scss"
import Navbar from "../components/Navbar"
import contactimg from "./Images/Tablet/contact-img.png"
import { RevealRed } from "../components/Animation/RevealRed"
import { Pop } from "../components/Animation/Pop"
import { RiTwitterXLine } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className="Contact-page">
      <Navbar />
      <h1><Pop>Contact Me</Pop></h1>
       <div className="form-box">
         <div className="form">
         <input type="text" placeholder="Name"/>
         <input type="text" placeholder="Email"/> 
         <textarea cols="30" rows="10" className="message" name="message" placeholder="Message"></textarea>
         <button>Send</button>
         </div>
         <img src={contactimg} alt="" className="img-contact"/>
       </div>
       <div className="g-connect">
       <div className="connect"><RiTwitterXLine className="black"/></div>
       <div className="connect"><FaPhone className="black"/></div>
       <div className="connect"><FaWhatsapp className="black"/></div>
       </div>
    </div>
  )
}

export default Contact