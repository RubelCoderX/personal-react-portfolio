import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../utility/localstorage';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // console.log(jobs)

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);


    const handleJobsFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(()=>{
        const storeJobsId = getStoredJobApplication();
        if(jobs.length > 0){

            const jobsApplied = [];
            for(const id of storeJobsId){
                const job = jobs.find(job =>job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(appliedJobs);
            setDisplayJobs(appliedJobs);
        }

    },[jobs])


    return (
        <div className='mt-40 container mx-auto'>
           <div className='text-center mb-32'>
                <h2 className='text-4xl font-bold'>Applied Jobs:{appliedJobs.length}</h2>
           </div>
           <details className='dropdown mb-32'>
              <summary className='m-1 btn'>open or close</summary>
              <ul className='p-2 cursor-pointer shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
                <li onClick={() => handleJobsFilter('all')}> <a>All</a> </li>
                <li onClick={() => handleJobsFilter('remote')}> <a>Remote</a> </li>
                <li onClick={() => handleJobsFilter('onsite')}> <a>Onsite</a> </li>
              </ul>
           </details>
           <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} {job.company_name}: {job.remote_or_onsite} </span>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;