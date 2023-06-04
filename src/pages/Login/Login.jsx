import { useContext, useEffect,  useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || '/'
  const {signIn} = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email,password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
        Swal.fire({
          title: 'User Login Successfully',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const capchaValidate = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value)) {
      setDisabled(false);
      e.target.value=''
    } else {
      alert("captcha does not matched");
      setDisabled(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Bistroo Boss | Login</title>
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
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
              
                  onBlur={capchaValidate}
                  type="text"
                  placeholder="type here above the captcha"
                  className="input input-bordered"
                  name="captcha"
                />
               
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  disabled={false}
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
              <p className="text-[#D1A054] text-center mt-5">
                New here ?{" "}
                <Link className="font-bold" to="/signUp">
                  Create a New Account
                </Link>
              </p>
              <SocialLogin></SocialLogin>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
