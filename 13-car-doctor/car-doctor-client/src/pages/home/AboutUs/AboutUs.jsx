const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20 px-4">
      <div className="hero">
        <div className="flex flex-col lg:flex-row gap-10">
          <div>
            <img
              src="https://i.ibb.co/DLxQ1QY/person.jpg"
              className="max-w-lg rounded-lg ml-5"
            />
            <img
              src="https://i.ibb.co/mbNkNj3/parts.jpg"
              className="max-w-sm rounded-md relative bottom-44 left-52 border-8 border-white"
            />
          </div>
          <div className="lg:ml-20 lg:w-1/2 w-full">
          <h1 className="text-[#FF3811] font-semibold text-xl"> About us</h1>
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable.
            </p>
            <p>
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which dont look even slightly
              believable.
            </p>
            <button className="btn border-none bg-[#FF3811] text-white mt-5">
              Get More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
