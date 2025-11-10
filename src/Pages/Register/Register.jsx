import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
   getAdditionalUserInfo,
   updateProfile,
} from "firebase/auth";
import { Eye, EyeClosed } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase.config";
import Signup from "../../assets/Signup.png"
import { useAuth } from "../../contexts/AuthContext";


const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [photoURL, setPhotoURL] = useState("");
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  // const [user, setUser] = useState(null);
 const { user, loading } = useAuth();


  const location = useLocation();
  
  const from = location.state?.from?.pathname || "/";


  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, [user, navigate]);


  const handleGoogleSignin = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
    
      const additionalUserInfo = getAdditionalUserInfo(result);
      
      if (additionalUserInfo?.isNewUser) {
       
        toast.success("Registration successful! Welcome!");
      } else {
      
        toast.info("This email is already registered. You've been logged in!");
      }
      
      navigate(from, { replace: true });
    })
    .catch((e) => {
      console.log(e);
      if (e.code === "auth/popup-closed-by-user") {
        toast.info("Sign-in cancelled.");
      } else if (e.code === "auth/account-exists-with-different-credential") {
        toast.error("An account already exists with this email using a different sign-in method.");
      } else {
        toast.error(e.message);
      }
    });
};


  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.Name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include at least 1 uppercase, 1 lowercase, 1 number, 1 special character and be minimum 8 characters."
      );
      return;
    }

    

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (res) => {
      const user = res.user; 
      console.log("User created:", user);

      try {
        await updateProfile(user, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Profile updated successfully!");
      } catch (err) {
        console.error("Profile update failed:", err);
        toast.error("User created but profile not updated");
      }

      navigate("/"); 
    })
      .catch((e) => {
        console.log(e);
        console.log(e.code);
        if (e.code === "auth/email-already-in-use") {
          toast.error("This email is already registered. Please login instead.");
        } else if (e.code === "auth/weak-password") {
          toast.error("At least 8 digit er pass dite hobe");
        } else if (e.code === "auth/invalid-email") {
          toast.error("Invalid email format. Please check your email.");
        } else if (e.code === "auth/user-not-found") {
          toast.error("User not found. Please sign up first.");
        } else if (e.code === "auth/wrong-password") {
          toast.error("Wrong password. Please try again.");
        } else if (e.code === "auth/user-disabled") {
          toast.error("This user account has been disabled.");
        } else if (e.code === "auth/too-many-requests") {
          toast.error("Too many attempts. Please try again later.");
        } else if (e.code === "auth/operation-not-allowed") {
          toast.error("Operation not allowed. Please contact support.");
        } else if (e.code === "auth/network-request-failed") {
          toast.error("Network error. Please check your connection.");
        } else {
          toast.error(e.message || "An unexpected error occurred.");
        }
      });
  };

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
      <div className="lg:flex justify-center items-center hidden w-1/2 bg-gradient-to-br from-emerald-50 to-green-100 p-12">
        <img
          className="w-full max-w-[400px] h-auto"
          src={Signup}
          alt="Register illustration"
        />
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-8 md:p-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Register now!</h1>
        
        <form onSubmit={handleRegister}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="Name"
                required
                className="input w-full border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-gray-900"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="input w-full border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-gray-900"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type={show ? "text" : "password"}
                name="password"
                required
                className="input w-full border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-gray-900 pr-12"
                placeholder="Enter your password"
              />
              <span
                onClick={() => setshow(!show)}
                className="absolute right-4 top-11 cursor-pointer text-gray-500 hover:text-gray-700"
              >
                {show ? <Eye size={20} /> : <EyeClosed size={20} />}
              </span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="text"
                id="photoURL"
                required
                className="input w-full border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-gray-900"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                placeholder="Enter image URL"
              />
            </div>

            <button 
              type="submit" 
              className="btn w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg mt-2"
            >
              Register
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
              Register with Google
            </button>
          </div>
        </form>

        <p className="text-center mt-6 text-gray-600">
          Already have an Account?{" "}
          <Link className="text-green-600 hover:text-green-700 font-semibold hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);
};

export default Register;
