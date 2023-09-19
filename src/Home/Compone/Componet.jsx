import React from "react";
import "./compo.css";
import asset_7 from '../../../assets/asset 7.jpeg';
import asset_10 from '../../../assets/asset 10.jpeg';
import asset_9 from '../../../assets/asset 9.jpeg';
import asset_8 from '../../../assets/asset 8.jpeg';
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <section>
      <div className="container mx-auto pl-5 lg:pl-[10%] 2xl:pl-[12%]">
            <div className="flex-none md:flex justify-between my-10 mr-32 mt-56">
              <h1 className="upcomming">Deal of The Day</h1>
             <a href="#"><Link to='/Shop' hrefLang="#" className="bg-custom-pink px-7 mt-5 md:mt-0 py-3 font-bold text-white hover:bg-indigo-500 hover:duration-1000 mr-0 lg:mr-16">View All Products</Link></a>
            </div>
              <div className="item">
                <div className="item-right h-auto flex items-center border border-r-0">
                      <img src={asset_7} className="w-32 h-32 m-6" />
                      <div>
                          <h1 className="font-bold text-xl">August Gift Voucher</h1>
                          <h1 className="text-custom-pink text-xl font-bold">10% <span className="text-gray-700">Off</span></h1>
                          <div className="flex text-custom-font mt-3">
                              <p className="px-2 text-xs border-0 border-r">26 <br/> DAY</p>
                              <p className="px-2 text-xs border-0 border-r">13 <br/> HRS</p>
                              <p className="px-2 text-xs border-0 border-r">38 <br/> MIN</p>
                              <p className="px-2 text-xs border-0">21 <br/> SEC</p>
                          </div>
                      </div>
                  <span className="up-border" />
                  <span className="down-border" />
                </div>
                <div className="item-left p-5 border border-l-0">
                  
                  <div className="fix" />
                      <div className="loc flex items-center mt-5">
                          <p className="text-custom-font">Coupon <span className="text-[#008080]">Active</span></p>
                          <i className="fa-solid fa-circle-exclamation ml-2"></i>
                      </div>
                      <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0,128,128,0.4)] px-7 py-2 mt-5 mb-7">AUGUST23</button>
                  </div>
              </div>


              <div className="item">
                <div className="item-right h-auto flex items-center border border-r-0">
                      <img src={asset_10} className="w-32 h-32 m-6" />
                      <div>
                          <h1 className="font-bold text-xl">Winter Gift Voucher</h1>
                          <h1 className="text-custom-pink text-xl font-bold">15% <span className="text-gray-700">Off</span></h1>
                          <div className="flex text-custom-font mt-3">
                              <p className="px-2 text-xs border-0 border-r">0 <br/> DAY</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> HRS</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> MIN</p>
                              <p className="px-2 text-xs border-0">0 <br/> SEC</p>
                          </div>
                      </div>
                  <span className="up-border" />
                  <span className="down-border" />
                </div>
                <div className="item-left p-5 border border-l-0">

                  <div className="fix" />
                      <div className="loc flex items-center mt-5">
                          <p className="text-custom-font">Coupon <span className="text-custom-pink">Inactive</span></p>
                          <i className="fa-solid fa-circle-exclamation ml-2"></i>
                      </div>
                      <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0,128,128,0.4)] px-7 py-2 mt-5 mb-7">WINTER23</button>
                  </div>
              </div>


              <div className="item">
                <div className="item-right h-auto flex items-center border border-r-0">
                      <img src={asset_9} className="w-32 h-32 m-6" />
                      <div>
                          <h1 className="font-bold text-xl">Summer Gift Voucher</h1>
                          <h1 className="text-custom-pink text-xl font-bold">12% <span className="text-gray-700">Off</span></h1>
                          <div className="flex text-custom-font mt-3">
                              <p className="px-2 text-xs border-0 border-r">0 <br/> DAY</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> HRS</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> MIN</p>
                              <p className="px-2 text-xs border-0">0 <br/> SEC</p>
                          </div>
                      </div>
                  <span className="up-border" />
                  <span className="down-border" />
                </div>
                <div className="item-left p-5 border border-l-0">

                  <div className="fix" />
                      <div className="loc flex items-center mt-5">
                          <p className="text-custom-font">Coupon <span className="text-custom-pink">Inactive</span></p>
                          <i className="fa-solid fa-circle-exclamation ml-2"></i>
                      </div>
                      <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0,128,128,0.4)] px-7 py-2 mt-5 mb-7">SUMMER23</button>
                  </div>
              </div>


              <div className="item">
                <div className="item-right h-auto flex items-center border border-r-0">
                      <img src={asset_8} className="w-32 h-32 m-6" />
                      <div>
                          <h1 className="font-bold text-xl">January Gift Voucher</h1>
                          <h1 className="text-custom-pink text-xl font-bold">20% <span className="text-gray-700">Off</span></h1>
                          <div className="flex text-custom-font mt-3">
                              <p className="px-2 text-xs border-0 border-r">0 <br/> DAY</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> HRS</p>
                              <p className="px-2 text-xs border-0 border-r">0 <br/> MIN</p>
                              <p className="px-2 text-xs border-0">0 <br/> SEC</p>
                          </div>
                      </div>
                  <span className="up-border" />
                  <span className="down-border" />
                </div>
                <div className="item-left p-5 border border-l-0">

                  <div className="fix" />
                      <div className="loc flex items-center mt-5">
                          <p className="text-custom-font">Coupon <span className="text-custom-pink">Inactive</span></p>
                          <i className="fa-solid fa-circle-exclamation ml-2"></i>
                      </div>
                      <button className="text-[#008080] bg-[rgba(0,128,128,0.1)] border-dashed border-2 border-[rgba(0,128,128,0.4)] px-6 py-2 mt-5 mb-7">JANUARY23</button>
                  </div>
              </div>
        </div>

    </section>
  );
};

export default Demo;