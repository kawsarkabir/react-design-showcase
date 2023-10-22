const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src="https://i.ibb.co/6Hf9T9S/4.jpg"
            className="h-[90vh] rounded-lg w-full"
          />
          <div className="absolute flex items-center h-full flex-col text-white justify-center w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <h1 className="text-5xl ml-10 font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="my-4 ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="-ml-52">
              <button className="btn bg-[#FF3811] text-white border-none mr-10">
                Discover more
              </button>
              <button className="btn btn-outline bg-transparent text-white">
                Latest project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-32 bottom-10">
            <a href="#slide4" className="btn btn-circle mr-10">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/jJ0Gtn7/2.jpg"
            className="w-full h-[90vh] rounded-lg"
          />
          <div className="absolute flex items-center h-full flex-col text-white justify-center w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <h1 className="text-5xl ml-10 font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="my-4 ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="-ml-52">
              <button className="btn bg-[#FF3811] text-white border-none mr-10">
                Discover more
              </button>
              <button className="btn btn-outline bg-transparent text-white">
                Latest project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-32 bottom-10">
            <a href="#slide1" className="btn btn-circle mr-10">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3s5M8D3/3.jpg"
            className="w-full h-[90vh] rounded-lg"
          />
          <div className="absolute flex items-center h-full flex-col text-white justify-center w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <h1 className="text-5xl ml-10 font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="my-4 ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="-ml-52">
              <button className="btn bg-[#FF3811] text-white border-none mr-10">
                Discover more
              </button>
              <button className="btn btn-outline bg-transparent text-white">
                Latest project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-32 bottom-10">
            <a href="#slide2" className="btn btn-circle mr-10">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/yQ4YdB3/1.jpg"
            className="w-full h-[90vh] rounded-lg"
          />
          <div className="absolute flex items-center h-full flex-col text-white justify-center w-1/2  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
            <h1 className="text-5xl ml-10 font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="my-4 ml-10">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="-ml-52">
              <button className="btn bg-[#FF3811] text-white border-none mr-10">
                Discover more
              </button>
              <button className="btn btn-outline bg-transparent text-white">
                Latest project
              </button>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 right-32 bottom-10">
            <a href="#slide3" className="btn btn-circle mr-10">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
