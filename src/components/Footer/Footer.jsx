import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";
const Footer = () => {
    return (
        <div className='  bg-footerColor p-10'>
            <div className='container mx-auto'>
                <div className='flex items-center'>
                    
                    <div className='mr-20'>
                            <h2 className='text-4xl font-semibold text-white mb-3'>CareerHub</h2>
                            <p className='text-xl text-gray-400  mb-3'>There are many variations of passages of Lorem Ipsum ,
                            <br />    
                            but the majority have suffered alteration in some form.</p>
                           <div className='flex'>
                            <a className='p-3 text-white' href=""><FaFacebook  className='text-5xl' /></a>
                            <a className='p-3 text-white' href=""><IoLogoInstagram className='text-5xl'  /></a>
                            <a className='p-3 text-white' href=""><AiFillTwitterCircle className='text-5xl' /></a>
                           </div>
                    </div>
                    
                    
                    
                    
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-20'>
                        <div className='mr-10'>
                            <h2 className='text-2xl font-semibold text-white'>Company</h2>
                            <a className='block text-xl text-gray-400 py-2' href="/">About Us</a>
                            <a className='block text-xl text-gray-400' href="/">Work</a>
                            <a className='block text-xl text-gray-400 py-2' href="/">Latest News</a>
                            <a className='block text-xl text-gray-400' href="/">Careers</a>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-white'>Product</h2>
                            <a className='block text-xl text-gray-400 py-2' href="/">Prototype</a>
                            <a className='block text-xl text-gray-400' href="/">Plans & Pricing</a>
                            <a className='block text-xl text-gray-400 py-2' href="/">Customers</a>
                            <a className='block text-xl text-gray-400' href="/">Integrations</a>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-white'>Support</h2>
                            <a className='block text-xl text-gray-400 py-2' href="/">Help Desk</a>
                            <a className='block text-xl text-gray-400' href="/">Sales</a>
                            <a className='block text-xl text-gray-400 py-2' href="/">Become a Partner</a>
                            <a className='block text-xl text-gray-400' href="/">Developers</a>
                        </div>
                        <div>
                            <h2 className='text-2xl font-semibold text-white'>Contact</h2>
                            <a className='block text-xl text-gray-400 py-2' href="/">524 Broadway , NYC</a>
                            <a className='block text-xl text-gray-400' href="/">+1777-978-5570</a>
                        
                        </div>
                </div>
            </div>
            <br />
            <br />
            <hr className='text-gray-400' />
             <br />
             <div className='flex justify-between items-center mb-20'>
                <p className='text-gray-400'>@2023 CareerHub. All Rights Reserved</p>
                <p className='text-gray-400'>Powered by CareerHub</p>
             </div>
        </div>
    </div>
    );
};

export default Footer;