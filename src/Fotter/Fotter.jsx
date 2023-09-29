import React from 'react'
import './Fotter.css'
import aset_89 from '../../assets/asset 89.jpeg'
import aset_0 from '../../assets/asset 0.svg'
import aset_87 from '../../assets/asset 87.png'
import { Link } from 'react-router-dom'


const Fotter = () => {
  return (
    <div>
    <div className='h-[300px] w-full bg-right'  style={{backgroundImage: `url("${aset_89}")`, backgroundSize:"cover"}}>
    <div className="mt-14">
        <div className="containerrr w-10/12"><br/>
            <div className="h-auto w-full bg-white pb-10 pt-5">
                <div className="flex-none lg:flex justify-around mt-8">
                    <div className="my-5 lg:my-10">
                        <h1 className="text-4xl text-black font-bold pl-0 md:pl-10">Subscribe for <br /> Latest Trends &amp; Offers</h1>
                    </div>
                    <div className="">
                        <div className="sm:w-[500px] h-16 border border-black flex items-center justify-around ml-0 md:ml-10 mt-0 md:mt-14">
                            <div>
                                <input type="text" placeholder="Enter Your Email" className="input1 w-[290px]" />
                            </div>
                            <div>
                                <Link href="#_" className="inline-flex items-center justify-center pt-2 px-0 sm:px-5 lg:px-10 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black border-black hover:bg-custom-pink  duration-500">Subscribe</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="container-2xl px-5 xl:px-10 2xl:px-40 mt-32">
    <div className="flex justify-center gap-32 2xl:gap-36 flex-wrap">
      <div>
      <Link to='/'>
        <img src={aset_0} alt=""/>
      </Link>
        <p className="max-w-[200px] mt-3 text-custom-font">The home and elements needed to create <br /> beautiful products.</p>
        <Link href='#'><i className="fa-brands fa-facebook mt-3 text-[20px] hover:text-custom-pink duration-500 text-custom-font" /></Link>
        <Link href='#'><i className="fa-brands fa-twitter ms-2 text-[20px] hover:text-custom-pink duration-500 text-custom-font" /></Link>
        <Link href='#'><i className="fa-brands fa-linkedin-in ms-2 text-[20px] hover:text-custom-pink duration-500 text-custom-font" /></Link>
        <Link href='#'><i className="fa-brands fa-youtube ms-2 text-[20px] hover:text-custom-pink duration-500 text-custom-font" /></Link>
      </div>
      <div>
        <p className="text-[20px]"><b>Company</b></p>
        <Link to='/About' href='#'><p className="mt-5 text-custom-font hover:text-custom-pink duration-500">About us</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Careers</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Store Locations</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Our Blog</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Reviews</p></Link>
      </div>
      <div>
        <p className="text-[20px]"><b>Shop</b></p>
        <Link href='#'><p className="mt-5 text-custom-font hover:text-custom-pink duration-500">Game &amp; Video</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Phone &amp;Tablets</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Computers &amp; Laptop</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Sport Watches</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Discounts</p></Link>
      </div>
      <div>
        <p className="text-[20px]"><b>Support</b></p>
        <Link to='/Faqs' href='#'><p className="mt-5 text-custom-font hover:text-custom-pink duration-500">FAQs</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Reviews</p></Link>
        <Link to='/ContactUs' href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Contact Us</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Shipping</p></Link>
        <Link href='#'><p className="mt-2 text-custom-font hover:text-custom-pink duration-500">Returns</p></Link>
      </div>
      <div>
        <p className="text-[20px]"><b>Talk To Us</b></p>
        <p className="mt-5 text-custom-font">Find Link location nearest <br /> you. See <Link href='#'><span className="underline text-custom-pink">Our Stores</span></Link></p>
        <Link href='#'><p className="text-[20px] mt-3 hover:text-custom-pink duration-500"><b>+624 423 26 72</b></p></Link>
        <Link href='#'><p className="hover:text-custom-pink duration-500 text-custom-font">support@harry.com</p></Link>
      </div>
    </div>
    <hr className='border border-gray-300 mt-20' />
    <div className="w-[1116px] mt-[100px] ">
    </div>
    <div className="flex justify-between mt-5 mb-10">
      <div>
        <p className="text-custom-font">Copyright © 2023 by <Link href="#" className="text-custom-pink">Hamart</Link> All rights reserved.</p>
      </div>
      <div>
        <img src={aset_87} alt="not show" />
      </div>
    </div>
  </div>
    </div>
    </div>
  )
}

export default Fotter