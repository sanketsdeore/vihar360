import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { FiMail, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-800 px-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          Welcome Back
        </h1>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="relative">
            <FiMail className="absolute left-3 top-3 text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              id="email"
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <FiLock className="absolute left-3 top-3 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              id="password"
              onChange={handleChange}
              required
            />
          </div>

          {/* Sign In Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-lg uppercase font-semibold hover:opacity-90 transition-all disabled:opacity-70"
          >
            {loading ? "Signing In..." : "Sign In"}
          </motion.button>
          <OAuth />
        </form>

        {/* Sign Up Link */}
        <div className="flex justify-center gap-2 mt-5 text-gray-700 text-sm">
          <p>Don't have an account?</p>
          <Link
            to="/sign-up"
            className="text-blue-700 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 mt-5 text-center">{error}</p>}
      </motion.div>
    </div>
  );
}
