import React from "react";

const Feedback = () => {
  return (
    <div className="p-5 mb-14">
      <h1 className="text-center font-extrabold text-4xl mt-14 mb-16">
        রেডএক্সের প্রতি গ্রাহকদের ভালোবাসা
      </h1>
      {/* slider here */}
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item w-full gap-5 flex-col lg:flex-row md:flex-col"
        >
          {/* card no1 */}
          <div className="border p-5">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/s5MFD5c/client-love1.webp"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
          <div className="border p-5">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/tb5zm44/client-love2.jpg"
                alt=""
                className="w-12"
              />
              <p>
                শূন্য অয়ন <br /> <p>দীঘল</p>
              </p>
            </div>
          </div>
          <div className="border p-5">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/yYw6LxH/client-love3.webp"
                alt=""
                className="w-12"
              />
              <p>
              লেলিন ঘোষ

 <br /> <p>আলফা কনজুমার ফুড</p>
              </p>
            </div>
          </div>
          <div className="border p-5">
            <img
              src="https://i.ibb.co/vV3j4pv/drop-red.png"
              alt=""
              className="mb-5"
            />
            <p>
              দ্রুত ডেলিভারি দিয়ে এবং পার্সেলের রিটার্ন রেট কমিয়ে এনে রেডএক্স
              আমাদের অনেক সাহায্য করেছে। নেক্সট ডে পেমেন্টে সুবিধার কারণে আমাদের
              ক্যাশ-ফ্লো স্বাভাবিক রাখা সম্ভব হয়েছে।
            </p>
            <div className="flex gap-3 mt-5">
              <img
                src="https://i.ibb.co/RQ74Fm7/client-love5.jpg"
                alt=""
                className="w-12"
              />
              <p>
                মোহাম্মদ গিয়াস উদ্দিন
                <br /> <p>কিডস ডায়পার</p>
              </p>
            </div>
          </div>
          {/* card no1 ses */}
        </div>
        {/* <div id="item2" className="carousel-item w-full">
            <img
              src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
              className="w-full"
            />
          </div> */}
      </div>
      {/* <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div> */}
    </div>
  );
};

export default Feedback;
