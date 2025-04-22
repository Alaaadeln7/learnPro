import Course from "./Course";
import { courseData } from "@/data/courseData";
export default function OtherCourses() {
  const printCourses = courseData.map((course) => (
    <Course key={course.id} {...course} />
  ));
  return (
    <section className="flex justify-center items-center flex-col mt-10 gap-5">
      <header className="flex flex-col justify-center items-center space-y-4 text-center">
        <h2 className="text-gray-600">Featured Courses</h2>
        <h1 className="text-2xl font-bold">See What Others Are Teaching</h1>
      </header>
      <div className="mt-10 flex items-center justify-center flex-wrap sm:flex-nowrap gap-4">
        {printCourses}
      </div>
      <button className="btn max-w-fit">Exports More</button>
    </section>
  );
}
