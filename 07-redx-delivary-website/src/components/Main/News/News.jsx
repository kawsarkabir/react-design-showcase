import  { useEffect, useState } from 'react';
import SingleNews from './SingleNews';

const News = () => {
    const [news, setNews] = useState([])
    useEffect(()=>{
        fetch('news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
    },[])
    return (
        <div className='full-website'>
            <div className='my-20'>
            <h1 className='text-center text-4xl font-extrabold'>মিডিয়াতে রেডএক্স</h1>
            <div className='grid lg:grid-cols-3 gap-5 grid-cols-1 md:grid-cols-2 p-5 '>
            {
                news.map(singleNews=> <SingleNews singleNews={singleNews} key={singleNews.id}/>)
            }
            </div>
            </div>
        </div>
    );
};

export default News;