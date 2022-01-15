import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/Multicarousel.css";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import {useWindowWidth} from '@react-hook/window-size'
const data=
[
    "https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg",
    "https://wallpapercave.com/wp/wp8975764.jpg",
    "https://wallpapercave.com/wp/wp8975771.jpg",
    "https://wallpapercave.com/wp/wp8975794.jpg",
    "https://wallpapercave.com/wp/wp8975781.jpg",
    "https://wallpapercave.com/wp/wp5432164.jpg",
    "https://wallpapercave.com/wp/wp8975776.jpg",
    "https://wallpapercave.com/wp/wp8975863.jpg",
    "https://wallpapercave.com/wp/wp8975850.jpg",
    "https://wallpapercave.com/wp/wp6494807.jpg",
    "https://wallpapercave.com/wp/wp8975909.jpg",
]
var slidesOnScreen=0;
const PreviousBtn = (props:any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
       {props.currentSlide>0 && <ArrowBackIos className="arrows-carousel"/>}
      </div>
    );
  };
  const NextBtn = (props:any) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
       {props.currentSlide<props.slideCount-(slidesOnScreen) && <ArrowForwardIos className="arrows-carousel" />}
      </div>
    );
  };
function Multicarousel() {
  const onlyWidth = useWindowWidth();
  if(onlyWidth>1024)
  slidesOnScreen=6
  else if(onlyWidth>767 && onlyWidth<1025)
  slidesOnScreen=4
  else if(onlyWidth>379 && onlyWidth<768)
  slidesOnScreen=2
  else
  slidesOnScreen=1
  var settings = {
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: slidesOnScreen,
          slidesToScroll: 1,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesOnScreen,
          slidesToScroll: 1,
          swipeToSlide: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesOnScreen,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows:false,
        }
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: slidesOnScreen,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows:false,
        }
      }
    ]
  };
    return (
        <div className="container-carousel">
          <h1>React Responsive Multi Carousel</h1>
          <div className="carousel-wrap">
      <Slider
        {...settings}
        infinite={false}
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
      >
        {data.map((item:any,index:number) => (
          <div className="carousel-image" key={index}>
            <img src={item} alt="images" style={{marginLeft:".1rem", width: "98%", height: "33vh" }} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
    )
}
export default Multicarousel;