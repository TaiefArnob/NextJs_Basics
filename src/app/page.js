"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const handleSubmit =()=>{
    router.push('/login');
  }

  const apple=()=>{
    alert('Hello Apple');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-4xl font-bold">Welcome to My Next.js App</h1>
      
      <button className="p-4 bg-amber-600 rounded-lg shadow-amber-50" onClick={apple}>Click Me</button>

      <Link href={"/about"}>
        <button className='p-3 bg-amber-500 '>Go to About</button>
        </Link>

        <Link href={"/login"}>
        <button className='p-3 bg-amber-500 '>Go to Login</button>
        </Link>

      <button onClick={handleSubmit} className="p-3 bg-amber-700">Submit</button>
      </main>
  );
}


