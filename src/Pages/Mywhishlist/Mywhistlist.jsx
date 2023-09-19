import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeToWhishlist } from '../../Saga/Action'

const Mywhistlist = () => {

  let dispatch = useDispatch()
  let cartData = useSelector((state) => state.whishData)
  
  return (
    <>
      <div className='container-2xl'>
        <div className='bg-gray-100 pt-40 pb-36 text-center'>
          <h1 className='text-7xl font-bold'>My Wishlist</h1>
          <h1 className='mt-4'>Home . <span className='text-custom-font'>Wishlist</span></h1>
        </div>

        <div className='w-11/12 xl:w-9/12 h-9 mx-auto'>
          <Link to='/Shop' className='text-lg flex items-center bg-gray-200 mt-14 px-5 py-3'>Countinue shopping</Link>
        </div>

      <table className='table-auto w-11/12 xl:w-9/12 mx-auto mt-12 text-lg'>
        <thead>
          <tr className='border'>
            <th className='border p-5'>Images</th>
            <th className='border p-5'>Product</th>
            <th className='border p-5'>Unit price</th>
            <th className='border p-5'>Quntity</th>
            <th className='border p-5'>Total</th>
            <th className='border p-5'>remove</th>
          </tr>
        </thead>

        <tbody>
          {
            cartData.map((item) => 
              <tr key={item.id} className='border text-center'>
                <td className='border'><img src={item.image} className='w-auto h-24 mx-auto my-3' /></td>
                <td className='border'>{item.Name}</td>
                <td className='border'>${item.proce.toFixed(2)}</td>
                <td className='flex justify-center items-center mt-10 gap-5'>
                  <button className='border px-3 py-1'>-</button>
                  <p className=''>1</p>
                  <button className='border px-3 py-1' onClick={() => dispatch(addToCart(item))}>+</button>
                </td>
                <td className='border'>${item.proce.toFixed(2)}</td>
                <td className='border'><button onClick={() => dispatch(removeToWhishlist(item.id))}>x</button></td>
              </tr>
            )
          }
        </tbody>
      </table>


      <div className='w-11/12 xl:w-9/12 mx-auto'>
        <Link to='/Mycart' className='bg-black text-white px-7 py-5 font-bold '><button className='mt-14'>Go to cart</button></Link>
      </div>


        </div>
        </>
        )
      }
      
export default Mywhistlist