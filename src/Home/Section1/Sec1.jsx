import React from 'react'
import './Sec1.css'
import asset_3 from '../../../assets/asset 3.png';
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <div>
      <section>
        <div className='container-2xl bg-custom-sky flex-none md:flex lg:items-center justify-start pt-5 h-auto xl:h-[96vh] relative'>
            <div className='w-full md:w-1/2 h-auto ml-20 2xl:ml-48 mt-32 ld:mt-0'>
                <h1 className='text-custom-font text-lg border-0 border-custom-pink border-l-2 pl-5'>Best Ear <br /> Headphones</h1>
                <h1 className='text-5xl xl:text-7xl text-custom-font1 font-bold mt-3'>Music To <br /> Fill Your Heart</h1>
                <Link to='/Shop' className='px-9 py-2 border-2 border-custom-font1 hover:bg-custom-font1 hover:text-white hover:duration-500'>Shop Now <i className="fa-solid fa-arrow-right mt-14"></i></Link>
            </div>

            <div className='w-1/2 h-auto mt-8 md:mt-24 lg:mt-16 xl:mt-28 mx-auto'>
                <div className='rounded-full bg-white z-10 md-4 md:ml-12 lg:ml-6 circle w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[400px] xl:h-[400px] 2xl:w-[530px] 2xl:h-[530px]'></div>
                <img src={asset_3} className='bottom-0 absolute h-auto w-[25%]'/>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Section1
