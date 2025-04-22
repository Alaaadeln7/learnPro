import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
export default function StatisticsDashboard() {
  return (
    <div className="bg-blue-800 text-white flex flex-wrap justify-around items-center gap-10 py-10">
      <div className=" space-y-10">
        <h1 className="text-3xl font-bold">Welcome back, Emily Carter!</h1>
        <div className="flex gap-5">
          <button className="max-w-fit btn">Create New Course</button>
          <button className="max-w-fit outline-btn">View My Courses</button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        <div className="p-5 max-w-8/12 bg-gray-50/10 text-white rounded-xl flex justify-between flex-col gap-10 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">12</h1>
            <span>
              <FaChalkboardTeacher className="text-2xl" />
            </span>
          </div>
          <p>Total Published Courses</p>
        </div>
        <div className="p-5 max-w-8/12 bg-gray-50/10 text-white rounded-xl flex justify-between flex-col gap-10 ">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">433</h1>
            <span>
              <PiStudent className="text-2xl" />
            </span>
          </div>
          <p>Active Students</p>
        </div>
      </div>
    </div>
  );
}
