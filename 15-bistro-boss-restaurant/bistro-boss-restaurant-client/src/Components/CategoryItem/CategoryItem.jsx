// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const CategoryItem = () => {
  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <p className="text-[#D99904] mt-4">---From 11:00am to 10:00pm---</p>
        <h1 className="border-t border-b text-4xl mb-5 py-3 mt-2">
          ORDER ONLINE
        </h1>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/vqpwFgh/slide1.jpg"
            alt=""
            className="max-w-full"
          />
          <h1 className="text-2xl relative bottom-10 text-white text-center">
            SALADS
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/Rjpq92Z/slide2.jpg"
            alt=""
            className="max-w-full"
          />
          <h1 className="text-2xl relative bottom-10 text-white text-center">
            SOUPS
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/BtzQ9WK/slide3.jpg"
            alt=""
            className="max-w-full"
          />
          <h1 className="text-2xl relative bottom-10 text-white text-center">
            PIZZAS
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/bzXhx14/slide4.jpg"
            alt=""
            className="max-w-full"
          />
          <h1 className="text-2xl relative bottom-10 text-white text-center">
            DESSERTS
          </h1>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoryItem;
