import React, {useState} from 'react'
import { useEffect } from 'react'
import { productList } from '../Saga/Product/Productlist'
import { addToCart, addToWhishlist } from '../Saga/Action'
import { useSelector, useDispatch } from 'react-redux'

const Shop = () => {
  
  let [count, setCount] = useState("")

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

                <div className="py-3 border-none">
                <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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

                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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


                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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


                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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


                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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


                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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


                    <div className="py-3 border-none">
                        <details className="group">
                            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
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

                </div>
                </div>
                </div>


                <div className='w-10/12 h-auto mt-10'>
                    <div className='flex gap-14 flex-wrap'>
                    { count === "" && record.map((ele)=>{
                      return (
                      <div key={ele.id} className='main-product-card h-auto w-[290px] mt-5'>
                      <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                        <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div'>{ele.Sal}</div>
                        <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{ele.Pr}</div>
              
                        <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                            <button onClick={() => dispatch(addToWhishlist(ele))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>
                            <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
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

                    {record.filter((ell) => {return ell.categaty === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>
                                  <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
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


                    {record.filter((ell) => {return ell.type === count}).map((elem) => {
                        return(
                            <div key={elem.id} className='main-product-card h-auto w-[290px] mt-5'>
                            <div className='bg-[#F6F8FA] h-[350px] w-[320px] relative'>
                              <div className='z-4 bg-custom-pink text-sm h-auto text-white w-auto px-3 absolute mt-5  sale-div'>{elem.Sal}</div>
                              <div className='z-5 bg-black h-auto w-auto text-sm px-3 text-white mt-11 absolute discount-div'>{elem.Pr}</div>
                    
                              <div className='h-40 w-12 z-5 three-icon right-0 me-3 mt-8 absolute duration-500'>
                                  <button onClick={() => dispatch(addToWhishlist(elem))} className='h-10 heart w-10 mx-auto bg-white mt-2 shadow-md border duration-500 hover:bg-custom-pink rounded-sm'><i className="fa-regular fa-heart text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></button>
                                  <div className='h-10 eye w-10 mx-auto bg-white mt-3 shadow-md border duration-500 hover:bg-custom-pink hover:text-white rounded-sm'><i className="fa-regular fa-eye text-xl pt-1 ps-2 text-gray-700 hover:text-white duration-500"></i></div>
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

                    </div>
                </div>
                </div>

                <nav className='mt-10'>
                    <ul className='flex justify-center gap-3'>
                        <li>
                            <a className='border px-3 py-2 hover:bg-custom-pink hover:text-white' onClick={previousPage}>
                                Previous
                            </a>
                        </li>
                        {numbers.map((pgPage,i) => (
                            <li key={i} className={`${currentPage === pgPage ? 'active' : '' }`} >
                                <a onClick={() => changePage(pgPage)} className='border px-3 py-2 hover:bg-custom-pink hover:text-white'>
                                    {pgPage}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a className='border px-3 py-2 hover:bg-custom-pink hover:text-white' onClick={nextPage}>
                                Next
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