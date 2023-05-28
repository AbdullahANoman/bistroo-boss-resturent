import { useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
const Login = () => {
    const [disabled,setDisabled] = useState(true)
    const captchaRef = useRef();
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  const capchaValidate = () =>{
    const value = captchaRef.current.value;
    if (validateCaptcha(value)) {
        setDisabled(false)
        captchaRef.current.value = ''
    }
    else{
        alert('captcha does not matched')
        setDisabled(true)
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
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
              ref={captchaRef}
                type="text"
                placeholder="type here above the captcha"
                className="input input-bordered"
                name="captcha"
              />
              <input onClick={capchaValidate} type="submit" value="Validate" className="btn btn-outline btn-xs" />
            </div>
            <div className="form-control mt-6">
              <input type="submit" disabled={disabled} value="Login" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
