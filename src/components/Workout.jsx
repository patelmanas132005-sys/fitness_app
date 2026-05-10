import { useEffect, useState } from "react";

function Workout() {

  const [exercise, setExercise] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const [workouts, setWorkouts] = useState(() => {

    const savedWorkouts =
      localStorage.getItem("workouts");

    return savedWorkouts
      ? JSON.parse(savedWorkouts)
      : [];

  });

  // Save to LocalStorage
  useEffect(() => {

    localStorage.setItem(
      "workouts",
      JSON.stringify(workouts)
    );

  }, [workouts]);

  // Add Workout
  const addWorkout = () => {

    if (!exercise || !sets || !reps) {
      return;
    }

    const newWorkout = {
      exercise,
      sets,
      reps,
    };

    setWorkouts([...workouts, newWorkout]);

    setExercise("");
    setSets("");
    setReps("");

  };

  // Delete Workout
  const deleteWorkout = (indexToDelete) => {

    const updatedWorkouts =
      workouts.filter(
        (_, index) => index !== indexToDelete
      );

    setWorkouts(updatedWorkouts);

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      {/* Heading */}
      <h1 className="text-5xl font-bold text-green-400">
        Workout Tracker 💪
      </h1>

      <p className="text-gray-400 mt-3 text-xl">
        Add and manage your daily workouts.
      </p>

      {/* Form */}
      <div className="bg-gray-900 mt-10 p-8 rounded-3xl border border-gray-800 max-w-2xl">

        {/* Exercise */}
        <input
          type="text"
          placeholder="Exercise Name"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
          className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-green-400"
        />

        {/* Sets & Reps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">

          <input
            type="number"
            placeholder="Sets"
            value={sets}
            onChange={(e) => setSets(e.target.value)}
            className="p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-green-400"
          />

          <input
            type="number"
            placeholder="Reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className="p-4 rounded-xl bg-black border border-gray-700 outline-none focus:border-green-400"
          />

        </div>

        {/* Button */}
        <button
          onClick={addWorkout}
          className="mt-6 bg-green-500 hover:bg-green-400 transition px-8 py-4 rounded-xl text-black font-bold"
        >
          Add Workout
        </button>

      </div>

      {/* Workout List */}
      <div className="mt-10 space-y-5 max-w-2xl">

        {workouts.length === 0 ? (

          <p className="text-gray-500 text-lg">
            No workouts added yet.
          </p>

        ) : (

          workouts.map((workout, index) => (

            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 flex justify-between items-center"
            >

              <div>

                <h2 className="text-2xl font-bold text-green-400">
                  {workout.exercise}
                </h2>

                <p className="text-gray-400 mt-2">
                  {workout.sets} Sets × {workout.reps} Reps
                </p>

              </div>

              {/* Delete Button */}
              <button
                onClick={() => deleteWorkout(index)}
                className="bg-red-500 hover:bg-red-400 transition px-5 py-2 rounded-lg font-bold"
              >
                Delete
              </button>

            </div>

          ))

        )}

      </div>

    </div>

  );
}

export default Workout;