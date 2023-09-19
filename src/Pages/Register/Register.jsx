import React from 'react'
import a3 from '../../../Casset/a3.svg';
import a4 from '../../../Casset/a4.svg';
import a2 from '../../../Casset/a2.svg';
import a1 from '../../../Casset/a1.svg';

const Register = () => {
  return (
    <div>
      <div>
      <div className='pt-40'>
      <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[1120px]'>
          <div className='h-auto sm:w-[550px] xl:w-[650px] m-auto shadow-2xl'>
              <div className='grid xl:grid-cols-1'>
                  <div className=''>
                      <p className='text-center mt-10 text-[35px] font-bold'>Register Now!</p>
                      <p className='text-[#525258] text-[17px] text-center mt-1'>You can signup with you social account below</p>
                      <div className='border my-7 w-9/12 m-auto flex hello'>
                          <img src={a3} className='ms-5'/>
                          <input  type='name' placeholder='Name' className='py-4 ms-2 w-full text-[16px] focus:outline-none'/>
                      </div>
                      <div className='border my-7 w-9/12 m-auto flex hello'>
                          <img src={a4} className='ms-5'/>
                          <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[16px] focus:outline-none'/>
                      </div>
                      <div className='border my-7 w-9/12 m-auto flex hello'>
                          <img src={a2} className='ms-5'/>
                          <input  type='password' placeholder='Password' className='py-4 ms-2 w-full text-[16px] focus:outline-none'/>
                          <img src={a1} className='me-5'/>
                      </div>
                      <div className='border my-7 w-9/12 m-auto flex hello'>
                          <img src={a2} className='ms-5'/>
                          <input  type='password' placeholder='Confirm Password' className='py-4 ms-2 w-full email1 text-[16px] focus:outline-none'/>
                          <img src={a1} className='me-5'/>
                      </div>
                      <button className='bg-custom-pink hover:bg-custom-font1 hover:duration-500 text-white text-[20px] m-auto flex mt-10 py-3 justify-center w-9/12' >Sign Up</button>
                      <p className='text-center mb-14 mt-6  text-[#525258] text-[14px]'>Already have an account?<span className='text-custom-pink'><a href='#'> Log in</a></span></p>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>
    </div>
  )
}

export default Register
