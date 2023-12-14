import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';


const Feature = () => {
    const[jobs, setJobs] = useState([]);
    const[dataLength,setDataLength] = useState([4])

    useEffect(() =>{
        fetch('jobs.json')
        .then(res =>res.json())
        .then(data =>setJobs(data))
    },[])
    return (
        <div className='lg:mx-12 mx-4 my-32'>
            <div className='mb-20 text-center'>
                <h2 className='text-4xl font-bold mb-5'>Featured Jobs</h2>
                <p className='text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            {/* features card */}
            <div className=' container mx-auto grid lg:grid-cols-2 md:grid-cols-1 gap-6'>
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            {/* btn for see all */}
            <div  className={dataLength === jobs.length ? 'hidden' : ""}>
                <div className='container mx-auto text-center mt-16'>
                      <button onClick={() => setDataLength(jobs.length)} className='btnPrimary'>See all Jobs</button>
                </div>
                   
            </div>
        </div>
    );
};

export default Feature;