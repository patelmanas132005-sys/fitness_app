import { Link, useNavigate } from "react-router-dom";

function Register() {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="bg-gray-900 w-full max-w-md p-10 rounded-3xl border border-gray-800 shadow-2xl">

        {/* Logo */}
        <h1 className="text-5xl font-bold text-center text-green-400">
          FitTrack
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Create your fitness account 💪
        </p>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full mt-8 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mt-5 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Create password"
          className="w-full mt-5 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm password"
          className="w-full mt-5 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400 transition"
        />

        {/* Register Button */}
        <button
        onClick={() => navigate("/login")}
        className="w-full mt-8 bg-green-500 hover:bg-green-400 transition duration-300 p-4 rounded-xl text-black font-bold text-lg"
        >
            Create Account
        </button>

        {/* Login Link */}
        <p className="text-gray-400 text-center mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default Register;