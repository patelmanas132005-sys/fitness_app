import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProgressChart() {

  const data = [
    { day: "Mon", calories: 200 },
    { day: "Tue", calories: 350 },
    { day: "Wed", calories: 400 },
    { day: "Thu", calories: 300 },
    { day: "Fri", calories: 500 },
    { day: "Sat", calories: 650 },
    { day: "Sun", calories: 450 },
  ];

  return (

    <div className="bg-gray-900 mt-12 p-8 rounded-3xl border border-gray-800">

      <h2 className="text-4xl font-bold text-green-400">
        Weekly Progress 📈
      </h2>

      <div className="mt-10 h-[400px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="calories"
              stroke="#00ff88"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
}

export default ProgressChart;