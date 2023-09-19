import React from 'react'
import Casset_10 from '../../../Casset/asset 10.png'

const Terms = () => {
  return (
    <section>
        <div className='container-2xl w-full mx-auto pt-40' style={{backgroundImage: `url("${Casset_10}")`, backgroundRepeat: 'repeat-x'}}>
            <h1 className='text-center text-6xl font-bold'>Terms and Conditions</h1>
            <p className='text-center text-custom-font text-lg mt-7'>The words of which the initial letter is capitalized have meanings defined under the following <br /> conditions. The following definitions shall have the same meaning regardless of whether they <br /> appear in singular or in plural.</p>

            <div className='w-full flex justify-center'>
                <div className='w-11/12 md:w-4/5 xl:w-[1000px] mx-auto shadow-xl px-14 py-20 mt-16 mb-32 bg-white'>
                    <h1 className='font-bold text-[16px]'>Last updated: September 18, 2022</h1>
                    <p className='text-[16px] mt-3 text-custom-font leading-[1.62rem]'>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.</p>
                    <p className='text-[16px] mt-3 text-custom-font leading-[1.62rem]'>
                    By using or accessing the Services in any manner, you acknowledge that you accept the practices and policies outlined in this Privacy Policy, and you hereby consent that Harry will collect, use, and share your information in the following ways. Remember that your use of Services is at all times subject to the Terms as set forth at https://harry.com/legal/terms, which incorporate this Privacy Policy. Any terms Harry uses in this Privacy Policy without defining them have the definitions given to them in the Terms.
                    </p>

                    <h1 className='text-4xl font-bold my-7'>Definitions</h1>
                    <p className='text-[16px]  text-custom-font leading-[1.62rem]'>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>

                    <h1 className='text-4xl font-bold mt-7 mb-5'>Purposes of these Terms and Conditions:</h1>
                    <ul className='list-disc text-custom-font text-[16px]'>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Affiliate </span> means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</li>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Country </span> refers to: California, United States</li>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Company  </span> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Harry.
                        </li>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Device </span> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                        </li>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Service </span> refers to the Website.
                        </li>
                        <li className='ml-4 my-4'> <span className='font-bold text-gray-600'>Website </span> refers to Harry, accessible from harry.com
                        </li>
                    </ul>

                    <h1 className='text-4xl font-bold mt-7 mb-3'>Contact us</h1>
                    <p className='text-[16px] text-custom-font mb-5'>You may contact us at any time via:</p>
                    <a href='mailto:support@harry.com' className='hover:text-custom-pink hover:duration-300 text-[16px]'>Email: support@harry.com</a>
                    <address className='text-custom-font text-[16px] mt-5 hover:text-custom-pink hover:duration-300 cursor-pointer'>harry PTY LTD <br />
                    4270, Brisbane, Australia</address>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Terms
