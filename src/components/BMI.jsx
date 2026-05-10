import { useState } from "react";

function BMI() {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBMI] = useState("");

  const calculateBMI = () => {

    const heightInMeters = height / 100;

    const result =
      weight / (heightInMeters * heightInMeters);

    setBMI(result.toFixed(2));
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">

      <div className="bg-gray-900 p-10 rounded-3xl w-full max-w-md border border-gray-800">

        <h1 className="text-4xl font-bold text-green-400 text-center">
          BMI Calculator
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Check your body mass index 💪
        </p>

        {/* Weight */}
        <input
          type="number"
          placeholder="Weight (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="w-full mt-8 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400"
        />

        {/* Height */}
        <input
          type="number"
          placeholder="Height (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full mt-5 p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-green-400"
        />

        {/* Button */}
        <button
          onClick={calculateBMI}
          className="w-full mt-8 bg-green-500 hover:bg-green-400 transition p-4 rounded-xl text-black font-bold"
        >
          Calculate BMI
        </button>

        {/* Result */}
        {bmi && (
          <div className="mt-8 text-center">

            <h2 className="text-3xl font-bold text-green-400">
              Your BMI
            </h2>

            <p className="text-5xl font-bold mt-4">
              {bmi}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default BMI;