import React from 'react';


const categorys = [
    {id:1,name:'Account & Finance',job:'300 Jobs Available',image:'src/assets/icons/accounts.png'},
    {id:2,name:'Creative Design',job:'100+ Jobs Available',image:'src/assets/icons/creative.png'},
    {id:1,name:'Marketing & Sales',job:'150 Jobs Available',image:'src/assets/icons/marketing.png'},
    {id:1,name:'Engineering Job',job:'3224 Jobs Available',image:'src/assets/icons/chip.png'},
]

const Category = () => {
    return (
        <div className='lg:mx-12 px-4 py-32'>
          <div className='mb-20 text-center'>
            <h2 className='text-5xl font-bold mb-5'>Job Category List</h2>
            <p className='text-xl text-gray-400'>Explore thousands of job opportunities with all the information you need. Its your future</p>
          </div>
          {/* category card */}
          <div className=' container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 '>
            {
                categorys.map(category => <div key={category.id} className='bg-bgShade text-center border p-8 rounded-lg cursor-pointer hover:translate-y-4 transition-all duration-300 shadow-lg'>
                    <img src={category.image} alt="" className='p-4 mx-auto'/>
                    <h3 className='text-xl text-semibold p-2'>{category.name}</h3>
                    <p className='p-2 text-gray-400'>{category.job}</p>
                </div>)
            }
          </div>
        </div>
    );
};

export default Category;