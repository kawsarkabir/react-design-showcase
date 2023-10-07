import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Shared/Header/Header";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {
    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()


  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div>
        <div className="hero min-h-screen ">
          <div className="hero-content flex-col ">
            <div className="text-center  ">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
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
                  new here ?{" "}
                  <Link to={`/register`} className="text-blue-800">
                    create new account
                  </Link>
                </h1>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
