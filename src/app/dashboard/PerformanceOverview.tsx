"use client";
import { IoIosArrowForward } from "react-icons/io";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
const data = [
  { Grand: "10", students: 100 },
  { Grand: "20", students: 370 },
  { Grand: "30", students: 360 },
  { Grand: "40", students: 500 },
  { Grand: "50", students: 250 },
  { Grand: "60", students: 380 },
  { Grand: "70", students: 390 },
  { Grand: "80", students: 200 },
  { Grand: "90", students: 490 },
  { Grand: "100", students: 190 },
];
export default function PerformanceOverview() {
  return (
    <div>
      <header className="flex justify-between px-5 mt-5 items-center">
        <div className="flex gap-5">
          <h1 className="text-3xl font-bold text-black">
            Performance Overview
          </h1>
          <select
            name="overview"
            id="overview"
            className="p-3 bg-gray-300 rounded-xl px-5 outline-none cursor-pointer"
          >
            <option value="all courses" className="capitalize">
              all courses
            </option>
            <option value="all courses" className="capitalize">
              all courses
            </option>
            <option value="all courses" className="capitalize">
              all courses
            </option>
          </select>
        </div>
        <button className="text-blue-600 flex text-sm font-semibold items-center justify-between">
          View Detail <IoIosArrowForward className="ml-3" />
        </button>
      </header>
      <div className="w-full h-80 mt-5 border-2 border-gray-200 rounded-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="Grand" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="students" fill="#2d9cdb" barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
