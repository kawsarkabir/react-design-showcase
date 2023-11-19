const Cover = ({ img, title, peragraph }) => {
  return (
    <div>
      <div>
        <div
          className="hero h-[70vh]"
          style={{
            backgroundImage: `${img}`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">
                 {peragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
