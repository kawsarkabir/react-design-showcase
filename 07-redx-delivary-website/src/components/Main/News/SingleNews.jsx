import React from 'react';

const SingleNews = ({singleNews}) => {
    return (
        <div>
            <div className='border p-5'>
                <img className='w-52' src={singleNews.image} alt="" />
                <p className='mt-2'>{singleNews.news_date}</p>
                <h1 className='text-xl font-semibold'>{singleNews.title}</h1>
            </div>
        </div>
    );
};

export default SingleNews;