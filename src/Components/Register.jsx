import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider.jsx";

export default function Register() {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    console.log("ffffffffffffffffff", name, email, password, photo);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
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
              <div className="text-center mt-4">
                <a
                  href="/login"
                  className="link link-hover hover:text-green-500 font-bold"
                >
                  Login now ?
                </a>
              </div>
              <button className="btn w-full btn-neutral mt-4">
                Create account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
