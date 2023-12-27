import React from "react";
import {Link} from 'react-router-dom';

export default function SignUp() {
  return(
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp</h1>
      <form className="flex flex-col gap-4" >
        <input type="text" placeholder="username" className="border p-3 rounded-lg" />
        <input type="text" placeholder="email" className="border p-3 rounded-lg" />
        <input type="text" placeholder="password" className="border p-3 rounded-lg" />
        <button className="border bg-slate-700 rounded-lg p-3 uppercase text-white hover:opacity-90">sign up</button>
      </form>
      <div className="flex gap-2 my-4">
        <p>Have an Account ?</p>
        <Link to ={'/sign-in'}>
          <span className="text-blue-700 ">Sing in</span>
        </Link>
      </div>
    </div>
    
  )
}
