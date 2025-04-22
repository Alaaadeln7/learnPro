import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import imageOne from "../../../public/Image 15.png";
import imageTwo from "../../../public/Image 17.png";
import imageThree from "../../../public/Image 16.png";
import Course from "./Course";
const data = [
  {
    id: 1,
    title: "Advanced Digital Marketing",
    rating: 4.5,
    lastUpdates: "September 28, 2024",
    StudentsEnrolled: 309,
    image: imageOne,
  },
  {
    id: 2,
    title: "Social Media Strategy",
    rating: 4.5,
    lastUpdates: "September 28, 2024",
    StudentsEnrolled: 309,
    image: imageTwo,
  },
  {
    id: 3,
    title: "Branding & Positioning",
    rating: 4.5,
    lastUpdates: "September 28, 2024",
    StudentsEnrolled: 309,
    image: imageThree,
  },
];
export default function TopPublishedCourse() {
  const printCoruses = data.map((course) => (
    <Course key={course.id} {...course} />
  ));
  return (
    <div>
      <header className="flex justify-between px-5 mt-10">
        <h1 className="text-2xl text-black font-bold">Top Published Course</h1>
        <button className="text-blue-600 space-x-1 flex text-sm font-semibold items-center justify-between">
          View Detail <IoIosArrowForward className="ml-3" />
        </button>
      </header>
      <div className="flex gap-10 mt-5 justify-center items-center">
        {printCoruses}
      </div>
    </div>
  );
}
