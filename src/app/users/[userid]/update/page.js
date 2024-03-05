"use client";
import { useEffect, useState } from "react";
import "./style.css";
import { PUT } from "@/app/api/users/[id]/route";
export default function page({ params }) {
  let id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = async () => {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    setName(data.result.name);
    setAge(data.result.age);
    setEmail(data.result.email);
  };
  const updateUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + id, {
      method: "PUT",
      body: JSON.stringify({ name, age, email }),
    });
    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("user information updated");
    } else {
      alert("Please try with valid input");
    }
  };
  return (
    <div>
      <h1>update your detail</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
        className="input-feild"
      />
      <input
        type="text"
        value={age}
        placeholder="Enter Your Name"
        onChange={(e) => setAge(e.target.value)}
        className="input-feild"
      />
      <input
        type="text"
        value={email}
        placeholder="Enter Your Name"
        onChange={(e) => setEmail(e.target.value)}
        className="input-feild"
      />
      <button className="btn" onClick={updateUser}>
        Update User
      </button>
    </div>
  );
}

// "use client"
// import './../../../style.css'
// import {useEffect, useState} from "react"

// export default function Page({params}){
//     let id = params.userid
//     const [name,setName]=useState("");
//     const [age,setAge]=useState("");
//     const [email,setEmail]=useState("");

//     useEffect(()=>{
//         getUserDetails()
//     },[])
//     const getUserDetails = async()=>{
//         let data = await fetch("http://localhost:3000/api/users/"+id);
//         data = await data.json();
//         setName(data.result.name)
//         setAge(data.result.age)
//         setEmail(data.result.email)
//     }
//     const updateUser = async () => {
//         let result = await fetch ("http://localhost:3000/api/users/"+id,{
//             method: "PUT",
//             body:JSON.stringify({name,age,email})
//         });
//         result = await result.json()
//         console.log(result);
//         if(result.success){
//             alert("User Information Updated")
//         }else{
//             alert("Please Try With Valid Input")
//         }
//     }

//     return(
// <div className="container">
// <div className="main-div">
// <h1>Update Users Details</h1>
//   <input
//     type="text"
//     value={name}
//     placeholder="Enter Your Name"
//     onChange={(e) => setName(e.target.value)}
//     className="input-field"
//   />
//   <input
//     type="number"
//     value={age}
//     placeholder="Enter Your Age"
//     onChange={(e) => setAge(e.target.value)}
//     className="input-field"
//   />
//   <input
//     type="email"
//     value={email}
//     placeholder="Enter Your Email"
//     onChange={(e) => setEmail(e.target.value)}
//     className="input-field"
//   />
//   <button onClick={updateUser} className="btn">
//     Add User
//   </button>
// </div>
// </div>
//     )
// }
