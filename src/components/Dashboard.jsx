import { useState } from "react";

import {
  FaFire,
  FaClock,
  FaTint,
FaMoon,
FaSun,
FaBars,
FaTimes,
} from "react-icons/fa";

import ProgressChart from "./ProgressChart";

function Dashboard() {

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <div
      className={`min-h-screen flex transition duration-500 ${
        darkMode
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >

      {/* Sidebar */}
      {/* Mobile Sidebar */}
<div
  className={`fixed top-0 left-0 h-full w-64 z-50 transform transition-transform duration-300 md:hidden ${
    menuOpen ? "translate-x-0" : "-translate-x-full"
  } ${
    darkMode
      ? "bg-gray-900 text-white"
      : "bg-white text-black"
  }`}
>

  <div className="flex justify-between items-center p-6 border-b border-gray-700">

    <h1 className="text-3xl font-bold text-green-400">
      FitTrack
    </h1>

    <button onClick={() => setMenuOpen(false)}>
      <FaTimes size={28} />
    </button>

  </div>

  <div className="flex flex-col gap-8 p-6 text-2xl">

    <button className="text-left hover:text-green-400 transition">
      Dashboard
    </button>

    <button className="text-left hover:text-green-400 transition">
      Workouts
    </button>

    <button className="text-left hover:text-green-400 transition">
      Diet Plan
    </button>

    <button className="text-left hover:text-green-400 transition">
      Analytics
    </button>

    <button className="text-left hover:text-red-400 transition">
      Logout
    </button>

  </div>

</div>
      <div
        className={`hidden md:block w-64 p-6 border-r transition duration-500 ${
          darkMode
            ? "bg-gray-900 border-gray-800 text-white"
            : "bg-gray-200 border-gray-300 text-black"
        }`}
      >

        <h1 className="text-5xl font-bold text-green-400">
          FitTrack
        </h1>

        <div className="mt-12 flex flex-col gap-8 text-2xl">

          <button className="text-left hover:text-green-400 transition">
            Dashboard
          </button>

          <button className="text-left hover:text-green-400 transition">
            Workouts
          </button>

          <button className="text-left hover:text-green-400 transition">
            Diet Plan
          </button>

          <button className="text-left hover:text-green-400 transition">
            Analytics
          </button>

          <button className="text-left hover:text-red-400 transition">
            Logout
          </button>

        </div>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">

        {/* Mobile Header */}
<div className="md:hidden flex justify-between items-center mb-8">
    <button
  onClick={() => setMenuOpen(true)}
  className="text-3xl"
>
  <FaBars />
</button>

<h1 className="text-3xl font-bold text-green-400">
  FitTrack
</h1>

<button
  onClick={() => setDarkMode(!darkMode)}
  className="p-3 rounded-full bg-green-500 text-black"
>

  {darkMode ? <FaSun /> : <FaMoon />}

</button>

          <h1 className="text-3xl font-bold text-green-400">
            FitTrack
          </h1>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full bg-green-500 text-black"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

        </div>

        {/* Theme Toggle Desktop */}
        <div className="hidden md:flex justify-end">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-4 rounded-full bg-green-500 text-black hover:bg-green-400 transition"
          >

            {darkMode ? <FaSun /> : <FaMoon />}

          </button>

        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mt-6">
          Welcome Back 💪
        </h1>

        <p
          className={`mt-3 text-xl ${
            darkMode
              ? "text-gray-400"
              : "text-gray-700"
          }`}
        >
          Track your progress and stay consistent.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {/* Calories */}
          <div
            className={`p-8 rounded-3xl border transition duration-500 hover:-translate-y-2 ${
              darkMode
                ? "bg-gray-900 border-gray-800 text-white"
                : "bg-gray-200 border-gray-300 text-black"
            }`}
          >

            <FaFire className="text-5xl text-orange-400" />

            <h2 className="text-2xl font-bold text-green-400 mt-6">
              Calories Burned
            </h2>

            <p className="text-5xl font-bold mt-6">
              520
            </p>

          </div>

          {/* Workout */}
          <div
            className={`p-8 rounded-3xl border transition duration-500 hover:-translate-y-2 ${
              darkMode
                ? "bg-gray-900 border-gray-800 text-white"
                : "bg-gray-200 border-gray-300 text-black"
            }`}
          >

            <FaClock className="text-5xl text-blue-400" />

            <h2 className="text-2xl font-bold text-green-400 mt-6">
              Workout Time
            </h2>

            <p className="text-5xl font-bold mt-6">
              1.5h
            </p>

          </div>

          {/* Water */}
          <div
            className={`p-8 rounded-3xl border transition duration-500 hover:-translate-y-2 ${
              darkMode
                ? "bg-gray-900 border-gray-800 text-white"
                : "bg-gray-200 border-gray-300 text-black"
            }`}
          >

            <FaTint className="text-5xl text-cyan-400" />

            <h2 className="text-2xl font-bold text-green-400 mt-6">
              Water Intake
            </h2>

            <p className="text-5xl font-bold mt-6">
              3L
            </p>

          </div>

        </div>

        {/* Workout Section */}
        <div
          className={`mt-12 p-8 rounded-3xl border transition duration-500 ${
            darkMode
              ? "bg-gray-900 border-gray-800 text-white"
              : "bg-gray-200 border-gray-300 text-black"
          }`}
        >

          <h2 className="text-4xl font-bold text-green-400">
            Today's Workout
          </h2>

          <div className="mt-8 space-y-5">

            {/* Workout Row */}
            <div
              className={`flex justify-between p-5 rounded-xl transition duration-500 ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <span className="text-xl font-semibold">
                Bench Press
              </span>

              <span className="text-xl">
                4 × 10
              </span>

            </div>

            {/* Workout Row */}
            <div
              className={`flex justify-between p-5 rounded-xl transition duration-500 ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <span className="text-xl font-semibold">
                Squats
              </span>

              <span className="text-xl">
                5 × 8
              </span>

            </div>

            {/* Workout Row */}
            <div
              className={`flex justify-between p-5 rounded-xl transition duration-500 ${
                darkMode
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >

              <span className="text-xl font-semibold">
                Deadlift
              </span>

              <span className="text-xl">
                4 × 6
              </span>

            </div>

          </div>

        </div>

        {/* Progress Chart */}
        <ProgressChart />

      </div>

    </div>

  );
}

export default Dashboard;