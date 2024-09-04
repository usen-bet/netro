import "./Styles/Services.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Navbar from "../components/Navbar/Navbar";
import Slider from "react-slick";
import { Topvert } from "../components/Animation/Topvert"


function Services() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 150,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
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
            <h1>
              Creator
            </h1>
            <p className="center">
            Compose compelling content (Videos, articles, threads) that will garner public attention leading to more awareness in the Nigerian crypto space 
            </p>
            <button>
              Book now
            </button>
          </div>
          </Topvert>
        </div>
      </div>
      <div>
        <div className="card">
          <Topvert>
          <div className="card-content">
            <h1>
              Community Lead
            </h1>
            <p>
            With Over 3 years experience in team participation and community management on NetrovertDAO and superteamNG, I can create an active and organic community
            </p>
            <button>
              Book now
            </button>
          </div>
          </Topvert>
        </div>
      </div>
      <div>
        <div className="card">
          <Topvert>
          <div className="card-content">
            <h1>
              KOL
            </h1>
            <p>
            spread word of your project/product and create connections between you and my audience leading to increased awareness and community growth  
            </p>
            <button>
              Book now
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