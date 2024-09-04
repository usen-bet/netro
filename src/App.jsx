import "./App.css"
import "./App.scss"
import Navbar from "./components/Navbar"
import {Slowvert} from "./components/Animation/Slowvert"
import {Fastvert} from "./components/Animation/Fastvert"
import {Pop} from "./components/Animation/Pop"
function App() {

  return (
    <div className="project-head">
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
      </div>
    </div>
  )
}

export default App
