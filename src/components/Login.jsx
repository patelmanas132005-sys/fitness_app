import { Link, useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="bg-gray-900 w-full max-w-md p-10 rounded-3xl border border-gray-800 shadow-2xl">

        {/* Logo */}
        <h1 className="text-5xl font-bold text-center text-green-400">
          FitTrack
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Login to continue your fitness journey 🚀
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-8 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mt-5 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Forgot Password */}
        <div className="text-right mt-3">
          <a href="#" className="text-green-400 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
         onClick={() => navigate("/dashboard")}
        className="w-full mt-8 bg-green-500 hover:bg-green-400 transition duration-300 p-4 rounded-xl text-black font-bold text-lg"
        >
         Login
        </button>

        {/* Signup Link */}
        <p className="text-gray-400 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
             className="text-green-400 hover:underline"
        >
            Sign Up
        </Link>
        </p>

      </div>

    </div>
  );
}

export default Login;