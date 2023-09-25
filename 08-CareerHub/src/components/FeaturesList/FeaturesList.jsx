import React, { useEffect, useState } from 'react';
import Job from './Job';
 

const FeaturesList = () => {
    const  [jobs, setJob] = useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJob(data))
    }, [])
    return (
        <div className='container mx-auto px-5 mb-10'>
        <h1 className='text-3xl font-semibold text-center'>Featured Jobs {jobs.length}</h1>
        <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
       <div className='grid grid-cols-2 gap-5 my-10'>
       {
        jobs?.map(job=> <Job job={job} key={job.id}/>)
       }
       </div>
    </div>
    );
};

export default FeaturesList;