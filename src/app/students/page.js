import Link from "next/link";
import React from "react";

const StudentListPage = () => {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        <li>
          <Link href="/students/1">Arnob</Link>
        </li>
        <li>
          <Link href="/students/2">Fahim</Link>
        </li>
        <li>
          <Link href="/students/3">Jidan</Link>
        </li>
        <li>
          <Link href="/students/4">Touhid</Link>
        </li>
        <li>
          <Link href="/students/5">Jahid</Link>
        </li>
        <li>
          <Link href="/students/6">Jion</Link>
        </li>
        <li>
          <Link href="/students/7">Mahin</Link>
        </li>
        <li>
          <Link href="/students/8">Rafsan</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentListPage;
