import "./Navbar/Navbar.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Topvert } from "./Animation/Topvert"
import Logo from "../assets/logo.png"
import{ RevealRed } from "../components/Animation/RevealRed"

function Navbar() {
  const [unclick, setUnclick] = useState(true)
  const toggle = () => {
    console.log("trap")
    setUnclick(!unclick)
  }
  return (
    <div className='bar'>
     <div className='logo'>
       <img src={Logo} />  
    </div> 
    <div onClick={toggle} className={unclick ? 'hamburger' : 'active'}>
       <div className={unclick ? 'hamburger-line ham-top' : "one hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-mid' : "two hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-bottom' : "three hamburger-line"}></div>
    </div>
    <div className='navigation'>
      <Link to="/"><p className='link'><Topvert>Home</Topvert></p></Link>
      <Link to="/Qual"><p className='link'><Topvert>Qualification</Topvert></p></Link>
      <Link to="/Services"><p className='link'><Topvert>Services</Topvert></p></Link>
      <Link to="/Reviews"><p className='link'><Topvert>Reviews</Topvert></p></Link>
      <Link to="/Contact"><p className='link'><Topvert>Contact Me</Topvert></p></Link>
      <div className='box'></div>
    </div>  
    {
      unclick ? (null) : (
        <div className="links-bg">
       <div className="linkers"> 
       <ul className="Link-list">
        <li>
        <RevealRed>
          <Link to="/" className="link"> 
          Home
         </Link>
         </RevealRed>
        </li>
        <li>
          <Link to="/Qual" className="link">
          <RevealRed>Qualifications</RevealRed>
          </Link>
        </li>
        <li>
        <RevealRed>
        <Link to="/Services" className="link">
          Services
        </Link>
        </RevealRed>
        </li>
        <li>
        <RevealRed>
        <Link to="/Reviews" className="link">
          Reviews
        </Link>
        </RevealRed>
        </li>
        <li>
        <RevealRed>
        <Link to="/Contact" className="link">    
          Contact Me
        </Link>
        </RevealRed>
        </li>
       </ul>
       </div>
      </div>
      )
    }
    </div>
  )
}

export default Navbar