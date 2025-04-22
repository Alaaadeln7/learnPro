import Course from "../Course";
import CoursesHeader from "./CoursesHeader";
import { courseData } from "@/data/courseData";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
export default function Courses() {
  const printCourses = courseData.map((course) => (
    <Course key={course.id} {...course} />
  ));
  return (
    <section className="">
      <CoursesHeader />
      <nav className="px-10 mt-5">
        <ul className="flex gap-3">
          <li className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all pb-3 m-2 cursor-pointer hover:font-semibold">
            Published Courses
          </li>
          <li className="hover:text-blue-500 hover:border-b-2 hover:border-blue-500 transition-all pb-3 m-2 cursor-pointer hover:font-semibold">
            Unpublished Courses
          </li>
        </ul>
      </nav>
      <div className="courses-list flex flex-wrap px-10 mt-5 gap-5">
        {printCourses}
        {printCourses}
        {printCourses}
      </div>
      <div className="pagination flex justify-between items-center px-10 py-10">
        <p>
          Show <span className="font-bold"> 1 </span> to
          <span className="font-bold"> 10 </span> of
          <span className="font-bold"> 20 </span> results
        </p>
        <div className="flex gap-5">
          <button className="text-blue-500 flex gap-2 justify-center items-center cursor-pointer">
            <IoIosArrowBack />
            <p>Previous</p>
          </button>
          <select
            name="page"
            id="page"
            className="px-5 py-2 bg-gray-300 rounded-xl"
          >
            <option value="1">Page 1</option>
            <option value="2">Page 2</option>
            <option value="3">Page 3</option>
            <option value="4">Page 4</option>
          </select>
          <button className="text-blue-500 flex gap-2 justify-center items-center cursor-pointer">
            <p>Next</p> <IoIosArrowForward />
          </button>
        </div>
      </div>
    </section>
  );
}
