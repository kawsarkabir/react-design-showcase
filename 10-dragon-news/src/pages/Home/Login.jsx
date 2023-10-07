import { Link } from "react-router-dom";
import Header from "../Shared/Header/Header";
 

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    console.log(form.get("password"));
  };
  return (
    <div>
      <Header></Header>
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
