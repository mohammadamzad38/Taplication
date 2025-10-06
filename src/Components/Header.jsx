import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Header() {
  const { user } = useContext(AuthContext);
  return (
    <header className="container">
      <div className="flex items-center justify-between p-4">
        <p className="text-5xl font-bold">Logo</p>
        <div className="space-x-5">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/start-learning"}>Start-learning</NavLink>
          <NavLink to={"/tutorials"}>Tutorials</NavLink>
          <NavLink to={"/about-us"}>About us</NavLink>
          <NavLink to={"/my-profiles"}>My profiles</NavLink>
        </div>
        <a className={`px-5 py-2 rounded-md text-gray-800 font-bold ${ user? "bg-red-400":"bg-green-400"}`} href="/login">
          {user ? "Logout" : "Login"}
        </a>
      </div>
    </header>
  );
}
