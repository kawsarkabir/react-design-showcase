import React from 'react';

const SingleChooseItem = ({chooseItems}) => {
    return (
        <div>
            <img className='max-w-full mx-auto' src={chooseItems.image} alt="" />
            <h1 className='font-bold text-xl my-2'>{chooseItems.title}</h1>
            <p>{chooseItems.description}</p>
        </div>
    );
};

export default SingleChooseItem;