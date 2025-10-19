import React,{ useState } from "react";

function Contact(){
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');


  const clickevent= (e)=>{
    e.preventDefault(0);
    alert (`${name} ${email}`);
     };

  return(
    <div>
      <h1>Fill this Form</h1>
      <form onSubmit={clickevent}>
        <input type ="text" placeholder="Enter name" value={name} onChange={(e)=>setName (e.target.value)}/>
        <br/>
        <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail (e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}
export default Contact;

