import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Brand = () => {
  return (
    <div className="px-4 mt-20">
        <div className=" ">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-gray-400">TOP ENTERPRISES</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/JRW22zW/bata-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/0D0xFMb/rangs-group-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/XtQjCTx/lotto-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-gray-400">TOP SMES</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/kcYbx1z/daraz.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/VjMN0Nw/ajkerdeal.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/jgXC2cZ/othoba.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-gray-400">TOP ENTERPRISES</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/JRW22zW/bata-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/0D0xFMb/rangs-group-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/XtQjCTx/lotto-grey.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <h1 className="text-gray-400">TOP SMES</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/kcYbx1z/daraz.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/VjMN0Nw/ajkerdeal.png" alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="mb-10">
            <img src="https://i.ibb.co/jgXC2cZ/othoba.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
};

export default Brand;
