import React from 'react'
import a4 from '../../../Casset/a4.svg';

const Forget = () => {
  return (
   <>
   <div className='container-2xl pt-40'>
   <div className='sm:max-w-[550px] sm:m-auto xl:max-w-[1120px]'>
   <div className='h-auto sm:w-[550px] xl:w-[650px] m-auto shadow-2xl'>
       <div className='grid xl:grid-cols-1'>
           <div className=''>
               <p className='text-center mt-10 text-[35px] font-bold'>Forget Password ?</p>
               <p className='text-[#525258] text-[17px] text-center mt-1'>Enter your email address to request password reset.</p>
               <div className='border mt-7 w-9/12 mx-auto m-auto flex hello'>
                   <img src={a4} className='ms-5'/>
                   <input  type='email' placeholder='Enter your email' className='py-4 ms-2 w-full email1 text-[16px]'/>
               </div>
              
               <button className='bg-custom-pink hover:bg-custom-font1 hover:duration-500 text-white text-[20px] m-auto flex mt-7 justify-center py-4 w-9/12' >Send Request</button>
               <p className='text-center mt-5 mb-16 text-[#525258] text-[16px]'>Remember your password ? <span className='text-[#ff1492]'><a href='#'>Login</a></span></p>
           </div>
       </div>
   </div>
</div>
</div>
   </>
  )
}

export default Forget
