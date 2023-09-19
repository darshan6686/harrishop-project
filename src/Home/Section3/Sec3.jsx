import React from 'react'
import aset_94 from '../../../assets/asset 94.svg';
import aset_102 from '../../../assets/asset 102.svg';
import aset_103 from '../../../assets/asset 103.svg';
import aset_104 from '../../../assets/asset 104.svg';
import aset_105 from '../../../assets/asset 105.svg';
import asset_88 from '../../../assets/asset 88.jpeg';
import './Sec3.css';

const Sec3 = () => {
  return (
    <section>
      <div>
        <div className='container-2xl w-full h-auto p-20 mt-[800px] 2xl:mt-[530px]'>
          <div className='h-[470px] w-full lg:w-11/12 mx-auto bg-cover' style={{backgroundImage: `url("${asset_88}")`, backgroundSize:"cover"}}><br/>
            <div className='mt-24 ms-[80px] max-w-[390px] absolute'>
              <p className='text-[#525258] text-[15px] leading-[26px]'>Apple iPhone 12 Pro</p>
              <a className='hover:text-custom-pink hover:duration-700 text-custom-font1 text-[44px] leading-[47.96px] font-[sans-serif] font-bold' href="#">The wait is on: iphone 12 max pro</a>
              <p className='text-[#525258] text-lg font-sans leading-[16px] mt-5'>Last call for up to <span className='text-black text-[24px] leading-[17px] font-sans font-bold'>32%</span> off!</p>
              <button className='bg-white text-[14px] leading-[26px] tracking-[-0.28px] px-7 py-3 mt-8 flex hover:bg-custom-pink hover:text-white hover:duration-700 shadow-sm'>Buy Now<img src={aset_94}  alt='Not Show' className="mt-[7px] ms-1 hover:text-white" /></button>
            </div>
          </div>

          <div className='w-full mt-20 h-auto flex justify-center gap-7 items-center px-28 py-5'>
                <div className='flex items-center justify-between'>
                  <div className='border rounded-full p-4'>
                    <img src={aset_102} alt='not show' className='w-6 h-6 ii-1'/>
                  </div>
                  <div className='ml-5'>
                    <h1 className='font-sans text-custom-font1 text-xl font-medium'>Free Shipping</h1>
                    <p className='text-medium text-custom-font w-3/4 leading-5 mt-1'>Free Shipping for orders over $120</p>
                  </div>
                </div>


                <div className='flex items-center justify-between'>
                  <div className='border rounded-full p-4'>
                    <img src={aset_103} alt='not show' className='w-6 h-6 ii-1'/>
                  </div>
                  <div className='ml-5'>
                    <h1 className='font-sans text-custom-font1 text-xl font-medium'>Refund</h1>
                    <p className='text-medium text-custom-font w-3/4 leading-5 mt-1'>Within 30 days for an
                    exchange.</p>
                  </div>
                </div>


                <div className='flex items-center justify-between'>
                  <div className='border rounded-full p-4'>
                    <img src={aset_104} alt='not show' className='w-6 h-6 ii-1'/>
                  </div>
                  <div className='ml-5'>
                    <h1 className='font-sans text-custom-font1 text-xl font-medium'>Support</h1>
                    <p className='text-medium text-custom-font w-3/4 leading-5 mt-1'>24 Hours a day, 7 Days week</p>
                  </div>
                </div>


                <div className='flex items-center justify-between'>
                  <div className='border rounded-full p-4'>
                    <img src={aset_105} alt='not show' className='w-6 h-6 ii-1'/>
                  </div>
                  <div className='ml-5'>
                    <h1 className='font-sans text-custom-font1 text-xl font-medium'>Payment</h1>
                    <p className='text-medium text-custom-font w-3/4 leading-5 mt-1'>Pay with Multiple Credit Cards</p>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Sec3