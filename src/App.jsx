import Dashboard from "./components/Dashboard";
import BMI from "./components/BMI";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Workout from "./components/Workout";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/workout" element={<Workout />} />

        <Route path="/bmi" element={<BMI />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;