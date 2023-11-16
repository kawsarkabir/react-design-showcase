import SectionHeader from "../Shared/SectionHeader/SectionHeader";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-20">
      <div className="w-1/2 mx-auto">
        <SectionHeader
          subHeading="---What Our Clients Say---"
          mainHeading="TESTIMONIALS"
        ></SectionHeader>
      </div>
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="text-center mt-10 flex flex-col items-center space-y-2 w-2/3 mx-auto ">
                <Rating  
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <p>{review?.details}</p>
                <h4>{review?.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
