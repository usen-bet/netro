import "./Styles/Contact.scss"
import Navbar from "../components/Navbar"
import contactimg from "./Images/Tablet/contact-img.png"
import { RevealRed } from "../components/Animation/RevealRed"
import { Pop } from "../components/Animation/Pop"
import { RiTwitterXLine } from "react-icons/ri";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef} from 'react';
import emailjs from '@emailjs/browser';

function Contact() {

const notify = () => toast("Email sent");
const form = useRef();

const onSubmit = () => {
  notify()
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_iwjpeuq', 'template_pqj7kfq', form.current, {
      publicKey: 'DaWi93EtV2vy-8WLW',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
};

  return (
    <div className="Contact-page">
      <Navbar />
      <h1><Pop>Contact Me</Pop></h1>
       <div className="form-box">
         <form action="" ref={form} className="form" onSubmit={sendEmail}>
         <input type="text" name="to_name" placeholder="Name" />
         <input type="text" name="from_name" placeholder="Email"/> 
         <textarea cols="30" rows="10" className="message" name="message" placeholder="Message"></textarea>
         <button type="submit" value="Send" onClick={onSubmit} className="btn-form">Send</button>
         <ToastContainer
          theme="dark"
          position="top-center"
         />
         </form>
         <img src={contactimg} alt="" className="img-contact"/>
       </div>
       <div className="g-connect">
       <div className="connect"><a href="https://x.com/netrovertHQ"><RiTwitterXLine className="black"/></a></div>
       <div className="connect"><a href="http://t.me/netrovert1"><FaTelegram className="black"/></a></div>
       <div className="connect"><a href="http://wa.me/+2348084396896"><FaWhatsapp className="black"/></a></div>
       </div>
    </div>
  )
}

export default Contact