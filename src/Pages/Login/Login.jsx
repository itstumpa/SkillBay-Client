import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";
import { useAuth } from "../../contexts/AuthContext";
import Loginpana from "../../assets/Loginpana.png"


const googleProvider = new GoogleAuthProvider();

const Login = () => {
  const { user, loading } = useAuth(); 
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";

 useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);


  //  Handle email/password login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        toast.success("Successfully logged in!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
        toast.error("Wrong email or password. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No account found with this email.");
      } else if (error.code === "auth/wrong-password") {
        // Legacy support
        toast.error("Wrong password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.");
      } else if (error.code === "auth/user-disabled") {
        toast.error("This account has been disabled.");
      } else if (error.code === "auth/too-many-requests") {
        toast.error("Too many failed attempts. Please try again later.");
      } else {
        toast.error(error.message);
      }
    });
};

  // Handle Google login
  const handleGoogleSignin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        toast.success("Google sign-in successful!");
        navigate(from, { replace: true }); 
      })
      .catch((e) => {
         if (e.code === "auth/popup-closed-by-user") {
          toast.info("Sign-in cancelled.");
        } else if (e.code === "auth/popup-blocked") {
          toast.error("Popup blocked. Please allow popups for this site.");
        } else {
          toast.error(e.message);
        }
  });
}

  

  const [email, setEmail] = useState("");


 if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  } 

 return (
  <div className="min-h-screen bg-gray-900/30 flex items-center justify-center px-4 py-20">
    <div className="flex bg-white rounded-2xl shadow-2xl max-w-[1100px] w-full overflow-hidden relative">
      
      {/* Close Button */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors duration-200"
        aria-label="Close"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Image Section */}
      <div className="lg:flex justify-center items-center hidden w-1/2 bg-linear-to-br from-emerald-50 to-green-100 p-12">
        <img
          className="w-full max-w-[400px] h-auto"
          src={Loginpana}
          alt="Login illustration"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-8 md:p-12">
        <form onSubmit={handleLogin}>
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Login now!</h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
  Email
</label>
<input
  type="email"
  name="email"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="input w-full border border-gray-300 bg-white text-gray-900 focus:outline-none"
  placeholder="Enter your email"
/>

<div className="relative">
  <label className="block text-sm font-medium text-gray-700 mt-3 mb-1">
    Password
  </label>
  <input
    type={show ? "text" : "password"}
    name="password"
    required
    className="input w-full border border-gray-300 bg-white text-gray-900 pr-12 focus:outline-none"
    placeholder="Enter your password"
  />
</div>
              <span
                onClick={() => setShow(!show)}
                className="absolute right-14 top-54 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {show ? <Eye size={20} /> : <EyeClosed size={20} />}
              </span>
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-sm text-green-600 hover:text-green-700 font-medium"
              >
                Forgot password?
              </button>
            </div>

            <button 
              type="submit" 
              className="btn w-full bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg"
            >
              Login
            </button>

            {/* OR divider */}
            <div className="flex items-center justify-center gap-3 my-6">
              <div className="h-px flex-1 bg-gray-300"></div>
              <span className="text-sm text-gray-500">or</span>
              <div className="h-px flex-1 bg-gray-300"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn w-full bg-white hover:bg-gray-50 text-gray-700 border-gray-300"
            >
              <svg
                aria-label="Google logo"
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>

          <p className="text-center mt-6 text-gray-600">
            New to our website?{" "}
            <Link className="text-green-600 hover:text-green-700 font-semibold hover:underline" to="/register">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
);
};

export default Login;
