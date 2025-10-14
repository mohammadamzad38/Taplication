import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();
  return (
    <header className="container">
      <div className="flex items-center justify-between p-4">
        <p className="text-5xl font-bold">Logo</p>
        <div className="space-x-5 ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/start-learning"}>Start-learning</NavLink>
          <NavLink to={"/tutorials"}>Tutorials</NavLink>
          <NavLink to={"/about-us"}>About us</NavLink>
          <NavLink to={"/my-profiles"}>My profiles</NavLink>
        </div>

        {user ? (
          <button
            onClick={() => setModal(true)}
            className="px-5 py-2 rounded-md cursor-pointer text-gray-800 font-bold bg-red-400"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className="px-5 py-2 cursor-pointer rounded-md text-gray-800 font-bold bg-green-400"
          >
            Login
          </NavLink>
        )}
      </div>
      <Toaster />
      {modal && (
        <div className="inset-0 z-50 fixed top-0 flex justify-center items-center ">
          <div className="flex flex-col gap-10 rounded-md bg-gradient-to-r from-[#4C7493] via-[#F19586] to-[#938CCC] text-center p-20 ">
            <h2 className="text-xl font-semibold mb-4">
              Are you sure you want to log out?
            </h2>
            <div className="space-x-5">
              <button
                className="px-5 py-2 rounded-md cursor-pointer text-black font-bold bg-green-400 transition duration-300"
                onClick={() =>
                  logout().then(() => {
                    setModal(false);
                    navigate("/login");
                    toast.success("Logout Succesfully");
                  })
                }
              >
                Yes, Log Out
              </button>{" "}
              <button
                className="px-5 py-2 rounded-md cursor-pointer text-black font-bold bg-red-400 transition duration-300"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
