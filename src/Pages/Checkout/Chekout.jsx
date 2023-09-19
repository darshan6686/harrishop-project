import React from 'react'
import a3 from '../../../Casset/a3.svg';
import a2 from '../../../Casset/a2.svg';
import a1 from '../../../Casset/a1.svg';

const Chekout = () => {
  return (
    <>
    <div className='pt-40'>
    <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[1120px]'>
        <div className='h-auto sm:w-[550px] xl:w-[650px] m-auto shadow-2xl'>
            <div className='grid xl:grid-cols-1'>
                <div className=''>
                    <p className='text-center mt-10 text-[35px] font-bold'>Hello Again</p>
                    <p className='text-[#525258] text-[17px] text-center mt-1'>Enter your credentials to acces your account.</p>
                    <div className='border-2 mt-7 w-9/12 mx-auto m-auto flex hello'>
                        <img src={a3} className='ms-5'/>
                        <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[16px]'/>
                    </div>
                    <div className='border-2 mt-7 w-9/12 mx-auto m-auto flex hello'>
                        <img src={a2} className='ms-5'/>
                        <input  type='password' placeholder='Password' className='py-4 ms-2 w-full email1 text-[16px]'/>
                        <img src={a1} className='me-5'/>
                    </div>
                    <div className='flex justify-between m-auto w-9/12 mx-auto mt-5'>
                        <div className='flex'>
                            <input type='checkbox'></input>
                            <p className='ms-2 text-custom-font text-[17px]'>Remember me</p>
                        </div>
                        <div>
                            <a href='#'><p className='text-custom-font1 text-[16px] hover:text-custom-pink hover:duration-500'>Forgot Password?</p></a>
                        </div>
                    </div>
                    <button className='bg-custom-pink text-white text-[20px] m-auto flex mt-7 justify-center py-4 w-9/12' >Sign In</button>
                    <p className='text-center mt-5 my-12 text-custom-font text-[16px]'>Don't have an account? <span className='text-custom-pink'><a href='#'>Register Now</a></span></p>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Chekout