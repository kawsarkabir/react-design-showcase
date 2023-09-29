import React, { useEffect, useState } from 'react';
import SingleChooseItem from './SingleChooseItem';

const WhyChooseRedx = () => {
    const [whyChooseRedx, setWhyChooseRedx] = useState([])
    useEffect(()=>{
        fetch('whyChooseRedx.json')
        .then(res=>res.json())
        .then(data=>setWhyChooseRedx(data))
    },[])
    return (
        <div className='my-28'>
              <h1 className="text-center font-extrabold text-4xl mt-14 mb-16">আপনার লজিস্টিক পার্টনার হিসেবে REDX বেছে নিন</h1>
            <div className="full-website grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-8 mt-10 px-5 text-center">
                {
                    whyChooseRedx.map(chooseItems=> <SingleChooseItem key={chooseItems.id} chooseItems={chooseItems}/>)
                }
            </div>
        </div>
    );
};

export default WhyChooseRedx;