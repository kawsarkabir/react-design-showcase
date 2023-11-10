// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useEffect } from "react";
const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
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
        <SwiperSlide>
          <div  className=" flex items-center  slider-1">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div data-aos="fade-right" className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center  slider-2">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div data-aos="fade-right" className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" flex items-center  slider-3">
            <div className=" flex justify-evenly  max-w-screen-xl">
              <div data-aos="fade-right" className="lg:ml-44 ml-10">
                <span className="text-[#FFBB38] font-medium text-3xl mb-6">
                  VR BOX 3D Glass
                </span>
                <h1 className="lg:text-5xl text-2xl font-bold my-3">
                  Explore Our Tech <br />
                  Collection Perfect <br /> Gadget
                </h1>
                <button className="btn bg-[#FFBB38] border-none mt-5 px-12">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
