import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AiOutlineDollar,AiFillCalendar,AiOutlineMobile,AiFillMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job)
    // console.log(jobs)
    return (
        <div className='mt-40 container mx-auto'>
            
                <div className='text-center mb-32'>
                    <h2 className='text-4xl font-bold'>Job Details</h2>
                </div>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-64 sm:gap-20'>
                    <div className='w-10/12 mb-32 '>
                        <h4 className='tex-2xl mb-3 font-semibold'>Job Description :</h4>
                        <p className='text-gray-500'>{job.job_description}</p>
                        <h4 className='tex-2xl mb-3 font-semibold mt-2'>Job Responsibility:</h4>
                        <p className='text-gray-500'>{job.job_responsibility}</p>
                        <h4 className='tex-2xl mb-3 font-semibold mt-2'>Educational Requirements:</h4>
                        <p className='text-gray-500'>{job.educational_requirements}</p>
                        <h5 className='tex-2xl mb-3 font-semibold mt-2'>Experiences:</h5>
                        <p className='text-gray-500'>{job.experiences}</p>
                    </div>
                    <div className='bg-bgShade p-5 rounded shadow-lg w-10/12  mb-32'>
                        <h3 className='text-2xl font-semibold p-4'>Job Details</h3>
                        <hr />
                        <h4 className='flex text-xl items-center p-4'><AiOutlineDollar className='text-3xl text-primary mr-1'/>Salary:  <p className='text-gray-500 ml-1'>{job.salary}</p></h4>
                        <h4 className='flex text-xl items-center px-4'><AiFillCalendar className='text-3xl text-primary mr-1'/>Job Title:  <p className='text-gray-500 ml-1'>{job.job_title}</p></h4>
                        <h3 className='text-2xl font-semibold p-4'>Contact Information</h3>
                        <hr />
                        
                        <h4 className='flex text-xl items-center p-4'><AiOutlineMobile className='text-3xl text-primary mr-1'/>Phone : <p className='text-gray-500 ml-1'>{job.contact_information.phone}</p></h4>
                        <h4 className='flex text-xl items-center px-4'><AiFillMail className='text-3xl text-primary mr-1'/> Email: <p className='text-gray-500 ml-1'>{job.contact_information.email}</p></h4>
                        <h4 className='flex text-xl items-center p-4'><MdLocationOn className='text-3xl text-primary mr-1'/>Address: <p className='text-gray-500 ml-1'>{job.contact_information.address}</p> </h4>
                        <button className='btnPrimary w-full'>Apply Now</button>
                        
                    </div>
                   
                </div>
            
            
        </div>
    );
};

export default JobDetails;