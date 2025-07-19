"use client";

import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  console.log(params); // This logs in browser

  return (
    <div>
      {params.lecture?.[0] || "No lecture segment"}
    </div>
  );
};

export default Page;
