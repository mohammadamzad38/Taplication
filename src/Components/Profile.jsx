import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mt-15 pl-20 bg-[#8E3C5C] rounded-tl-2xl">
        <img
          src={user.photoURL || "https://via.placeholder.com/100"}
          className="rounded-full ml-5 border w-[200px] h-[200px]"
          alt="Profile Picture"
        />
        <div className="text-xl space-y-2 max-w-3xl ml-10 mt-5 p-10 shadow-2xl border-t-5 border-[#B2CFD9] rounded-tl-xl bg-[#474359]">
          <p>
            <span className="font-bold">User name:</span> {user.displayName}
          </p>
          <p>
            <span className="font-bold">User email:</span> {user.email}
          </p>
          <div className="mt-10 flex justify-center">
            <a
              className="text-center hover:bg-[#507857] w-2/5 bg-[#AD815F] px-10 py-2 rounded-xl w-full shadow-2xl font-semibold text-gray-800"
              href="/"
            >
              Update Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
