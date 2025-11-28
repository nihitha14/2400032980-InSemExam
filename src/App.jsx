import React from "react";
import "./App.css";

function App() {
  const department = {
    name: "Department of Computer Science & Engineering",
    university: "KL University",
    description:
      "The CSE department at KL University focuses on strong fundamentals, practical learning, and emerging technologies such as AI, ML, and Data Science.",
    location: "Vaddeswaram, Guntur, Andhra Pradesh",
    email: "cse@kluniversity.in",
    phone: "+91-0000-000000",
  };

  const faculty = [
    {
      id: 1,
      name: "Dr. A. Ravi Kumar",
      designation: "Professor & HOD",
      email: "ravi.kumar@kluniversity.in",
      phone: "+91-90000-00001",
    },
    {
      id: 2,
      name: "Ms. B. Sravani",
      designation: "Assistant Professor",
      email: "sravani.b@kluniversity.in",
      phone: "+91-90000-00002",
    },
    {
      id: 3,
      name: "Mr. C. Ramesh",
      designation: "Assistant Professor",
      email: "ramesh.c@kluniversity.in",
      phone: "+91-90000-00003",
    },
  ];

  return (
    <div className="page">
      {/* Department Section */}
      <div className="card">
        <h1>{department.name}</h1>
        <h3>{department.university}</h3>
        <p>{department.description}</p>
        <p>
          <b>Location:</b> {department.location}
        </p>
        <p>
          <b>Contact:</b> {department.email} | {department.phone}
        </p>
      </div>

      {/* Faculty Section */}
      <div className="card">
        <h2>Faculty Details</h2>
        <div className="faculty-grid">
          {faculty.map((f) => (
            <div key={f.id} className="faculty-card">
              <h3>{f.name}</h3>
              <p>{f.designation}</p>
              <p>Email: {f.email}</p>
              <p>Phone: {f.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
