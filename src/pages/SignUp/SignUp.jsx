import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updatePhotoAndName, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/login";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, name, photoUrl } = data;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("registered user ", user);
        updatePhotoAndName(name, photoUrl)
          .then(() => {
            const saveUser = { name, email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("user added data", data);
                if (data.insertedId) {
                  Swal.fire({
                    title: "User Created Successfully . Please Login",
                    showClass: {
                      popup: "animate__animated animate__fadeInDown",
                    },
                    hideClass: {
                      popup: "animate__animated animate__fadeOutUp",
                    },
                  });
                }
              });
            reset();
            logOut();
            navigate(from, { replace: true });
          })
          .catch((error) => console.log(error.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <>
      <Helmet>
        <title>Bistroo Boss | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="mt-2 text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  {...register("photoUrl", { required: true })}
                  placeholder="Photo Url"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="mt-2 text-red-600">
                    Photo Url must be required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="mt-2 text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=).{6,}$/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="mt-2 text-red-600">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="mt-2 text-red-600">
                    Password must be 6 character{" "}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="mt-2 text-red-600">
                    Password must be used regular expression{" "}
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn -btn-primary"
                />
              </div>
              <p className="text-[#D1A054] text-center mt-5">
                Already Registered ?{" "}
                <Link className="font-bold" to="/login">
                  Go to log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
