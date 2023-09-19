import React from 'react'
import casset_3 from '../../Casset/asset 3.png'
import casset_4 from '../../Casset/asset 4.png'
import casset_5 from '../../Casset/asset 5.png'
import casset_6 from '../../Casset/asset 6.png'
import casset_7 from '../../Casset/asset 7.png'
import casset_8 from '../../Casset/asset 8.png'
import casset_10 from '../../Casset/asset 10.png'
  
const ContactUs = () => {
  return (
  <div>
    <section>
      <div className='container-2xl w-full h-[650px] mx-auto pt-40' style={{backgroundImage: `url("${casset_10}")`, backgroundSize:"cover"}}>
        <h1 className='text-center font-medium'>GET TO KNOW US</h1>
        <h1 className='text-center text-6xl font-bold mt-4'>Have a project in mind? <br/> Let's talk.</h1>
      </div>

      <div className='flex justify-center my-14 -mt-56 gap-7 flex-wrap'>
        <div className='w-[400px] h-auto py-12 shadow-xl text-center bg-white'>
          <div className='flex justify-center'>
            <img src={casset_3} />
          </div>
          <h1 className='underline text-gray-400 text-lg mt-12 mb-5 font-bold'>Contact</h1>
          <a href='mailto:location@website.com' className='text-[22px] font-medium hover:text-custom-pink hover:duration-500'>location@website.com</a> <br />
          <a href='tel:+(602) 762 472 96' className='text-[22px] font-medium hover:text-custom-pink hover:duration-500'>+(602) 762 472 96</a>
        </div>


        <div className='w-[400px] h-auto py-12 shadow-xl text-center bg-white'>
          <div className='flex justify-center'>
            <img src={casset_4} />
          </div>
          <h1 className='underline text-gray-400 text-lg mt-12 mb-5 font-bold'>Location</h1>
          <a href='https://goo.gl/maps/MiiBJ4NMFHcecXZ58' target='_blank' className='text-[22px] font-medium hover:text-custom-pink hover:duration-500'>88 New South Head Rd, Triple, <br /> New York</a>
        </div>

        <div className='w-[400px] h-auto py-12 shadow-xl text-center bg-white'>
          <div className='flex justify-center'>
            <img src={casset_5} />
          </div>
          <h1 className='underline text-gray-400 text-lg mt-12 mb-5 font-bold'>Social Media</h1>
          <h1 className='text-[22px] font-medium'>Follow on social medium</h1>
          <p className='flex justify-center gap-4 text-gray-400'>
            <a href='https://www.facebook.com/' target='_blank' className='hover:text-custom-pink hover:duration-500 text-lg'><i className="fa-brands fa-facebook"></i></a>
            <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den' target='_blank' className='hover:text-custom-pink hover:duration-500 text-lg'><i className="fa-brands fa-twitter"></i></a>
            <a href='https://in.linkedin.com/' target='_blank' className='hover:text-custom-pink hover:duration-500 text-lg'><i className="fa-brands fa-linkedin"></i></a>
            <a href='https://www.youtube.com/' target='_blank' className='hover:text-custom-pink hover:duration-500 text-lg'><i className="fa-brands fa-youtube"></i></a>
          </p>
        </div>
      </div>
    </section>

    <section>
      <div className='container-2xl w-full h-auto mx-auto'>
        <form className='w-full md:w-4/5 2xl:w-[1296px] h-auto border border-gray-300 p-5 md:p-24 pt-16 mx-auto mt-40'>
          <h1 className='text-3xl font-medium'>Send a message</h1>

          <div className='mt-10 gap-8 flex flex-wrap md:flex-nowrap'>
            <input type='text' placeholder='Enter your name' className='bg-gray-100 w-full md:w-1/2 px-8 py-4 focus:outline-custom-pink focus:bg-white' />
            <input type='email' placeholder='Enter your email' className='bg-gray-100 w-full md:w-1/2 px-8 py-4 focus:outline-custom-pink focus:bg-white' />
          </div>

          <div className='mt-7 gap-8 flex flex-wrap md:flex-nowrap'>
            <input type='text' placeholder='Moblie no' className='bg-gray-100 w-full md:w-1/2 px-8 py-4 focus:outline-custom-pink focus:bg-white' />
            <input type='text' placeholder='Company' className='bg-gray-100 w-full md:w-1/2 px-8 py-4 focus:outline-custom-pink focus:bg-white' />
          </div>

          <textarea name='message' placeholder='Your message' className='bg-gray-100 w-full h-44 mt-7 px-8 py-4 focus:outline-custom-pink focus:bg-white'></textarea>

          <a><input type='checkbox' className='mt-7 w-4 h-4 mr-3' /> i am bound by the terms of the Service I accept Privacy Policy.</a><br/>

          <button className='px-9 py-3 font-bold bg-custom-pink text-white mt-5 hover:bg-black hover:duration-700'>Send Message</button>
        </form>
      </div>
    </section>

    <section>
      <div className='container-2xl w-full h-auto mx-auto mt-24'>
        <div className='w-11/12 lg:w-10/12 xl:w-8/12 h-auto p-5 mx-auto'>
          <h1 className='text-lg font-medium'>Locations</h1>
          <h1 className='text-4xl font-semibold mt-3'>Come and visit our offices <br/> around the world</h1>

        <div className='mt-16 w-full border-0 border-b-2 py-8'>
          <div className='flex gap-20 flex-wrap md:flex-nowrap'>
            <div className='w-1/5 flex items-center'>
              <p className='text-custom-font1 text-[20px] font-bold'>Australia Office</p>
            </div>
          <div className='w-full -mt-16 md:mt-0'>
            <div className='flex flex-wrap md:flex-nowrap justify-between ml-0 md:ml-7'>
                <div className='flex'>
                  <img src={casset_6}/>
                  <div className='ms-12'>
                      <a href='mailto:contact.location@website.com'><p className='hover:duration-500 hover:text-custom-pink mt-3 text-custom-font'>contact.location@website.com</p></a>
                      <a href='tel:686-324-6838' className='hover:duration-500 hover:text-custom-pink text-custom-font'>686-324-6838</a>
                    </div>
                </div>
                <div className=''>
                  <a href='https://goo.gl/maps/MiiBJ4NMFHcecXZ58' target='_blank'>
                  <button className='flex m-auto bg-white mt-4 px-7 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500 hover:border-0'>View Location</button>
                  </a>
                </div>
             </div>
        </div>
    </div>
    </div>

    <div className='w-full border-0 border-b-2 py-8'>
          <div className='flex gap-20 flex-wrap md:flex-nowrap'>
            <div className='w-1/5 flex items-center'>
              <p className='text-custom-font1 text-[20px] font-bold'>San Francisco Office</p>
            </div>
          <div className='w-full -mt-16 md:mt-0'>
            <div className='flex flex-wrap md:flex-nowrap justify-between ml-0 md:ml-7'>
                <div className='flex'>
                  <img src={casset_7}/>
                  <div className='ms-12'>
                      <a href='mailto:contact.location@website.com'><p className='hover:duration-500 hover:text-custom-pink mt-3 text-custom-font'>contact.location@website.com</p></a>
                      <a href='tel:686-324-6838' className='hover:duration-500 hover:text-custom-pink text-custom-font'>686-324-6838</a>
                    </div>
                </div>
                <div className=''>
                  <a href='https://goo.gl/maps/MiiBJ4NMFHcecXZ58' target='_blank'>
                  <button className='flex m-auto bg-white mt-4 px-7 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500 hover:border-0'>View Location</button>
                  </a>
                </div>
             </div>
        </div>
    </div>
    </div>

        <div className=' w-full border-0 border-b-2 py-8'>
          <div className='flex gap-20 flex-wrap md:flex-nowrap'>
            <div className='w-1/5 flex items-center'>
              <p className='text-custom-font1 text-[20px] font-bold'>Egpyt Office</p>
            </div>
          <div className='w-full -mt-16 md:mt-0'>
            <div className='flex flex-wrap md:flex-nowrap justify-between ml-0 md:ml-7'>
                <div className='flex'>
                  <img src={casset_8}/>
                  <div className='ms-12'>
                      <a href='mailto:contact.location@website.com'><p className='hover:duration-500 hover:text-custom-pink mt-3 text-custom-font'>contact.location@website.com</p></a>
                      <a href='tel:686-324-6838' className='hover:duration-500 hover:text-custom-pink text-custom-font'>686-324-6838</a>
                    </div>
                </div>
                <div className=''>
                  <a href='https://goo.gl/maps/MiiBJ4NMFHcecXZ58' target='_blank'>
                  <button className='flex m-auto bg-white mt-4 px-7 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500 hover:border-0'>View Location</button>
                  </a>
                </div>
             </div>
        </div>
    </div>
    </div>
      </div>
      </div>
    </section>

  </div>
  )
}

export default ContactUs