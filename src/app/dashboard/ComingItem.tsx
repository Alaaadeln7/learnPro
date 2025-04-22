import { PiStudent } from "react-icons/pi";
import { FaCalendarAlt } from "react-icons/fa";
export default function ComingItem() {
  return (
    <div className="flex flex-col items-start bg-white w-full shadow rounded-md p-5 gap-5">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-sm ">Live Q&A Session</h2>
        <p className="text-sm bg-orange-200 text-orange-600 rounded-2xl p-1 px-2">
          today
        </p>
      </div>
      <h1 className="text-md font-semibold text-black">Digital Marketing</h1>
      <ul className="flex flex-col justify-center items-start">
        <li className="flex gap-3 text-gary-500">
          <PiStudent /> <p>1,222</p>
        </li>
        <li className="flex gap-3 text-gary-500">
          <FaCalendarAlt />
          <p>October 22, 2024, 11:00 AM</p>
        </li>
      </ul>
    </div>
  );
}
