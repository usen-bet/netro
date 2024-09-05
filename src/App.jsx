import "./App.css"
import "./App.scss"
import Navbar from "./components/Navbar"
import {Slowvert} from "./components/Animation/Slowvert"
import {Fastvert} from "./components/Animation/Fastvert"
import {Helmet} from "react-helmet";

function App() {

  return (
    <div className="project-head">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Netrofolio</title>
                <link data-react-helmet="true" rel="icon" type='image/png' href="/favicon.ico" />
      </Helmet>
      <div className="nav-bar">
      <Navbar />
      <div className="top-heading">
        <h2>
        <Slowvert>          
         I'm
        </Slowvert>
        </h2>
        <h1>
        <Fastvert>  
         <span className="font">
         Netrovert
        </span>    
        </Fastvert>     
        </h1>
        <div className="what-i-do">
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="Content Creator">
          <Slowvert>
          Content Creator
          </Slowvert>
          </span></p>
        </div>
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="KOL">
          <Slowvert>
          KOL
          </Slowvert>
          </span></p>
        </div>
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="Community Manager">
          <Slowvert>
          Community Manager
          </Slowvert>  
          </span></p>
        </div>
        </div>
      </div>
      <div className="shine">
      </div>
        <div className="hero">
      
      </div> 
      <div className="Accolades">
        <div className="purplebox ones">
          <ul>
            <li>Number 1 bounty winner on Superteam Nigeria</li>
          </ul>
        </div>
        <div className="purplebox twos">
          <ul>
            <li>DeFi Tiger’s Threador of the year</li>
          </ul>
        </div>
        <div className="purplebox threes">
          <ul>
            <li>Over 12000+ followers on X</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
