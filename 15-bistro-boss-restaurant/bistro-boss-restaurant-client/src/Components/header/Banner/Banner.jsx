import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div className="h-[90vh]">
          <img src="https://i.ibb.co/y6gwkyW/banner.jpg" />
        </div>
        <div className="h-[90vh]">
          <img src="https://i.ibb.co/y6gwkyW/banner.jpg" />
        </div>
        <div className="h-[90vh]">
          <img src="https://i.ibb.co/y6gwkyW/banner.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
