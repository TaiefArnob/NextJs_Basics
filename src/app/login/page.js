import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-between p-24'>
        <h1 className="text-4xl font-bold">Login</h1>
        <Link href={"/about"}>
        <button className='p-3 bg-amber-700 '>Go to About</button>
        </Link>

        <Link href={"/"}>
        <button className='p-3 bg-amber-500 '>Go to Home</button>
        </Link>
    </div>
  )
}

export default Page
