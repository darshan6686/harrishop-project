import React from 'react'
import faqs from '../../../Casset/faq-img-2.jpg'
import { Link, Outlet } from "react-router-dom";

const Faqs = () => {
  return (
    <>
    <div className='container-2xl w-full h-auto mx-auto'>
      <h1 className='text-center text-5xl font-bold pt-48'>Frequently Asked Questions</h1>
      <h1 className='text-center font-semibold mt-4 text-custom-font'><a href='' className='text-custom-font1 hover:text-custom-pink hover:duration-500'>Home</a> .  Frequently Asked Questions</h1>

      <img src={faqs} className='mx-auto w-full h-full px-5 md:px-20 xl:px-36 2xl:px-48 mt-16' />

      <div className='w-full md:w-9/12 h-auto mx-auto flex border-0 border-b-2 mt-32 text-lg'>
        <Link to='Question' className='p-7' style={{color: "black", textDecoration: "none"}}>General Questions</Link>
        <Link to='Communti' className='p-7' style={{color: "black", textDecoration: "none"}}>Community</Link>
        <Link to='Support' className='p-7' style={{color: "black", textDecoration: "none"}}>Support</Link>
      </div>
      <Outlet />
    </div>

    </>
  )
}

export default Faqs