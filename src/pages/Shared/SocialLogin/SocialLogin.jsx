import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogle = () => {
    googleSignIn()
      .then((result) => {
        const googleLoggedUser = result.user;
        const savedUser = {name: googleLoggedUser.displayName, email: googleLoggedUser.email}
        console.log(googleLoggedUser);
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body : JSON.stringify(savedUser)
          
        })
        .then(res=>res.json())
        .then(data=>{
          if(data.insertedId){
            alert('data was added')
          }
        })
        navigate(from, {replace: true});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center my-2">
        <button onClick={handleGoogle} className="btn btn-circle btn-outline ">
          <FaGoogle></FaGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
