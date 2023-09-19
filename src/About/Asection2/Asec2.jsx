import React from 'react'
import './Asec2.css'
import Aaset_28 from '../../../Aassets/asset 28.svg'
import Aaset_31 from '../../../Aassets/asset 31.svg'
import Aaset_29 from '../../../Aassets/asset 29.svg'
import Aaset_30 from '../../../Aassets/asset 30.svg'

const Asec2 = () => {
  return (
    <div>
      <div className='container-2xl'>
        <div className='w-9/12 h-auto flex-none lg:flex mx-auto mt-32'>
            <div className='w-full lg:w-1/3'>
                <h1 className='font-bold text-3xl'>It started with a <br /> bang now we are here.</h1>
            </div>
            <div className='w-full lg:w-2/3 mt-10 lg:mt-0'>
                <p className='text-custom-font text-[17px] leading-7'>Ut at maximus magna. Vestibulum interdum sapien in facilisis imperdiet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin ac placerat risus. Nullam eget tortor felis. Nulla facilisi.Vestibulum mattis diam non luctus elementum. Cras sollicitudin, nisi in semper viverra, felis diam consequat mi, quis tincidunt ligula</p>

                <p className='text-custom-font text-[17px] leading-7 mt-5'>Nam nibh diam, varius quis lectus eget, laoreet cursus metus. morbi augue lectus, dapibus eget justo nec, consectetur auctor nis luctus neque.!</p>
            </div>
        </div>

        <div className='w-full flex justify-center mt-36 gap-10 flex-wrap'>
            <div className='w-[416px] h-[216px] border p-10 box'>
                <div className='flex justify-between'>
                    <img src={Aaset_28} className='image' />
                    <img src={Aaset_31} className='-rotate-45 ii' />
                </div>

                <p className='mt-10 text-custom-font'>10k</p>
                <a className='font-bold text-3xl cursor-pointer'>Listed Products</a>
            </div>

            <div className='w-[416px] h-[216px] border p-10 box'>
                <div className='flex justify-between'>
                    <img src={Aaset_29} className='image' />
                    <img src={Aaset_31} className='-rotate-45 ii' />
                </div>

                <p className='mt-10 text-custom-font'>5k</p>
                <a className='font-bold text-3xl cursor-pointer'>Lovely Customer</a>
            </div>

            <div className='w-[416px] h-[216px] border p-10 box'>
                <div className='flex justify-between'>
                    <img src={Aaset_30} className='image' />
                    <img src={Aaset_31} className='-rotate-45 ii' />
                </div>

                <p className='mt-10 text-custom-font'>24h</p>
                <a className='font-bold text-3xl cursor-pointer'>Support</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Asec2