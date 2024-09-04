import "./styles/Home.scss"
import "../App.css"
import Navbar from "../components/Navbar/Navbar"

function App() {

  return (
    <div className="project-head">
      <div className="nav-bar">
      <Navbar />
      <div className="top-heading">
        <h2>
         I'm
        </h2>
        <h1>
         Netrovert
        </h1>
        <div className="what-i-do">
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="Content Creator">Content Creator</span></p>
        </div>
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="KOL">KOL</span></p>
        </div>
        <div className="spec">
          <div className="box"></div>
          <p className="link1"><span data-title="Community Manager">Community Manager</span></p>
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
