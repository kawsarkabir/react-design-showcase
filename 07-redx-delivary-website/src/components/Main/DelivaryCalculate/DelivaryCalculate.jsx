import React from "react";
import Modal from "./Modal";

const DelivaryCalculate = () => {
    const handleModalClick=()=>{
        document.getElementById('my_modal').showModal()
    }
  return (
    <div className="full-website flex justify-center items-center my-20 px-5">
      <div>
        <div className="text-center">
          <h1 className=" font-extrabold text-4xl my-3">
            ডেলিভারি ক্যালকুলেটর
          </h1>
          <p className="mt-5">
            আপনার শিপমেন্টের সুবিধার জন্য আগে থেকেই আপনার ডেলিভারী চার্জ
            সম্পর্কে ধারণা নিন
          </p>
        </div>
        {/* form start here */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5 mt-10 justify-items-center">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">
                পণ্যের ওজন ( সর্বোচ্চ 10 কেজি )
              </span>
            </label>
            <input
              type="text"
              placeholder="পণ্যের ওজন লিখুন"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">পণ্যের বিক্রয়মূল্য</span>
            </label>
            <input
              type="text"
              placeholder="পণ্যের বিক্রয়মূল্য লিখুন"
              className="focus:outline-none input input-bordered w-full max-w-xs"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">পিক-আপ এলাকা</span>
            </label>
            <select className="select select-bordered text-gray-400 font-normal">
              <option disabled selected>
                পিক-আপ এলাকা লিখুন
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">ডেলিভারি এলাকা</span>
            </label>
            <select className="select select-bordered text-gray-400 font-normal">
              <option disabled selected>
                ডেলিভারি এলাকা লিখুন
              </option>
              <option>Star Wars</option>
              <option>Harry Potter</option>
              <option>Lord of the Rings</option>
              <option>Planet of the Apes</option>
              <option>Star Trek</option>
            </select>
          </div>
        </div>
        {/* form end here */}
        <div className="text-center mt-10">
          <button className="btn btn-error bg-red-600 border-none px-10 text-white mb-5">
            ডেলিভারি চার্জ দেখুন
          </button>
          <p>
            আপনি কি জানতে চান, যেকোনো লোকেশনে আপনার পার্সেল পাঠাতে কত খরচ হতে
            পারে ?
          </p>
          <span>
            আমাদের বিস্তারিত
            <button onClick={handleModalClick} className="ml-2 text-red-600 font-bold">লিস্টটি দেখুন।</button>
            <Modal/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DelivaryCalculate;
