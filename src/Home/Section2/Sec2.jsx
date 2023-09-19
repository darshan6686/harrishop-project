import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import './Sec2.css'
import asset_7 from '../../../assets/asset 7.jpeg';
import asset_10 from '../../../assets/asset 10.jpeg';
import asset_8 from '../../../assets/asset 8.jpeg';
import asset_5 from '../../../assets/asset 5.jpeg';
import asset_85 from '../../../assets/asset 85.jpeg';
import asset_6 from '../../../assets/asset 6.jpeg';
import asset_4 from '../../../assets/asset 4.jpeg';

const Section2 = () => {
  return (
    <div className='container-2xl w-full h-auto mx-auto mt-24'>
        <div className='w-full lg:w-10/12 h-auto mx-auto'>
        <Swiper className="mySwiper my-10 border-0 border-b-2">
        <SwiperSlide className='flex justify-center gap-7'>
            <div className='border-0 py-7'>
                <img src={asset_4} className='imgg' />
                <p className='mt-5'>Computer Moniter & Laptop</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_5} className='imgg' />
                <p className='mt-5'>Exercise Bike & Shaver Clean</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_6} className='imgg' />
                <p className='mt-5'>Spinning Reel & Kettle</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_7} className='imgg' />
                <p className='mt-5'>Camera Bluetooth & Headset</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex justify-between '>
            <div className='border-0 py-7'>
                <img src={asset_8} className='imgg' />
                <p className='mt-5'>Ipad Phone & Tablets</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_85} className='imgg' />
                <p className='mt-5'>Planer & Virtual</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_10} className='imgg' />
                <p className='mt-5'>Wireless & Watches</p>
            </div>
            <div className='border-0 py-7'>
                <img src={asset_4} className='imgg' />
                <p className='mt-5'>Computer Moniter & Laptop</p>
            </div>
        </SwiperSlide>
        
    </Swiper>
        </div>
    </div>
  )
}

export default Section2