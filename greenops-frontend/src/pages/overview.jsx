
import {
  Server,
  Cpu,
  MemoryStick,
  Zap,
  Leaf,
  AlertTriangle,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
} from "recharts";

import MetricCard from "../components/MetricCard";

// SIMULATED DATA FOR FRONTEND DEVELOPMENT
const metrics = [
  {
    title: "Total Monitored Servers",
    value: "120",
    description: "Servers registered",
    icon: Server,
    color: "green",
  },
  {
    title: "Average CPU Utilization",
    value: "64",
    unit: "%",
    description: "Across all servers",
    icon: Cpu,
    color: "blue",
  },
  {
    title: "Average RAM Utilization",
    value: "72",
    unit: "%",
    description: "Memory consumption",
    icon: MemoryStick,
    color: "purple",
  },
  {
    title: "Energy Consumption",
    value: "2,450",
    unit: "kWh",
    description: "Estimated consumption",
    icon: Zap,
    color: "orange",
  },
  {
    title: "Carbon Emissions",
    value: "1,715",
    unit: "kg CO₂e",
    description: "Estimated emissions",
    icon: Leaf,
    color: "green",
  },
  {
    title: "Detected Anomalies",
    value: "8",
    description: "Requires investigation",
    icon: AlertTriangle,
    color: "red",
  },
];

// Simulated historical performance
const performanceData = [
  { time: "09:00", cpu: 35, ram: 45 },
  { time: "10:00", cpu: 42, ram: 48 },
  { time: "11:00", cpu: 55, ram: 52 },
  { time: "12:00", cpu: 48, ram: 58 },
  { time: "13:00", cpu: 65, ram: 62 },
  { time: "14:00", cpu: 60, ram: 67 },
  { time: "15:00", cpu: 72, ram: 70 },
];

const energyData = [
  { day: "Mon", energy: 320 },
  { day: "Tue", energy: 350 },
  { day: "Wed", energy: 300 },
  { day: "Thu", energy: 380 },
  { day: "Fri", energy: 340 },
  { day: "Sat", energy: 290 },
  { day: "Sun", energy: 270 },
];

const activities = [
  {
    server: "SRV-001",
    activity: "High CPU utilization detected",
    status: "Warning",
    time: "10 minutes ago",
  },
  {
    server: "SRV-014",
    activity: "Server optimization suggested",
    status: "Pending",
    time: "25 minutes ago",
  },
  {
    server: "SRV-025",
    activity: "Performance monitoring completed",
    status: "Success",
    time: "40 minutes ago",
  },
];

export default function Overview() {
  return (
    <div className="space-y-8">

      {/* Dashboard Heading */}
      <div className="flex flex-wrap justify-between items-center gap-3">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Overview Dashboard
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Monitor your cloud infrastructure and sustainability performance.
          </p>
        </div>

        <div className="bg-yellow-50 text-yellow-700 px-3 py-2 rounded-lg text-xs font-medium">
          Demo data · Simulated
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

        {metrics.map((metric) => (
          <MetricCard
            key={metric.title}
            {...metric}
          />
        ))}

      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Infrastructure Performance
        </h2>

        <p className="text-sm text-gray-500 mt-1 mb-6">
          CPU and RAM utilization over time
        </p>

        <div className="w-full h-80">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={performanceData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="time" />

              <YAxis
                domain={[0, 100]}
                unit="%"
              />

              <Tooltip />
              <Legend />

              <Line
                type="monotone"
                dataKey="cpu"
                name="CPU Usage"
                stroke="#16a34a"
                strokeWidth={3}
              />

              <Line
                type="monotone"
                dataKey="ram"
                name="RAM Usage"
                stroke="#3b82f6"
                strokeWidth={3}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* Energy Chart */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Energy Consumption
        </h2>

        <p className="text-sm text-gray-500 mt-1 mb-6">
          Estimated daily energy usage in kWh
        </p>

        <div className="w-full h-72">

          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={energyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="day" />

              <YAxis />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="energy"
                name="Energy"
                stroke="#16a34a"
                fill="#86efac"
                fillOpacity={0.5}
              />

            </AreaChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Recent Infrastructure Activity
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full text-sm text-left">

            <thead>
              <tr className="border-b text-gray-500">
                <th className="py-3">Server</th>
                <th className="py-3">Activity</th>
                <th className="py-3">Status</th>
                <th className="py-3">Time</th>
              </tr>
            </thead>

            <tbody>
              {activities.map((activity) => (
                <tr
                  key={activity.server}
                  className="border-b last:border-0"
                >
                  <td className="py-4 font-medium">
                    {activity.server}
                  </td>

                  <td className="py-4">
                    {activity.activity}
                  </td>

                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.status === "Success"
                        ? "bg-green-100 text-green-700"
                        : activity.status === "Warning"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {activity.status}
                    </span>
                  </td>

                  <td className="py-4 text-gray-500">
                    {activity.time}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}
