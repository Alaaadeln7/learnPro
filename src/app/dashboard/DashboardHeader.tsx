import Logo from "@/components/Logo";
import Link from "next/link";
import avatar from "../../../public/preson.jpg";
import Image from "next/image";
import { Bell, CircleHelp, Search } from "lucide-react";
export default function DashboardHeader() {
  return (
    <header className="w-screen flex justify-between items-center px-10 py-5 shadow">
      <div className="flex gap-10 items-center justify-center">
        <Logo />
        <nav>
          <ul className="flex justify-center gap-5 items-center">
            <li>
              <Link className="font-semibold" href="/dashboard">
                Dashboard
              </Link>
            </li>
            <li>
              <Link className="font-semibold" href="/dashboard/courses">
                My Courses
              </Link>
            </li>
            <li>
              <Link className="font-semibold" href="/dashboard/analytics">
                Analytics
              </Link>
            </li>
            <li>
              <Link className="font-semibold" href="/dashboard/grades">
                Grades
              </Link>
            </li>
            <li>
              <Link className="font-semibold" href="/students">
                Students
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <ul className="flex gap-3">
          <li>
            <Search className="size-5" />
          </li>
          <li>
            <Bell className="size-5" />
          </li>
          <li>
            <CircleHelp className="size-5" />
          </li>
        </ul>
        <Image
          src={avatar}
          alt="avatar"
          className="w-10 h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </header>
  );
}
