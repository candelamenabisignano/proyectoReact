import React from 'react'

const CartWidget = ({widget}) => {
  return (
    <div>
    <img src={widget} alt='cartWidget' className="h-7 w-7"/>
    <span className='h-5 w-5 rounded-full bg-red-800 absolute right-6 top-12 text-white text-center'>0</span>
    </div>
  )
}

export default CartWidget
