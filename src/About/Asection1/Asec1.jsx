import React from 'react'
import Aasset_21 from '../../../Aassets/asset 21.jpeg'

const Asec1 = () => {
  return (
    <div>
      <div className='container-2xl'>
        <div className='h-[670px] w-full relative bg-cover' style={{backgroundImage: `url("${Aasset_21}")`}}>
            <div className='w-full h-full flex justify-center items-center backdrop-brightness-50 bg-[rgba(3,4,28,0.27)]'>
                <div className='text-white font-bold absolute text-center bottom-36'>
                    <p>About Us</p>
                    <h1 className='mt-4 text-6xl'>Welcome to our <br/> Harri shop</h1>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Asec1