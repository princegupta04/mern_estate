import { FaSearch } from "react-icons/fa";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center mx-w-6xl mx-auto p-3">
        <Link to="/">
        <h1 className="text-bold text-sm sm:text-xl flex flex-wrap">
          <span className="text-slate-500">Prince</span>
          <span className="text-slate-700">Estate</span>
        </h1>
        </Link>
       
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="bg-slate-200"></FaSearch>
        </form>

        <ul className="flex gap-4">

          <Link to="/home">  <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">Home</li></Link>
          <Link to="/about">  <li className="hidden sm:inline text-slate-800 hover:underline cursor-pointer">About</li></Link>
           <Link to="sing-in"> <li className=" text-slate-800 hover:underline text-l cursor-pointer">Sign-In</li></Link>
        </ul>
      </div>
    </header>
  );
}
