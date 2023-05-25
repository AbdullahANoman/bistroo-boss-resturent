import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from "../../../../src/assets/home/slide1.jpg";
import slide2 from "../../../../src/assets/home/slide2.jpg";
import slide3 from "../../../../src/assets/home/slide3.jpg";
import slide4 from "../../../../src/assets/home/slide4.jpg";
import slide5 from "../../../../src/assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const Category = () => {
  return (
   <section className="max-w-screen-xl	mx-auto">
    <SectionTitle subHeader={'From 11:00am to 10:00pm'} header={'ORDER ONLINE'}></SectionTitle>
     <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper "
    > 
      <SwiperSlide className="">
        <img src={slide1} alt="" />
        <h3 className="md:text-4xl text-white -mt-16 md:pb-20 text-center shadow-lg ">Salads</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="md:text-4xl text-white -mt-16 md:pb-20 text-center shadow-lg ">Soups</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="md:text-4xl text-white -mt-16 md:pb-20 text-center shadow-lg ">Pizzas</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="md:text-4xl text-white -mt-16 md:pb-20 text-center shadow-lg ">Desserts</h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="md:text-4xl text-white -mt-16 md:pb-20 text-center shadow-lg ">Soups</h3>
      </SwiperSlide>
      
    </Swiper>
   </section>
  );
};

export default Category;
