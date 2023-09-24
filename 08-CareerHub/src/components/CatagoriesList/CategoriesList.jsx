import React from 'react';

const CategoriesList = () => {
    return (
        <div className='container mx-auto px-5 mb-10'>
            <h1 className='text-3xl font-semibold text-center'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex justify-between gap-5 my-10">
            <div className='bg-purple-50 drop-shadow-xl rounded-lg p-5 w-80 text-center'>
                <img src="https://i.ibb.co/dDfJQZK/accounts.png" alt="" className='mx-auto' />
                <h3>Account & Finance</h3>
                <p>300 Jobs Available</p>
            </div>
            <div className='bg-purple-50 drop-shadow-xl rounded-lg p-5 w-80 text-center'>
                <img src="https://i.ibb.co/1mZVtc7/creative.png" alt="" className='mx-auto' />
                <h3>Creative Design</h3>
                <p>100+ Jobs Available</p>
            </div>
            <div className='bg-purple-50 drop-shadow-xl rounded-lg p-5 w-80 text-center'>
                <img src="https://i.ibb.co/1mZVtc7/creative.png" alt="" className='mx-auto' />
                <h3>Account & Finance</h3>
                <p>300 Jobs Available</p>
            </div>
            <div className='bg-purple-50 drop-shadow-xl rounded-lg p-5 w-80 text-center'>
                <img src="https://i.ibb.co/1mZVtc7/creative.png" alt="" className='mx-auto' />
                <h3>Account & Finance</h3>
                <p>300 Jobs Available</p>
            </div>
            </div>
            
        </div>
    );
};

export default CategoriesList;