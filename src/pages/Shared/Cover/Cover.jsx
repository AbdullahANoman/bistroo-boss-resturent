import {  Parallax } from "react-parallax";

const Cover = ({ img,title,message }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        style={{ height: "600px" }}
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className=" ">
          <div className=" hero mt-[150px] h-[300px] w-[900px] mx-auto">
            <div className="hero-overlay bg-opacity-50 bg-black"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-6xl font-semibold uppercase">{title}</h1>
                <p className="mb-5 uppercase">
                  {message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
