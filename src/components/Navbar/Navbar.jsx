import React, { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // toggole menu btn
    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    // function for making navbar sticky when scrolling
        useEffect(() =>{
            const handleScroll =()=>{
                if(window.scrollY>0){
                    setIsSticky(true);
                }
            };
            window.addEventListener("scroll",handleScroll);
        })

    return (
        <header className='container mx-auto fixed left-0 top-0 right-0'>
            <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? "sticky top-0 right-0 left-0 bg-white":""}`}>
                <div className='flex justify-between items-center '>
                        <div className=''>
                        <h2 className='text-4xl font-semibold'>Portfolio</h2>
                        </div>
                        <div className='lg:flex items-center text-lg gap-3 hidden'>
                            <a href="/" className='block cursor-pointer px-4 text-primary  hover:text-gray-400'>Statistics</a>
                            <a href="/"  className='block cursor-pointer px-4 hover:text-gray-400'>Applied Jobs</a>
                            <a href="/"  className='block cursor-pointer px-4 hover:text-gray-400'>Blog</a>
                        </div>
                         {/* btn for large device */}
                        <div className='lg:block hidden'>
                            <button className='outlineBtn'>Star Applying</button>
                        </div>
                        {/* menu btn for mobile device */}
                        <button onClick={toggleMenu} className='lg:hidden text-3xl'>
                            <HiMenu></HiMenu>
                        </button>
                </div>
                {/* menu items for small devices */}

                {
                    isMenuOpen && <div className='mt-4 bg-body text-white rounded-lg p-4'>
                            <a href="/" className='block cursor-pointer px-4 hover:text-gray-400'>Statistics</a>
                            <a href="/"  className='block cursor-pointer px-4 hover:text-gray-400'>Applied Jobs</a>
                            <a href="/"  className='block cursor-pointer px-4 hover:text-gray-400'>Blog</a>
                    </div>
                }
            </nav>
        </header>
    );
};

export default Navbar;