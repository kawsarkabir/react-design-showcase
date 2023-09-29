import React from 'react';

const Partnar = () => {
    return (
        <div className=" bg-black">
            <div className=' full-website grid lg:grid-cols-2 grid-cols-1 gap-5 p-5 md:grid-cols-2 py-14 mb-10 justify-items-center items-center'>
            <div className='leading-7 text-white text-center lg:text-left md:text-left'>
                <h1 className='font-bold text-4xl'>রেডএক্সের পার্টনার হোন আজই</h1>
                <p className='font-bold'>সাইন-আপ করুন করুন মাত্র দুই মিনিটে</p>
            </div>
            <div>
                <button className='bg-red-600 px-10 border-none btn hover:bg-black hover:text-red-600 text-white font-bold'>সাইন-আপ করুন</button>
            </div>
        </div>
        </div>
    );
};

export default Partnar;