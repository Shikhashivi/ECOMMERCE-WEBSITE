import React from 'react'


const CartProduct = ({}) => {
  
  
  return (
    <div className='d-flex border'>
        <img src={product.image} className='w-25 h-25' alt="" />
        <div className="detail ">
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
            <div className="buttons">
                <button className='rounded-circle px-2'><b>-</b></button>
                <button className='rounded'>{product.quantity}</button>
                <button className='rounded-circle px-2'><b>+</b></button>
            </div>
            <button className='btn btn-sm btn-warning'>Remove</button>
        </div>
      </div>
  )
}

export default CartProduct