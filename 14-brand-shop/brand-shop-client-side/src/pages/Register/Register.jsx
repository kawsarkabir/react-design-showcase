import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const registerUser = { name, email, password, photo };
    console.log(registerUser);

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

    createUser(email, password)
      .then((result) => {
        navigate("/");
        console.log(result);

        fetch("https://brand-shop-server-one-bice.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(registerUser),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));

        Swal.fire({
          title: "success!",
          text: "Successfully create your account",
          icon: "success",
          confirmButtonText: "Cool",
        });
        profileUpdate(name, photo)
      })

      .catch((error) => {
        console.log(error);
        toast.error("Invalid Your user Name and Password");
      });
  };

  return (
    <div className="hero h-[70vh] my-20">
      <div className=" w-2/6 mx-auto flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className=" card shadow-xl mt-6 bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="photoURL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#FFBB38] border-none">Register</button>
            </div>
            <h1>
              Already Have a Account ?
              <Link to={"/login"} className="text-blue-800">
                Please Login
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
