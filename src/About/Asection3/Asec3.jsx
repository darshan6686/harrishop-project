import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Asec3.css';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';
import Aaset_4 from '../../../Aassets/asset 4.jpeg'
import Aaset_3 from '../../../Aassets/asset 3.jpeg'
import Aaset_5 from '../../../Aassets/asset 5.jpeg'
import Aaset_31 from '../../../Aassets/asset 31.svg';
import Aaset_22 from '../../../Aassets/asset 22.jpeg';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 
const Asec3 = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  
  return (
    <>
        <div className='container-2xl w-full h-auto mt-36'>
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1.5}
        centeredSlides={true}
        spaceBetween={80}
        // pagination={{
        //   type: 'fraction',
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper h-[550px] w-full"
      >
        <SwiperSlide><img src={Aaset_4} /></SwiperSlide>
        <SwiperSlide><img src={Aaset_3} /></SwiperSlide>
        <SwiperSlide><img src={Aaset_5} /></SwiperSlide>
        <SwiperSlide><img src={Aaset_3} /></SwiperSlide>
      </Swiper>
        </div>


    <section>
      <div className='container-2xl w-full h-auto mx-auto mt-32'>
        <h1 className='text-center text-7xl font-medium'>Our Awards</h1>
        <div className='w-10/12 2xl:w-9/12 h-auto mx-auto mt-14'>

          <div className='w-full h-auto flex-none md:flex justify-center border border-l-0 border-r-0 py-7 tex px-5 md:px-0'>
            <div className='w-full md:w-3/12 xl:w-1/3'>
              <h1 className='text-lg'>FREE SHIPPING</h1>
            </div>
            <div className='w-full md:w-8/12 xl:w-1/3 mt-5 md:mt-0'>
              <h1 className='text-3xl tracking-wide cursor-pointer hover:underline'>Modern painting award jump</h1>
              <h1 className='text-custom-font mt-0 md:mt-2 text-[16px]'>Runner Up - <q>Decor of the week</q></h1>
            </div>
            <div className='flex items-center cursor-pointer w-full md:w-1/3 justify-start md:justify-end mt-5 md:mt-0'>
              <img src={Aaset_31} />
            </div>
          </div>


          <div className='w-full h-auto flex-none md:flex justify-center border border-l-0 border-r-0 py-7 tex px-5 md:px-0'>
            <div className='w-full md:w-3/12 xl:w-1/3'>
              <h1 className='text-lg'>FREE RETURN</h1>
            </div>
            <div className='w-full md:w-8/12 xl:w-1/3 mt-5 md:mt-0'>
              <h1 className='text-3xl tracking-wide cursor-pointer hover:underline'>People's choice: best design</h1>
              <h1 className='text-custom-font mt-0 md:mt-2 text-[16px]'>Runner Up - <q>Decor of the week</q></h1>
            </div>
            <div className='flex items-center cursor-pointer w-full md:w-1/3 justify-start md:justify-end mt-5 md:mt-0'>
              <img src={Aaset_31} />
            </div>
          </div>


          <div className='w-full h-auto flex-none md:flex justify-center border border-l-0 border-r-0 py-7 tex px-5 md:px-0'>
            <div className='w-full md:w-3/12 xl:w-1/3'>
              <h1 className='text-lg'>SECURE PAYMENT</h1>
            </div>
            <div className='w-full md:w-8/12 xl:w-1/3 mt-5 md:mt-0'>
              <h1 className='text-3xl tracking-wide cursor-pointer hover:underline'>Webby's,Site of the Year</h1>
              <h1 className='text-custom-font mt-0 md:mt-2 text-[16px]'>Runner Up - <q>Decor of the week</q></h1>
            </div>
            <div className='flex items-center cursor-pointer w-full md:w-1/3 justify-start md:justify-end mt-5 md:mt-0'>
              <img src={Aaset_31} />
            </div>
          </div>


          <div className='w-full h-auto flex-none md:flex justify-center border border-l-0 border-r-0 py-7 tex px-5 md:px-0'>
            <div className='w-full md:w-3/12 xl:w-1/3'>
              <h1 className='text-lg'>BEST QUALITY</h1>
            </div>
            <div className='w-full md:w-8/12 xl:w-1/3 mt-5 md:mt-0'>
              <h1 className='text-3xl tracking-wide cursor-pointer hover:underline'>Awwwards site of the day</h1>
              <h1 className='text-custom-font mt-0 md:mt-2 text-[16px]'>Runner Up - <q>Decor of the week</q></h1>
            </div>
            <div className='flex items-center cursor-pointer w-full md:w-1/3 justify-start md:justify-end mt-5 md:mt-0'>
              <img src={Aaset_31} />
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div className='container-2xl w-full h-auto mx-auto mt-32'>
        <div className='flex-none lg:flex'>
          <div className='w-full lg:w-[46%] h-auto py-14 z-40'>
            <img src={Aaset_22} className='w-full h-full' />
          </div>
          <div className='w-full lg:w-7/12 h-auto ml-0 lg:-ml-14 tax1'>
            <h1 className='font-medium text-xl mt-20 ml-10 lg:ml-20 xl:ml-24 2xl:ml-32'>Get in touch with us to see how</h1>
            <h1 className='text-4xl 2xl:text-5xl ml-10 lg:ml-20 xl:ml-24 2xl:ml-32 mt-4 font-bold'>Provide smart and flexible digital service</h1>

            <div className='w-11/12 lg:w-9/12 2xl:w-8/12 h-auto mx-auto mt-5'>
            <Accordion className='py-3'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>Can i cancle my account any time?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion className='py-3'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>What happens after the license expires?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>


            <Accordion className='py-3 mb-20'>
              <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                <Typography><p className='font-bold text-lg hover:text-custom-pink hover:duration-300'>Does Harry have any documentations?</p></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                Non similique culpa in provident quos sit commodi beatae ea laborum suscipit id autem velit aut iusto odio et deleniti quis et doloremque enim vel consequuntur quos.
                </Typography>
              </AccordionDetails>
            </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Asec3