import Logo from "../Images/Logo.png"
import "./Navbar.scss"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Topvert } from "../Animation/Topvert"

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
          <Link to="/" className="link"> 
          Home
         </Link>
        </li>
        <li>
          <Link to="/Qual" className="link">
          Qualifications
          </Link>
        </li>
        <li>
        <Link to="/Services" className="link">
          Services
        </Link>
        </li>
        <li>
        <Link to="/Reviews" className="link">
          Reviews
        </Link>
        </li>
        <li>
        <Link to="/Contact" className="link">    
          Contact Me
        </Link>
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