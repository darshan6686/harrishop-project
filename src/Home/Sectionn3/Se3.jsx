import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Se3 = () => {

  return (
    <div className='container-2xl h-auto mx-auto mt-36'>
    <div className='flex-none sm:flex justify-between w-11/12 2xl:w-10/12 mx-auto'>
        <div className=''>
            <h1 className='font-bold border-0 border-custom-pink border-l-4 text-4xl pl-5'>Popular Product</h1>
        </div>
            <div className='mt-7 sm:mt-0 group'>
                <Link to='/' className='me-6 group-open:text-custom-pink'>Top Rated</Link>
                <Link to='Bestselling' className='me-6 group-open:text-custom-pink'>Best Selling</Link>
                <Link to='Latestproduct' className='group-open:text-custom-pink'>Latest Product</Link>
            </div>
            </div>
            <Outlet />
     </div>
  )
}

export default Se3