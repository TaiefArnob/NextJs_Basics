

import React from 'react'


const Page = () => {
  return (
    <div>
      <h1>User Page</h1>
    </div>
  )
}

export default Page


export async function generateMetadata({ params }) {
  return {
    title: "User Page title"
  }
}
