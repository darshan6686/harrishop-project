import React from "react";
import './Header.css';
import asset_0 from '../../assets/asset 0.svg';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  let Data = useSelector((state => state.cartData))
  let whish = useSelector((state => state.whishData))

  return (
    <>
      <div className="container-2xl shadow w-full bg-white h-auto fixed z-50">
        <div>
          <header className="p-3 flex justify-between mx-0 lg:mx-6 2xl:mx-32">
           <div className="flex items-center">
           <img src={asset_0} />
           <nav className="text-custom-font ml-5 md:ml-11 font-medium">
             <Link to='/' className="mr-3 md:mr-7 hover:text-custom-pink">
               Home
             </Link>
             <Link to='/About' className="mr-3 md:mr-7 hover:text-custom-pink">
               About Us
             </Link>
             <Link to='/Shop'  className="mr-3 md:mr-7 hover:text-custom-pink">
               Shop
             </Link>

             <div className="dropdown inline-block relative mr-3 md:mr-7">
                  <button className="font-semibold inline-flex items-center">
                    <Link className="hover:text-custom-pink text-custom-font font-medium">Pages</Link>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                  </button>
                  <div className="dropdown-menu absolute hidden pt-5 pb-5 px-5 w-48 bg-white shadow-xl text-sm leading-7 mr-3 md:mr-7 cursor-pointer">
                    
                    <Link to='/Faqs' className="hover:text-custom-pink">FAQs</Link> <br/>
                    <Link to='/Privacy' className="hover:text-custom-pink">Privacy & Policy</Link> <br/>
                    <Link to='/Terms' className="hover:text-custom-pink">Terms & conditions</Link> <br/>
                    <Link to='/Login' className="hover:text-custom-pink">Login</Link> <br/>
                    <Link to='/Register' className="hover:text-custom-pink">Register</Link> <br/>
                    <Link to='/Forget' className="hover:text-custom-pink">Forget Password</Link> <br/>
                    <Link to='/Mycart' className="hover:text-custom-pink">My Cart</Link> <br/>
                    <Link to='/Mywhistlist' className="hover:text-custom-pink">My Wishlist</Link> <br/>
                    <Link to='/Checkout' className="hover:text-custom-pink">Checkout</Link> <br/>
                    <Link to='/Error' className="hover:text-custom-pink">Error 404</Link>
                  </div>
              </div>
  
             <Link to='/ContactUs' className="mr-3 md:mr-7 hover:text-custom-pink">
               Contact us
             </Link>
           </nav>
           </div>

            <div className="flex items-center">
                <input type="search" className="xl:w-72 xl:h-12 rounded-l-full px-8 focus:outline-none border border-r-0 hidden xl:flex" placeholder="Search for products..." />
                <span className="h-12 w-10 rounded-r-full xl:bg-white flex items-center border-0 xl:border xl:border-l-0"><i className="fa-solid fa-magnifying-glass"></i></span>

                <span className="text-xl"><i className="fa-regular fa-user mx-2.5 ml-0 xl:ml-16"></i></span>
                
                <Link to='/Mywhistlist' className="text-xl relative"><i className="fa-regular fa-heart mx-2.5"></i><p className="w-5 h-5 flex justify-center items-center rounded-full bg-custom-pink text-white absolute -top-0.5 -right-1 text-xs border-2 border-white">{whish.length}</p></Link>

                <Link to='/Mycart' className="text-xl relative"><i className="fa-solid fa-cart-shopping mx-2.5"></i><p className="w-5 h-5 flex justify-center items-center rounded-full bg-custom-pink text-white absolute -top-0.5 -right-1 text-xs border-2 border-white">{Data.length}</p></Link>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;