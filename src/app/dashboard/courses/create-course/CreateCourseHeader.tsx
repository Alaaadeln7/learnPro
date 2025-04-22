import { Clock, MoveLeft } from "lucide-react";
import Link from "next/link";

export default function CreateCourseHeader() {
  return (
    <header className="mt-10 px-20 space-y-10">
      <div className="flex justify-between items-center">
        <Link
          href={"/dashboard/courses"}
          className="cursor-pointer text-gray-500 flex gap-2 items-center capitalize"
        >
          <MoveLeft />
          <p>my courses</p>
        </Link>
        <p className="flex text-gray-600 gap-1">
          <Clock className="text-orange-600" />
          <span className="text-gray-500">Last Updated:</span> 09:10:13 |
          September 28, 2024
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Create Course</h1>
        <ul className="flex gap-5 justify-center items-center">
          <li>
            <button className="text-blue-500 capitalize cursor-pointer">
              View as Students
            </button>
          </li>
          <li>
            <button className="btn btn-outline">Save as draft</button>
          </li>
          <li>
            <button className="btn btn-primary">Publish Course</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
