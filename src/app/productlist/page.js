"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Button from './button';

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let data = await fetch('https://fakestoreapi.com/products');
      data = await data.json();
      setProducts(data);
    };

    fetchProducts(); // ✅ call the async function inside useEffect
  }, []);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-24'>
     

      <Link href={"/"} className='mb-4'>
        <button className='p-3 bg-amber-500'>Go to Product Home</button>
      </Link>
      <h1 className='text-2xl mb-4'>Product List:</h1>
      <ul className='space-y-2'>
        {products.map(product => (
          <li key={product.id} className='bg-gray-100 p-2 rounded flex justify-between items-center'>
            {product.title}
            <Button price={product.price}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
