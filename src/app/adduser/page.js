"use client";
import { useState } from "react";
import "./style.css";
export default function page() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    if (response.sucess) {
      alert("New User Added");
    } else {
      alert("Some Error with Data Please check and Try Again");
    }
    console.log(response);
  };
  return (
    <div className="add-user">
      <h1>Add New User</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
        className="input-feild"
      />
      <input
        type="number"
        value={age}
        placeholder="Enter Your Age"
        onChange={(e) => setAge(e.target.value)}
        className="input-feild"
      />
      <input
        type="email"
        value={email}
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input-feild"
      />
      <button className="btn" onClick={addUser}>
        Add User
      </button>
    </div>
  );
}
