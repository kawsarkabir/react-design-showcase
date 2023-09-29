import React from 'react';

const Brand = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center items-center lg:grid-cols-8 md:grid-cols-4 gap-5 my-20 full-website px-5'>
           <div><h1 className='text-gray-400'>TOP ENTERPRISES</h1></div>
           <div> <img src="https://i.ibb.co/JRW22zW/bata-grey.png" alt="" /></div>
           <div><img src="https://i.ibb.co/0D0xFMb/rangs-group-grey.png" alt="" /></div>
           <div><img src="https://i.ibb.co/XtQjCTx/lotto-grey.png" alt="" /></div>
           <div><h1 className='text-gray-400'>TOP SMES</h1></div>
           <div><img src="https://i.ibb.co/kcYbx1z/daraz.png" alt="" /></div>
           <div><img src="https://i.ibb.co/VjMN0Nw/ajkerdeal.png" alt="" /></div>
           <div> <img src="https://i.ibb.co/jgXC2cZ/othoba.png" alt="" /></div>
        </div>
    );
};

export default Brand;