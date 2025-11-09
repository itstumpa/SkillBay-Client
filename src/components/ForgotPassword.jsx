// import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase.config";
import { useState, useEffect } from "react";
import { NavLink, useSearchParams } from "react-router";



const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.warning("Please enter your email first.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

   const [searchParams] = useSearchParams();

  useEffect(() => {
    const emailFromQuery = searchParams.get("email");
    if (emailFromQuery) {
      setEmail(emailFromQuery);
    }
  }, [searchParams]);


  return (
    <div className="mb-10 card w-full max-w-sm mx-auto mt-34 shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      <form onSubmit={handleForgotPassword}>
        <label className="label">Email Address</label>
        <input
          type="email"
          className="input input-bordered w-full mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-full">
          Send Reset Email
        </button>

        <NavLink
  to="/login"
  className="text-blue-600 underline flex justify-end text-center p-2"
>
  Back to login
</NavLink>
      </form>
    </div>
  );
};

export default ForgotPassword;
