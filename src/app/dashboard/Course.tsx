import Image from "next/image";
import image from "../../../public/Image 130.png";
import { PiStudent } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
export default function Course() {
  return (
    <div className="  rounded-md border-2 border-gray-200">
      <Image src={image} alt="course" />
      <div className="px-2 py-5">
        <h1 className="text-xl font-bold text-black">
          Advanced Digital Marketing
        </h1>
        <ul className="flex flex-col items-start justify-center gap-3">
          <li className="flex">
            <FaStar className="text-yellow-500" />
            <p className="text-sm">4.5 (123)</p>
          </li>
          <li className="flex">
            <PiStudent className="text-blue-500" />
            <p className="text-sm">Students Enrolled: 350</p>
          </li>
          <li className="flex">
            <FaRegClock className="text-orange-500" />
            <p className="text-sm">Last Updated: September 28, 2024 </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
