
import featuredImg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css'
const Featured = () => {
  return (
    <section className="featuredBG bg-fixed rounded text-white h-[700px] md:h-[800px]  my-10 py-10">
      <SectionTitle
        header={"FROM OUR MENU"}
        subHeader={"Check it out"}
      ></SectionTitle>
      <div className="flex md:flex-row flex-col justify-center items-center ">
        <div className="p-28">
          <img src={featuredImg} alt="" />
        </div>
        <div className="pr-16">
            <p className="uppercase text-xl">March 20, 2023</p>
            <p className="uppercase text-2xl">WHERE CAN I GET SOME?</p>
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores magnam, blanditiis officia eos sapiente, beatae illum consequatur quaerat vel iusto ipsam voluptates quae praesentium earum magni dolorem ducimus reiciendis inventore?</p>
            <button className=" rounded-xl px-5 py-3 uppercase border-b-4 text-white mt-2 border-white hover:border-t-4">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
