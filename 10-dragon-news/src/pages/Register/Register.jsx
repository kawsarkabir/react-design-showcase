import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Header from "../Shared/Header/Header";

const Register = () => {
  const { currentUser } = useContext(AuthContext);


  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    currentUser(email, password)
    .then(result=>  {
        console.log(result.user);
    })
    .catch(error=>{
        console.log(error);
    })
  };
  return (
    <>
      <Header></Header>

      <div className="hero min-h-screen ">
        <div className="hero-content flex-col ">
          <div className="text-center  ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <h1 className="text-center">
                Already have acoount ?{" "}
                <Link to={`/login`} className="text-blue-800">
                  login
                </Link>
              </h1>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
