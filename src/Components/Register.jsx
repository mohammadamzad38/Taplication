import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider.jsx";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { createNewUser, setUser, signInWithGoogle, updateuserProfile } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must have at least one uppercase");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must have at least one lowercase");
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        updateuserProfile({ displayName: name, photoURL: photo });
        setUser(user);
        toast.success("Register successfully");
        e.target.reset();
        navigate("/");
        console.log("ffffffffffffffffff", user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignUpWithGoogle = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      setUser(user);
      toast.success("Successfully SignUp with Google");
      navigate("/");
    });
  };
  return (
    <div className="container">
      <div className="hero-content my-25 flex-col ">
        <h1 className="text-5xl font-bold mb-10">
          Register your new account !
        </h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister} className="form space-y-2">
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="name"
              />
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="email"
              />
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="photo url"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="password"
              />
              {error && (
                <p className="text-red-400 text-xs font-semibold mt-2">
                  {error}
                </p>
              )}
              <div className="text-center mt-4">
                <a
                  href="/login"
                  className="link link-hover hover:text-green-500 font-bold"
                >
                  Login now ?
                </a>
              </div>
              <button type="submit" className="btn w-full btn-neutral mt-4">
                Create account
              </button>
            </form>
            <button
              onClick={() => handleSignUpWithGoogle()}
              className="btn w-full btn-neutral mt-4"
            >
              SignUp with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
