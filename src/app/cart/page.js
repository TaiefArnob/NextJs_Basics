'use client'

import React, { useEffect, useState } from 'react'

const Page = () => {
  const [cart, setCart] = useState([])

  const getCart = async () => {
    try {
      const res = await fetch('https://dummyjson.com/carts')
      const data = await res.json()
      setCart(data.carts)  // ✅ only set the carts array
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getCart()
  }, [])

  return (
    <div>
      <h1>Cart Items</h1>
      <ul>
        {cart.map((cartItem, i) => (
          <li key={i}>
            <strong>Cart #{cartItem.id}</strong>
            <ul>
              {cartItem.products.map((product, j) => (
                <li key={j}>{product.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page
