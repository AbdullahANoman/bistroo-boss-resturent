
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'
import { FaHandHoldingHeart } from "react-icons/fa";
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <section className="max-w-screen-xl	mx-auto py-10">
      <SectionTitle
        header={"TESTIMONIALS"}
        subHeader={"What Our Clients Say"}
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
        {reviews.map((review) => (
          <SwiperSlide className="md:px-[150px] sm:px-12 flex justify-center items-center text-center " key={review?._id}>
            <div className="flex justify-center py-5">
            <Rating style={{ maxWidth: 180 }} value={review?.rating} readOnly />
            </div>
            <p className="flex justify-center py-5"><FaHandHoldingHeart className="text-6xl text-center"></FaHandHoldingHeart></p>
            <p className=" text-lg text-justify	">{review?.details}</p>
            <p className="text-3xl text-[#CD9003]">{review?.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
