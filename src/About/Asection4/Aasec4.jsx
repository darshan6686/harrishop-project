import React from 'react'
import './Asec4.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Aset_10 from '../../../Aassets/asset 10.jpeg'
import Aset_11 from '../../../Aassets/asset 11.jpeg'
import Aset_6 from '../../../Aassets/asset 6.jpeg'
import Aset_7 from '../../../Aassets/asset 7.jpeg'
import Aset_8 from '../../../Aassets/asset 8.jpeg'
import Aset_9 from '../../../Aassets/asset 9.jpeg'
import Aset_15 from '../../../Aassets/asset 15.png'
import Aset_16 from '../../../Aassets/asset 16.png'
import Aset_17 from '../../../Aassets/asset 17.png'
import Aset_18 from '../../../Aassets/asset 18.png'
import Aset_19 from '../../../Aassets/asset 19.png'
import Aset_12 from '../../../Aassets/asset 12.png'
import Aset_13 from '../../../Aassets/asset 13.png'
import Aset_14 from '../../../Aassets/asset 14.png'

const Aasec4 = () => {
  return (
    <>
        <div className='container-2xl w-full h-auto'>
            <div className='w-9/12 h-auto mx-auto mt-32'>
                <div className='flex justify-between items-end mb-14'>
                    <h1 className='text-7xl font-semibold'>Our <span className='text-custom-pink'>Team</span>, <br /> Many Talents</h1>
                    <a href='#' className='underline text-lg'>Join our Team</a>
                </div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        '@0.00': {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        '@0.75': {
                            slidesPerView: 2,
                            spaceBetween: 20,
                         },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        '@1.50': {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper pb-16"
                >
                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_10} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Leslie Alexander</h1> 
                        <p className='text-sm'>FOUNDER-CO</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_11} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Annette Black</h1> 
                        <p className='text-sm'>PRODUCT DESIGNER</p>
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_6} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Kathryn Murphy</h1> 
                        <p className='text-sm'>CREATIVE DIRECTOR</p>
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_7} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Guy Hawkins</h1> 
                        <p className='text-sm'>DEVLOPER</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_8} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Deli Yanky</h1> 
                        <p className='text-sm'>CONSULTING OFFICER</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_9} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Zin Denvar</h1> 
                        <p className='text-sm'>SALES MANAGER</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_10} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Leslie Alexander</h1> 
                        <p className='text-sm'>FOUNDER-CO</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_11} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Annette Black</h1> 
                        <p className='text-sm'>PRODUCT DESIGNER</p> 
                    </SwiperSlide>

                    <SwiperSlide className='block text-start group'>
                        <div className='overflow-hidden'>
                            <img src={Aset_6} alt='' className='group-hover:scale-105 group-hover:duration-300' />
                        </div>
                        <h1 className='text-[22px] font-bold mt-3 group-hover:text-custom-pink group-hover:duration-300'>Kathryn Murphy</h1> 
                        <p className='text-sm'>CREATIVE DIRECTOR</p> 
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>




    <div className='container-2xl w-full h-auto'>
        <div className='h-[200px] w-full mt-[100px] mb-[250px]'>
          <marquee direction="left" className="w-full">
            <img src={Aset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]'/>
            <img src={Aset_12} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_13} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
          </marquee>
          
          <marquee direction="right" behavior='alternate' className="w-full mb-[500px]">
            <img src={Aset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]'/>
            <img src={Aset_12} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_13} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_15} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_16} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_17} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_18} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_19} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px] h-[155px]'/>
            <img src={Aset_12} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_13} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
            <img src={Aset_14} className='inline-flex ms-[12px] border-[1px] rounded-[15px] py-[60px] px-[80px]'/>
          </marquee>
        </div>
    </div>
    </>
  )
}

export default Aasec4
