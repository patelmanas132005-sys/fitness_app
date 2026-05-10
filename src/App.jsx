import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Routes>
  <Route path="/" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/bmi" element={<BMI />} />
  <Route path="/workout" element={<Workout />} />
</Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;