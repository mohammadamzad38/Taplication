import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

export default function Login() {
  const { signInUser, setUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    if (!email) {
      setError("email should not empty!");
    }
    if (!password) {
      setError("input your password");
    }
    if (email && password) {
      toast.success("Login Successful");
    }

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSinInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Successfully login with Google");
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
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
              {error && <p className="my-2 text-red-500">{error}</p>}

              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              {error}
              <div className="space-x-5 text-center mt-4">
                <a
                  href="/register"
                  className="link link-hover hover:text-green-500 font-bold"
                >
                  Create now!
                </a>

                <a
                  className="link link-hover hover:text-green-500 font-bold"
                  href=""
                >
                  Forget Password?
                </a>
              </div>
              <button
                type="submit"
                className="btn w-full btn-neutral mt-4 mandatory"
              >
                Login
              </button>
            </form>
            <button
              className="flex text-center justify-center items-center gap-3 bg-gray-400 text-black btn w-full btn-neutral mt-4 mandatory"
              onClick={handleSinInWithGoogle}
            >
              Sign in with Google <FaGoogle />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
