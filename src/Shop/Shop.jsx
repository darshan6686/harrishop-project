import React, {useState} from 'react'
import { useEffect } from 'react'
import { productList } from '../Saga/Product/Productlist'
import { addToCart, addToWhishlist } from '../Saga/Action'
import { useSelector, useDispatch } from 'react-redux'
import './Shop.css'

const Shop = () => {
  
  let [count, setCount] = useState("")
  let [showModal, setShowModal] = useState(false)
  let [num, setNum] = useState(1)

  let dispatch = useDispatch()
  let data = useSelector(state => state.productData)

  useEffect(() => {
    dispatch(productList())
  }, [])

  let setFilter = (e) => {
    setCount(e.target.value)
  }

  let [currentPage, setCurrentPage] = useState(1);
  let recordsPerPage = 9;

  let lastIndex = currentPage * recordsPerPage;
  let firstIndex = lastIndex - recordsPerPage;
  let record = data.slice(firstIndex, lastIndex);
  let nPages = Math.ceil(data.length / recordsPerPage)
  let numbers = [...Array(nPages + 1).keys()].slice(1)

  let previousPage = () => {
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  }

  let nextPage = () => {
    if(currentPage !== nPages){
        setCurrentPage(currentPage + 1)
    }
  }

  let changePage = (id) => {
    setCurrentPage(id)
  }

  return (
    <>
    <div>
        <div className='container-2xl w-full h-auto pt-40'>
        <div className='w-10/12 h-auto mx-auto flex justify-between p-5 border'>
            <h1 className='text-lg'>Showing 1-9 of 27 results</h1>
            <div>
                <select name='filter' onChange={setFilter} className='pl-3 pr-12 py-2 border'>
                    <option value=''>Short Filtering</option>
                    <option value='latest product'>Latest product</option>
                    <option value='top rated'>Price low to high</option>
                    <option value='best selling'>Price high to low</option>
                </select>
            </div>
        </div>
            <div className='w-10/12 h-auto mx-auto flex gap-10'>
                <div className='w-3/12 h-auto'>
                <div className="max-w-screen-xl mx-auto px-3 bg-white min-h-sceen">
            
                <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">

                <div className="py-1 border-none">
                <details className="group" open>
                    <summary className="flex justify-between items-center cursor-pointer list-none">
                        <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Ipad Phones & Tablets</span>
                        <span className="transition group-open:rotate-90">
                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                            </svg>
                        </span>
                    </summary>
                    <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                         <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("phone")}>Phone</li>
                         <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("tablet")}>Tablet</li>
                         <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("ipad")}>Ipad</li>
                    </ul>
                </details>
            </div>

                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>setCount & Virtual</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("planner")}>Planer</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("virtual")}>Virtual</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Spinning Reel & Kettle</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("spinning reel")}>Spinning Reel</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("kettle")}>Kettle</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Computers Moniter & Laptop</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("computer")}>Computer</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("moniter")}>Moniter</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("laptop")}>Laptop</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Exercise Bike & Shaver Clean</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("exercise-bike")}>Exercise-Bike</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("shaver clean")}>Shaver-Clean</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Wireless & Watches</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24"  className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("wireless")}>Wireless</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300'onClick={() => setCount("watch")} >Watch</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-1 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300 group-open:text-custom-pink'>Camera Bluetooth & Headset</span>
                                <span className="transition group-open:rotate-90">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='-rotate-90'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <ul className="text-neutral-600 mt-3 pl-3 list-disc group-open:animate-fadeIn">
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("camera")}>Camera</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("bluetooth")}>Bluetooth</li>
                                 <li className='mb-2 cursor-pointer hover:text-custom-pink hover:duration-300' onClick={() => setCount("headset")}>Headset</li>
                            </ul>
                        </details>
                    </div>


                    <div className="py-3 border-none mt-5">
                        <details className="group" open>
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300'>Brands</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-180'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div>
                                <hr />
                                <input type='search' className='border px-3 h-10 w-full mt-7' placeholder='Search brands' />
                                <div className='w-full h-32 overflow-auto mt-7 text-custom-font'>
                                    <input onClick={() => setCount("sony")} type='radio' name='brands' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Sony</span> <br />
                                    <input onClick={() => setCount("logitech")} type='radio' name='brands' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Logitech</span> <br />
                                    <input onClick={() => setCount("samsung")} type='radio' name='brands' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Samsung</span> <br />
                                    <input onClick={() => setCount("Apple")} type='radio' name='brands' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Apple</span> <br />
                                    <input onClick={() => setCount("deepcool")} type='radio' name='brands' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Deepcool</span> <br />
                                </div>
                            </div>
                        </details>
                    </div>


                    <div className="py-3 border-none mt-5">
                        <details className="group" open>
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300'>Colors</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-180'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div>
                                <hr />
                                <div className='w-full h-40 overflow-auto mt-7 text-custom-font'>  
                                    <input onClick={() => setCount("green")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Green</span> <br />
                                    <input onClick={() => setCount("orange")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Orange</span> <br />
                                    <input onClick={() => setCount("black")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Black</span> <br />
                                    <input onClick={() => setCount("red")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Red</span> <br />
                                    <input onClick={() => setCount("yellow")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Yellow</span> <br />
                                    <input onClick={() => setCount("white")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>white</span> <br />
                                    <input onClick={() => setCount("pink")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Pink</span> <br />
                                    <input onClick={() => setCount("gray")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Gray</span> <br />
                                    <input onClick={() => setCount("blue")} type='radio' name='shop' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>Blue</span> <br />
                                </div>
                            </div>
                        </details>
                    </div>


                    <div className="py-3 border-none mt-5">
                        <details className="group" open>
                            <summary className="flex justify-between items-center cursor-pointer list-none">
                                <span className='text-lg hover:text-custom-pink hover:duration-300'>Price</span>
                                <span className="transition group-open:rotate-180">
                                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" viewBox="0 0 24 24" width="24" className='rotate-180'><path d="M6 9l6 6 6-6"></path>
                                    </svg>
                                </span>
                            </summary>
                            <div>
                                <hr />
                                <div className='w-full h-40 overflow-auto mt-7 text-custom-font'>
                                    <input type='radio' name='price' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>$10.00 - $49.00</span> <br />
                                    <input type='radio' name='price' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>$50.00 - $99.00</span> <br />
                                    <input type='radio' name='price' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>$100.00 - $199.00</span> <br />
                                    <input type='radio' name='price' className='w-4 h-4 my-2 cursor-pointer' /> <span className='ml-2 cursor-pointer'>$200.00+</span>
                                </div>
                            </div>
                        </details>
                    </div>

                    <button onClick={() => setCount("")} className='bg-custom-pink text-white h-12 font-semibold hover:bg-indigo-500 hover:duration-300'>Reset Filter</button>

                </div>
                </div>
                </div>


                <div className='w-10/12 h-auto mt-10'>
                    <div className='flex gap-14 flex-wrap'>
                    { count === "" && record.map((ele)=>{
                      return (
                      <div key={ele.id} className='main-product-card h-auto w-[290px] mt-5'>
                      <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                        <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5 sale-div z-0'>{ele.Sal}</div>
                        <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{ele.Pr}</div>
              
                        <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                            <button onClick={() => dispatch(addToWhishlist(ele))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>


                            <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                            {showModal ? (
                              <div>
                                <div
                                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                  <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                  
                                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                  
                                      <div className="w-full text-end h-auto">
                                          <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                              x
                                          </button>
                                      </div>
                  
                                      <div className='flex justify-center gap-10'>
                                          <div className='w-[48%] h-auto'>
                                               <img src={ele.image} className='w-full h-[450px] px-10' />
                  
                                               <div className='flex justify-center gap-5 my-7 px-10'>
                                                   <div className='w-1/4'>
                                                       <img src={ele.image} className='w-full h-auto' />
                                                   </div>
                  
                                                   <div className='w-1/4'>
                                                       <img src={ele.image} className='w-full h-auto' />
                                                   </div>
                  
                                                   <div className='w-1/4'>
                                                       <img src={ele.image} className='w-full h-auto' />
                                                   </div>
                  
                                                   <div className='w-1/4'>
                                                       <img src={ele.image} className='w-full h-auto' />
                                                   </div>
                                               </div>
                  
                                          </div>
                                          <div className='w-[52%] h-auto'>
                                              <h1 className='text-4xl font-semibold'>{ele.Name}</h1>
                                              <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                              <p className='mt-10'><del>{ele.Delprice}</del> ${ele.proce}</p>
                  
                                              <div className='flex mt-5'>
                                                  <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                  <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                  <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                              </div>
                  
                                              <div className='flex mt-5 gap-2'>
                                                  <button onClick={() => dispatch(addToCart(ele))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                  <button onClick={() => dispatch(addToWhishlist(ele))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                  <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                              </div>
                  
                                              <hr className='mt-10 mr-10' />
                  
                                              <div><b>SKU:</b> 29045-SB-1</div>
                                              <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                              <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                              <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                          </div>
                  
                                     </div>
                                      
                                    </div>
                                  </div>
                                </div>
                                <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                              </div>
                            ) : null}


                            <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                          </div>
                          <div className='h-full w-full overflow-hidden'>
                            <img src={ele.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                          </div>
              
                          <button onClick={() => dispatch(addToCart(ele))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                      </div>
              
                    <div className='h-auto w-full '>
                        <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{ele.Name}</h1>
                        <h1 className=' text-gray-700 font-semibold mt-1'><del>{ele.Delprice}</del> ${ele.proce}</h1>
                    </div>
              
                    </div> 
                    )})}

                    {data.filter((ell) => {return ell.categaty === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>

                                  <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                                  {showModal ? (
                                    <div>
                                      <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                        <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                        
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        
                                            <div className="w-full text-end h-auto">
                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                    x
                                                </button>
                                            </div>
                        
                                            <div className='flex justify-center gap-10'>
                                                <div className='w-[48%] h-auto'>
                                                     <img src={elem.image} className='w-full h-[450px] px-10' />
                        
                                                     <div className='flex justify-center gap-5 my-7 px-10'>
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                                                     </div>
                        
                                                </div>
                                                <div className='w-[52%] h-auto'>
                                                    <h1 className='text-4xl font-semibold'>{elem.Name}</h1>
                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                    <p className='mt-10'><del>{elem.Delprice}</del> ${elem.proce}</p>
                        
                                                    <div className='flex mt-5'>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                    </div>
                        
                                                    <div className='flex mt-5 gap-2'>
                                                        <button onClick={() => dispatch(addToCart(elem))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                        <button onClick={() => dispatch(addToWhishlist(elem))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                    </div>
                        
                                                    <hr className='mt-10 mr-10' />
                        
                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                </div>
                        
                                           </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                  ) : null}


                                  <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                      <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                  <img src={elem.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                </div>
                    
                                <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                            </div>
                    
                          <div className='h-auto w-full '>
                              <h1 className='text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                              <h1 className='text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                          </div>
                    
                          </div> 
                        )
                    })}


                    {data.filter((ell) => {return ell.type === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>


                                  <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                                  {showModal ? (
                                    <div>
                                      <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                        <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                        
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        
                                            <div className="w-full text-end h-auto">
                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                    x
                                                </button>
                                            </div>
                        
                                            <div className='flex justify-center gap-10'>
                                                <div className='w-[48%] h-auto'>
                                                     <img src={elem.image} className='w-full h-[450px] px-10' />
                        
                                                     <div className='flex justify-center gap-5 my-7 px-10'>
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                                                     </div>
                        
                                                </div>
                                                <div className='w-[52%] h-auto'>
                                                    <h1 className='text-4xl font-semibold'>{elem.Name}</h1>
                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                    <p className='mt-10'><del>{elem.Delprice}</del> ${elem.proce}</p>
                        
                                                    <div className='flex mt-5'>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                    </div>
                        
                                                    <div className='flex mt-5 gap-2'>
                                                        <button onClick={() => dispatch(addToCart(elem))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                        <button onClick={() => dispatch(addToWhishlist(elem))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                    </div>
                        
                                                    <hr className='mt-10 mr-10' />
                        
                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                </div>
                        
                                           </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                  ) : null}

                                  <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                      <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                  <img src={elem.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                </div>
                    
                                <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                            </div>
                    
                          <div className='h-auto w-full '>
                              <h1 className=' text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                              <h1 className=' text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                          </div>
                    
                          </div> 
                        )
                    })}


                    { data.filter((ell) => {return ell.brand === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>

                                  <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                                  {showModal ? (
                                    <div>
                                      <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                        <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                        
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        
                                            <div className="w-full text-end h-auto">
                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                    x
                                                </button>
                                            </div>
                        
                                            <div className='flex justify-center gap-10'>
                                                <div className='w-[48%] h-auto'>
                                                     <img src={elem.image} className='w-full h-[450px] px-10' />
                        
                                                     <div className='flex justify-center gap-5 my-7 px-10'>
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                                                     </div>
                        
                                                </div>
                                                <div className='w-[52%] h-auto'>
                                                    <h1 className='text-4xl font-semibold'>{elem.Name}</h1>
                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                    <p className='mt-10'><del>{elem.Delprice}</del> ${elem.proce}</p>
                        
                                                    <div className='flex mt-5'>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                    </div>
                        
                                                    <div className='flex mt-5 gap-2'>
                                                        <button onClick={() => dispatch(addToCart(elem))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                        <button onClick={() => dispatch(addToWhishlist(elem))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                    </div>
                        
                                                    <hr className='mt-10 mr-10' />
                        
                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                </div>
                        
                                           </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                  ) : null}


                                  <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                      <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                  <img src={elem.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                </div>
                    
                                <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                            </div>
                    
                          <div className='h-auto w-full '>
                              <h1 className='text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                              <h1 className='text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                          </div>
                    
                          </div> 
                        )
                    })}


                    { data.filter((ell) => {return ell.color === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>

                                  <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                                  {showModal ? (
                                    <div>
                                      <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                        <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                        
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        
                                            <div className="w-full text-end h-auto">
                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                    x
                                                </button>
                                            </div>
                        
                                            <div className='flex justify-center gap-10'>
                                                <div className='w-[48%] h-auto'>
                                                     <img src={elem.image} className='w-full h-[450px] px-10' />
                        
                                                     <div className='flex justify-center gap-5 my-7 px-10'>
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                                                     </div>
                        
                                                </div>
                                                <div className='w-[52%] h-auto'>
                                                    <h1 className='text-4xl font-semibold'>{elem.Name}</h1>
                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                    <p className='mt-10'><del>{elem.Delprice}</del> ${elem.proce}</p>
                        
                                                    <div className='flex mt-5'>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                    </div>
                        
                                                    <div className='flex mt-5 gap-2'>
                                                        <button onClick={() => dispatch(addToCart(elem))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                        <button onClick={() => dispatch(addToWhishlist(elem))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                    </div>
                        
                                                    <hr className='mt-10 mr-10' />
                        
                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                </div>
                        
                                           </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                  ) : null}


                                  <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                      <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                  <img src={elem.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                </div>
                    
                                <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                            </div>
                    
                          <div className='h-auto w-full '>
                              <h1 className='text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                              <h1 className='text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                          </div>
                    
                          </div> 
                        )
                    })}


                    { data.filter((ell) => {return ell.proce >= count && ell.proce <= count}).map((elem) => {
                        return( 
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5 border border-black'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div z-0'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div z-0'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>

                                  <div onClick={() => setShowModal(true)} className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>

                                  {showModal ? (
                                    <div>
                                      <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                      >
                                        <div className="relative w-full bg-white mb-6 mt-20 mx-auto max-w-6xl">
                        
                                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                        
                                            <div className="w-full text-end h-auto">
                                                <button className="px-6 py-2 text-4xl font-thin hover:rotate-90 hover:duration-300" type="button" onClick={() => setShowModal(false)} >
                                                    x
                                                </button>
                                            </div>
                        
                                            <div className='flex justify-center gap-10'>
                                                <div className='w-[48%] h-auto'>
                                                     <img src={elem.image} className='w-full h-[450px] px-10' />
                        
                                                     <div className='flex justify-center gap-5 my-7 px-10'>
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                        
                                                         <div className='w-1/4'>
                                                             <img src={elem.image} className='w-full h-auto' />
                                                         </div>
                                                     </div>
                        
                                                </div>
                                                <div className='w-[52%] h-auto'>
                                                    <h1 className='text-4xl font-semibold'>{elem.Name}</h1>
                                                    <p className='mt-7 text-custom-font'>Shop Harry.com for every day low prices. Free shipping on orders $35+ or Pickup In-store and get</p>
                                                    <p className='mt-10'><del>{elem.Delprice}</del> ${elem.proce}</p>
                        
                                                    <div className='flex mt-5'>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => {if(num !== 1) setNum(num - 1)}}>-</div>
                                                        <div className='border px-8 py-2 cursor-pointer'>{num}</div>
                                                        <div className='border px-5 py-2 cursor-pointer' onClick={() => setNum(num + 1)}>+</div>
                                                    </div>
                        
                                                    <div className='flex mt-5 gap-2'>
                                                        <button onClick={() => dispatch(addToCart(elem))} className='bg-black hover:bg-custom-pink hover:duration-500 text-white px-16 py-3'>Add to cart</button>
                                                        <button onClick={() => dispatch(addToWhishlist(elem))} className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-regular fa-heart text-xl"></i></button>
                                                        <button className='px-4 py-2 border hover:bg-custom-pink hover:text-white hover:duration-500'><i className="fa-solid fa-link text-xl"></i></button>
                                                    </div>
                        
                                                    <hr className='mt-10 mr-10' />
                        
                                                    <div><b>SKU:</b> 29045-SB-1</div>
                                                    <div className='cursor-pointer mt-1'><b>Categories:</b> iphone Cases, Android Cases, Accessrois</div>
                                                    <div className='mt-5 flex'><b>Tages: </b> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Planer</p> <p className='px-2 border hover:bg-custom-pink hover:text-white hover:duration-300'>Electric</p></div>
                                                    <div className='mt-5 flex gap-2'><b>Share: </b> <div><i className="fa-brands fa-facebook"></i></div> <div><i className="fa-brands fa-twitter"></i></div> <div><i className="fa-brands fa-linkedin"></i></div> <div><i className="fa-brands fa-youtube"></i></div> </div>
                                                </div>
                        
                                           </div>
                                            
                                          </div>
                                        </div>
                                      </div>
                                      <div className=" opacity-50 fixed inset-0 z-40 bg-black"></div>
                                    </div>
                                  ) : null}


                                  <div className='h-10 chain w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'>
                                      <i className="fa-solid fa-link text-xl hover:text-white pt-1 ps-2 text-gray-700 duration-500"></i></div>
                                </div>
                                <div className='h-full w-full overflow-hidden'>
                                  <img src={elem.image} alt='photo' className='image-scale bg-center h-full w-full z-20'></img>
                                </div>
                    
                                <button onClick={() => dispatch(addToCart(elem))} > <div className='addtocart h-12 w-full pt-2 bg-black text-white text-center font-semibold items-center justify-center absolute bottom-0 hover:bg-custom-pink duration-500'><i className=" me-2 fa-solid fa-cart-plus duration-500"></i>Add To Cart</div></button>
                            </div>
                    
                          <div className='h-auto w-full '>
                              <h1 className='text-gray-700 mt-2 hover:text-custom-pink hover:duration-500'>{elem.Name}</h1>
                              <h1 className='text-gray-700 font-semibold mt-1'><del>{elem.Delprice}</del> ${elem.proce}</h1>
                          </div>
                    
                          </div> 
                        )
                    })}
                    

                    </div>
                </div>
                </div>

                <nav className='mt-10'>
                    <ul className='flex justify-center gap-3'>
                        <li onClick={previousPage} className='cursor-pointer border px-4 py-2 hover:bg-custom-pink hover:text-white'>
                            <a className=''>
                            <i className="fa-solid fa-arrow-left"></i>  Previous
                            </a>
                        </li>
                        { numbers.map((pgPage,i) => (
                            <li key={i} onClick={() => changePage(pgPage)} className={`${currentPage === pgPage ? 'active' : '' } cursor-pointer page border px-4 py-2 hover:bg-custom-pink hover:text-white`} >
                                <a className=''>
                                    {pgPage}
                                </a>
                            </li>
                        ))}
                        <li onClick={nextPage} className='cursor-pointer border px-4 py-2 hover:bg-custom-pink hover:text-white'>
                            <a className=''>
                                Next <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
      </div>
    </>
  )
}

export default Shop