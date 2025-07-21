import Link from "next/link";
import React from "react";

async function getPost() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  let posts = await getPost();

  return (
    <div>
      <Link href={"/"}>
        <button className="p-3 bg-amber-500 ">Back to Home</button>
      </Link>
      <h1 className="text-2xl mb-4">Posts Page</h1>

      {posts.map((post) => (
        <div key={post.id} className="bg-gray-100 p-4 mb-4 rounded">
          {" "}
          <h2 className="text-xl font-bold">{post.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default page;
