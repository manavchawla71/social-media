import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-500 flex items-center justify-center">
      <div className="w-full max-w-md bg-green-400 p-8 rounded-lg shadow-lg">
        <h1 className="font-bold text-3xl text-center text-black mb-6">
          The Ultimate Social Media App
        </h1>
        <p className="text-xl text-center text-white mb-4">Sign in to this</p>
        <form className="flex flex-col gap-4">
          <label className="font-semibold text-white">Username</label>
          <input
            type="text"
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter your username"
          />
          <label className="font-semibold text-white">Password</label>
          <input
            type="password"
            className="p-2 border border-gray-300 rounded"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full mt-4 py-2 rounded hover:bg-blue-600"
          >
            Sign In
          </button>
          <p className="text-center mt-4 text-white">
            Not a user?{" "}
            <Link to="/signup" className="text-blue-300 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
