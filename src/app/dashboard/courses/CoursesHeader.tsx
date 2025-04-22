import Link from "next/link";
import { GoPlus } from "react-icons/go";
import { MdOutlineFilterList } from "react-icons/md";
export default function CoursesHeader() {
  return (
    <header className="flex justify-between items-center px-10 mt-10">
      <h1 className="text-3xl font-bold text-black">My Courses</h1>
      <div className="flex gap-3">
        <button className="btn btn-outline">
          <MdOutlineFilterList className="text-xl" />
          <span>Filter</span>
        </button>
        <Link href={"courses/create-course"} className="btn btn-primary">
          <GoPlus className="text-xl" />
          <span>Create Course</span>
        </Link>
      </div>
    </header>
  );
}
