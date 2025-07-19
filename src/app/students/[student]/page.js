import React from "react";

const StudentDetailPage = ({ params }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <p>Student ID: {params.student}</p>
    </div>
  );
};

export default StudentDetailPage;
