import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
 
 


const Register = () => {
 
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    // const photo = form.get("photo")

    const password = form.get("password");

    let passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).+$/;
    if (password.length < 6) {
      toast.error("Passwords must be at least 6 characters long");
      return false;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return false;
    } else if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one Spicial charactor");
      return false;
    }

    // create a new user
    createUser(email, password)
      .then(() => {
        /* updateProfile(auth.currentUser, {
          displayName: name,
          // photoURL: photo,
        })
          .then(() => {})
          .catch(() => {}); */
        toast.success("Register Successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Invalid Your user Name and Password");
      });
  };
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col  ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">photo</span>
                </label>
                <input
                  name="photo"
                  type="file"
                  placeholder="photo"
                  className="input input-bordered"
                />
              </div> */}
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
                <button className="btn btn-primary">Register</button>
              </div>
              <p className="text-md text-center sm:px-6 text-gray-400">
                Already have an account ?
                <Link to={`/login`} className="underline text-blue-600 ml-5">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
