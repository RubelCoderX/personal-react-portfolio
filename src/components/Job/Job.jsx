import React from 'react';
import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const Job = ({job}) => {
    const {id, logo, job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className=' bg-bgShade shadow-lg p-10 rounded'>
            <img src={logo} alt=""/>
            <div className='mt-4'>
                <h2 className='text-2xl text-semibold'>{job_title}</h2>
                <p className='text-gray-400 mt-2'>{company_name}</p>
            </div>
            <div className='flex items-center gap-5 mt-4'>
                <button className='btnFeature'>{remote_or_onsite}</button>
                <button className='btnFeature'>{job_type}</button>
            </div>
            <div className='flex items-center'>
                <h4 className='flex mt-4 mr-5 text-gray-400'><MdLocationOn className='text-2xl'></MdLocationOn>{location}</h4>
                <p className='flex mt-4 text-gray-400'><AiOutlineDollar className='text-2xl'></AiOutlineDollar>{salary}</p>
            </div>
            <div className='mt-10'>
                <button className='btnPrimary'>View Details</button>
            </div>
        </div>
    );
};

export default Job;