import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

export default function Login() {
  const { signInUser, setUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        navigate(location.state ? location.state : "/");
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Toaster />
      <div className="hero-content my-25 flex-col ">
        <h1 className="text-5xl font-bold mb-10">Login now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin} className="form space-y-2">
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div className="text-center mt-4">
                <a
                  href="/register"
                  className="link link-hover hover:text-green-500 font-bold"
                >
                  Create now !!
                </a>
              </div>
              <button
                onClick={() => toast.success("Your account login successfully")}
                className="btn w-full btn-neutral mt-4"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
