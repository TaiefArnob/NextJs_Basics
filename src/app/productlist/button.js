"use client"
import React from 'react'

const Button = ({price}) => {
  return (
    <div>
      <button onClick={()=>alert(`Price : ${price}$`)} className='p-2 bg-black text-white rounded-xl'>Check Price</button>
    </div>
  )
}

export default Button
