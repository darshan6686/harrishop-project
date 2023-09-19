import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { decrmentQuntity, incrmentQuntity, removeToCart } from '../../Saga/Action'

const Mycart = () => {

  let dispatch = useDispatch()
  let cartData = useSelector((state) => state.cartData)
  let cartPrice = cartData.length && cartData.map((item) => item.Price).reduce((pre,next) => pre + next)


  return (
    <>
      <div className='container-2xl text-center pb-20'>
        <div className='bg-gray-100 pb-20 pt-40'>
          <h1 className='text-7xl font-bold'>My Cart</h1>
          <h1 className='mt-4'>Home . <span className='text-custom-font'>Cart</span></h1>
        </div>
      

          <div className='w-11/12 xl:w-9/12 h-9 mx-auto'>
            <Link to='/Shop' className='text-lg flex items-center bg-gray-200 mt-14 px-5 py-3'>Countinue shopping</Link>
          </div>

          <table className='table-auto w-11/12 xl:w-9/12 mx-auto mt-12 text-lg '>
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
                      <button className='border px-3 py-1' onClick={() => dispatch(decrmentQuntity(item.id))}>-</button>
                      <p className=''>{item.quntity}</p>
                      <button className='border px-3 py-1' onClick={() => dispatch(incrmentQuntity(item.id))}>+</button>
                    </td>
                    <td className='border'>${item.Price.toFixed(2)}</td>
                    <td className='border'><button onClick={() => dispatch(removeToCart(item.id))}>x</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>

          
            <div className='w-10/12 h-auto flex justify-end mt-10'>
              <div className=''>
                <h1 className='text-2xl font-bold'>Cart Totals</h1>
                <h1 className='w-96 h-10 text-lg items-center mt-5 border flex justify-between px-4'> <p>Subtotal</p> <p> ${cartPrice.toFixed(2)}</p></h1>
                <h1 className='w-96 h-10 text-lg items-center border flex justify-between px-4'> <p>Total</p> <p> ${cartPrice.toFixed(2)}</p></h1>
              </div>
              </div>
              <button className='bg-custom-pink text-white px-7 py-3 font-bold float-right mr-[450px] mt-3'>Proceed to checkout</button>
          </div>
    
          </>
  )
}

export default Mycart