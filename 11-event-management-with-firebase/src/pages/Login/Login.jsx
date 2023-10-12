import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
 

const Login = () => {
   
  const location = useLocation();
  const navigate = useNavigate();
  const { signIn, logInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name);

    // sign in with email and password
    signIn(email, password)
      .then(() => {
        toast.success("Login successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("password and email doesnot match");
      });
  };
  const handleGoogleLogin = () => {
    // login with google
    logInWithGoogle()
    .then(()=>{
      navigate('/')
    })
    
    .catch();
  };
  return (
    <div>
      <div  className="hero min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                <button className="btn btn-primary">Login</button>
              </div>
             
              <div className="flex justify-center mt-2">
              <FaGoogle onClick={handleGoogleLogin} className="text-3xl"></FaGoogle>
              </div>
      
              <p className="text-md text-center sm:px-6 text-gray-400">
                Create a New Account ?
                <Link to={`/register`} className="underline text-blue-600 ml-5">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
