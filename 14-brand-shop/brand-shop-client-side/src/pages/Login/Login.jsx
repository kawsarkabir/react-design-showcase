import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logIn, logInWithGoogle } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = { email, password };
    console.log(loginUser);

    // login  with  email and password
    logIn(email, password)
      .then(() => {
        toast.success("Login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("password and email doesnot match");
      });
  };
  const handleGoogleLogin = () => {
    // login with google
    logInWithGoogle()
      .then(() => {
        navigate("/");
      })

      .catch();
  };
  return (
    <div className="hero h-[70vh]">
      <div className="w-2/6 mx-auto flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card mt-5  shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn border-none bg-[#FFBB38]">Login</button>
            </div>
            <div className="  text-center mt-2">
              <button onClick={handleGoogleLogin} className="btn">
                Sign in with Google
                <i className="fa-brands fa-google text-3xl"></i>
              </button>
            </div>

            <h1>
              New to Here ?
              <Link to={"/register"} className="text-blue-800">
                Please Register
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
