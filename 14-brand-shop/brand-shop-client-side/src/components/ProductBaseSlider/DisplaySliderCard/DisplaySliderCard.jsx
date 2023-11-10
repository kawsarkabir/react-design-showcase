
import PropTypes from "prop-types";
import "./DisplaySliderCard.css";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
const DisplaySliderCard = ({ productBaseSlider }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {productBaseSlider.map((singleSlider) => (
          <SwiperSlide key={singleSlider._id}>
            <div
              className=" flex items-center h-[80vh]"
              style={{
                backgroundImage: `url(${singleSlider.sliderURL}, )`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className=" flex justify-evenly  max-w-screen-xl">
                <div className="lg:ml-44 ml-10">
                  <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                    {singleSlider.sliderTitle}
                  </span>
                  <p className="my-3 w-3/4 text-white">
                    {singleSlider.sliderDecs}
                  </p>
                  <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
DisplaySliderCard.propTypes = {
  singleSlider: PropTypes.object,
};
export default DisplaySliderCard;
