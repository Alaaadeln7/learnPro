import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-[200px]">
      <ul className="menu">
        <li>
          <Link href={"/dashboard/courses/create-course/"}>Basics</Link>
        </li>
        <li>
          <Link href={"/dashboard/courses/create-course/modules"}>Modules</Link>
        </li>
        <li>
          <Link href={"/dashboard/courses/create-course/announcements"}>
            Announcements
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/courses/create-course/assignments"}>
            Assignments
          </Link>
        </li>
        <li>
          <Link href={"/dashboard/courses/create-course/grades"}>Grades</Link>
        </li>
        <li>
          <Link href={"/dashboard/courses/create-course/rubrics"}>Rubrics</Link>
        </li>
      </ul>
    </nav>
  );
}
