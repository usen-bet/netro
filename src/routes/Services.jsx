import "./Styles/Services.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/Navbar";
import Slider from "react-slick";
import { Topvert } from "../components/Animation/Topvert";

function Services() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 3,
    
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="ServicesPage">
      <Navbar />
      <Slider {...settings} className="carousel">
      <div>
        <div className="card">
          <Topvert>
          <div className="card-content">
            <span>
            <img src="https://i.ibb.co/3sqz3Qx/pen.png" alt="" className="icon-adj" />
            <h1>
             Creator 
            </h1>
            </span>
            <p className="center">
            Compose compelling content (Videos, articles, threads) that will garner public attention leading to more awareness in the Nigerian crypto space 
            </p>
            <button className="btn-animate">
              <a href="https://x.com/netrovertHQ">Book now</a>
            </button>
          </div>
          </Topvert>
        </div>
      </div>
      <div>
        <div className="card">
          <Topvert>
          <div className="card-content">
           <span>
           <img src="https://i.ibb.co/ngydjfn/community.png" alt="" className="icon-adj" />
           <h1>
             Community Lead 
            </h1>
           </span>
            <p>
            With Over 3 years experience in team participation and community management on NetrovertDAO and superteamNG, I can create an active and organic community
            </p>
            <button className="btn-animate">
            <a href="https://x.com/netrovertHQ">Book now</a>
            </button>
          </div>
          </Topvert>
        </div>
      </div>
      <div>
        <div className="card">
          <Topvert>
          <div className="card-content">
            <span>
            <img src="https://i.ibb.co/Bnfd79S/KOL.png" alt="" className="icon-adj"/>
            <h1>
             KOL 
            </h1>
            </span>
            <p>
            spread word of your project/product and create connections between you and my audience leading to increased awareness and community growth  
            </p>
            <button className="btn-animate">
              <a href="https://x.com/netrovertHQ">Book now</a>
            </button>
          </div>
          </Topvert>
        </div>
      </div>
    </Slider>
    </div>
  )
}

export default Services