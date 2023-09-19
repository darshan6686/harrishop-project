import React from 'react'
import { Link } from 'react-router-dom'
import error from '../../../assets/error.svg'

const Error = () => {
  return (
    <div className='container-2xl text-center pt-16'>
      <div className='flex justify-center'>
          <img src={error} className='w-[636px] h-[572px]' />
      </div>
      <h1 className='text-5xl font-bold mt-8'>Oops! Page not found</h1>
      <p className='text-custom-font text-lg mt-5'>Whoops, this is embarassing. Looks like the page you were <br /> looking for was not found.</p>
      <Link to='/' className='flex justify-center'><button class="bg-custom-pink text-white hover:bg-black hover:duration-500 font-bold px-10 py-3 mt-9 mb-16">Back to Home</button></Link>
    </div>
  )
}

export default Error
