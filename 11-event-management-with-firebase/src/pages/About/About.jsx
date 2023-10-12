import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div>
      <div className="details-card-banner ">
        <div className="flex relative top-32 lg:max-w-screen-xl mx-auto px-5">
          <p
            className=" text-white
             text-4xl font-bold"
          >
            About Us
          </p>
          <h1 className="tryphography hidden lg:block">ABOUT US</h1>
        </div>
      </div>
      <div className="lg:max-w-screen-xl mx-auto">
        <h1 className="tryphography text-white relative hidden lg:block">
          ABOUT US
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5 px-3">
          <div className="col-span-3 mt-5 justify-between flex-col lg:flex-row">
            <div className="flex items-center justify-between lg:flex-row flex-col">
              <div className="lg:w-8/12">
                <p className="color-primary text-xl font-bold">About EventLa</p>
                <h1 className="text-4xl font-bold my-2">
                  Sed Malesuada Massa Lacinia, Dictum Dui A,Dignissim .
                </h1>
                <p className="leading-7 my-5">
                  Cras semper, massa vel aliquam luctus, eros odio tempor
                  turpis, ac placerat metus tortor eget magna. Donec mattis
                  posuere pharetra. Donec vestibulum ornare velit ut
                  sollicitudin. Pellentesque in faucibus purus.
                </p>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/jM9rRjk/a-mini2.png"
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="flex justify-between flex-col lg:flex-row">
              <div className="flex flex-col lg:flex-row lg:justify-between items-center space-x-20 justify-center">
                <div className="flex items-center gap-x-4 justify-center">
                  <img src="https://i.ibb.co/SrC4b3y/speaker-sm.png" alt="" />
                  <div>
                    <h1 className="text-4xl font-bold">100+</h1>
                    <h2 className="text-2xl font-semibold">Speaker</h2>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <img src="https://i.ibb.co/G29wwkY/sed-sm.png" alt="" />
                  <div>
                    <h1 className="text-4xl font-bold">400+</h1>
                    <h2 className="text-2xl font-semibold">Event</h2>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <img src="https://i.ibb.co/MfJW8GL/event-sm.png" alt="" />
                  <div>
                    <h1 className="text-4xl font-bold">100+</h1>
                    <h2 className="text-2xl font-semibold">Shedule</h2>
                  </div>
                </div>
              </div>
              <div>
                <img src="https://i.ibb.co/jM9rRjk/a-mini2.png" alt="" />
              </div>
            </div>
            <button className="book-now-btn my-5">Read More</button>
          </div>
          <div className="hidden lg:block">
            <div className="absolute">
            <img src="https://i.ibb.co/V93wXYp/a-mini-video.png" className="w-full mt-10" alt="" />
            </div>
            <p className="relative flex justify-center items-center top-48 right-4"><img src="https://i.ibb.co/48nDj9q/play-btn.png"  alt="" /></p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
