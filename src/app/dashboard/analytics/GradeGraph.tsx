"use client";
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
  { mark: "A", students: 20 },
  { mark: "B", students: 7 },
  { mark: "C", students: 16 },
  { mark: "D", students: 4 },
  { mark: "F", students: 16 },
];
export default function GradeGraph() {
  return (
    <section className="flex gap-10 items-center justify-center">
      <div className="flex flex-col gap-3 w-3/12">
        <div className="bg-cyan-50 max-w-full p-5 rounded-2xl flex flex-col gap-5">
          <p>Total Students Enrolled</p>
          <h3 className="font-bold text-2xl text-cyan-500">30</h3>
        </div>
        <div className="bg-yellow-50 max-w-full p-5 rounded-2xl flex flex-col gap-5">
          <p>Average Final Grade</p>
          <h3 className="font-bold text-2xl text-yellow-600">30%</h3>
        </div>
        <div className="bg-orange-50 max-w-full p-5 rounded-2xl flex flex-col gap-5">
          <p>% of Students with A or B</p>
          <h3 className="font-bold text-2xl text-orange-500">65%</h3>
        </div>
      </div>
      <div className="mt-5 w-8/12 h-96 border-2 border-gray-200 rounded-md">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="mark" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="students" fill="#2d9cdb" barSize={60} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
