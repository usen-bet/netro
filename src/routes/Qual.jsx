import "./Styles/Qual.scss"
import superteam from "./Images/Logos/Superteam.png"
import Fuse from "./Images/Logos/Fuse.png"
import Axelar from "./Images/Logos/Axelar.png"
import Tangible from "./Images/Logos/Tangible.png"
import cadence from "./Images/Logos/cadence.png"
import Cenoa from "./Images/Logos/Cenoa.png"
import Navbar from "../components/Navbar"
import { RevealRed } from "../components/Animation/RevealRed"
import { Slowvert } from "../components/Animation/Slowvert"


function Qual() {
  return (
    <div className='Qualpage'>
     <Navbar />
      <div className='ambassador-page'>
        <div className='ambassador-box'>
        <div className='middle'>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={superteam} alt="superteam" />
          </div>
          <h1>
            @SuperteamNG
          </h1>
        </div>
        </RevealRed>  
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Team Member</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Fuse} alt="Fuse" />
          </div>
          <h1>
            @FuseNetwork
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        </div>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Axelar} alt="Axelar" />
          </div>
          <h1>
            @Axelar
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Cenoa} alt="Cenoa" />
          </div>
          <h1>
            @Cenoapp
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>KOL</h1></Slowvert>
          <Slowvert><h1>Writer</h1></Slowvert>
        </div>
        </div>
        </div>
        <div className='ambassador-group'>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={cadence} alt="cadence" />
          </div>
          <h1>
            @CadenceProtocol
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>Writer ( Composer )</h1></Slowvert>
        </div>
        </div>
        <div className='ambassador-details'>
        <RevealRed>
        <div className='kol'>
          <div className='kol-logo'>
          <img src={Tangible} alt="Tangible" />
          </div>
          <h1>
            @TangibleDAO
          </h1>
        </div>
        </RevealRed>
        <div className="jobs">
          <Slowvert><h1>Marketer</h1></Slowvert>
        </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Qual