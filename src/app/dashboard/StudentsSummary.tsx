import { IoIosArrowForward } from "react-icons/io";
export default function StudentsSummary() {
  return (
    <div>
      <header className="flex justify-between px-5 mt-10">
        <h1 className="text-2xl text-black font-bold">Students Summary</h1>
        <button className="text-blue-600 space-x-1 flex text-sm font-semibold items-center justify-between">
          View Detail <IoIosArrowForward />
        </button>
      </header>
      <div className="w-full border-2 mt-5 border-gray-200 rounded-md p-5 flex justify-around items-center gap-5">
        <div className="flex flex-col gap-5 ">
          <h1 className="text-3xl font-bold text-blue-500">1,222</h1>
          <p className="capitalize text-gray-600">Total Enrolled Students</p>
        </div>
        <div className="flex flex-col gap-5 border-l-3 border-gray-200 pl-5">
          <h1 className="text-3xl font-bold text-yellow-400">120</h1>
          <p className="capitalize text-gray-600">New Enrollments This Month</p>
        </div>
        <div className="flex flex-col gap-5 border-l-3 border-gray-200 pl-5">
          <h1 className="text-3xl font-bold text-orange-400">54%</h1>
          <p className="capitalize text-gray-600">
            Retention Rate (Last 3 Months)
          </p>
        </div>
      </div>
    </div>
  );
}
