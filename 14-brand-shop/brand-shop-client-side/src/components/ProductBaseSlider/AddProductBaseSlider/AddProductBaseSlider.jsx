import Swal from "sweetalert2";

const AddProductBaseSlider = () => {
  const handleAddProductSlider = (e) => {
    e.preventDefault();
    const form = e.target;
    const brandName = form.brandName.value;
    const sliderURL = form.sliderURL.value;
    const sliderTitle = form.sliderTitle.value;
    const sliderDecs = form.sliderDecs.value;
    const slider = {
      brandName,
      sliderURL,
      sliderTitle,
      sliderDecs

    };
    console.log(slider);
    fetch("https://brand-shop-server-one-bice.vercel.app/productbaseslider", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(slider),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire("Good job!", "Your Brand Slider Added Successfully!", "success");
      });
  };
  return (
    <div className=" bg-[#F4F3F0] p-20">
      <h1 className=" mb-8 lg:text-4xl shadow-sky-950 text-center font-bold">
        Add New Brand Base Slider
      </h1>
      <div className="justify-center flex">
        <form onSubmit={handleAddProductSlider}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10  ">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Brand</span>
              </label>
              <select
                name="brandName"
                className="select select-bordered join-item"
              >
                <option disabled selected>
                  Filter
                </option>
                <option>Apple</option>
                <option>Samsung</option>
                <option>Sony</option>
                <option>Google</option>
                <option>Intel</option>
                <option>Nokia</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Slider Photo</span>
              </label>
              <label className="input-group">
                <input
                  name="sliderURL"
                  type="text"
                  placeholder="Enter slider URL"
                  className="input input-bordered  "
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Slider title</span>
              </label>
              <label className="input-group">
                <input
                  name="sliderTitle"
                  type="text"
                  placeholder="Enter slidder title"
                  className="input input-bordered  "
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Slider Decs</span>
              </label>
              <label className="input-group">
                <input
                  name="sliderDecs"
                  type="text"
                  placeholder="Enter slider Decs"
                  className="input input-bordered  "
                />
              </label>
            </div>
          </div>

          <button className="btn bg-[#FFBB38] w-full mt-10">Add Slider</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductBaseSlider;
