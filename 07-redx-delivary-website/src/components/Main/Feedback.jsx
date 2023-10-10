import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Feedback = () => {
  return (
    <div>
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
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/s5MFD5c/client-love1.webp"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/tb5zm44/client-love2.jpg"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/yYw6LxH/client-love3.webp"
                alt=""
                className="w-12"
              />
              <p>
                লেলিন ঘোষ
                <br /> <p>আলফা কনজুমার ফুড</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/RQ74Fm7/client-love5.jpg"
                alt=""
                className="w-12"
              />
              <p>
                মোহাম্মদ গিয়াস উদ্দিন
                <br /> <p>কিডস ডায়পার</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/s5MFD5c/client-love1.webp"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/tb5zm44/client-love2.jpg"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/yYw6LxH/client-love3.webp"
                alt=""
                className="w-12"
              />
              <p>
                লেলিন ঘোষ
                <br /> <p>আলফা কনজুমার ফুড</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border p-5 mb-10">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/RQ74Fm7/client-love5.jpg"
                alt=""
                className="w-12"
              />
              <p>
                মোহাম্মদ গিয়াস উদ্দিন
                <br /> <p>কিডস ডায়পার</p>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Feedback;
