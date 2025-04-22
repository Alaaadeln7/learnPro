import Link from "next/link";
import AnalyticsHeader from "./AnalyticsHeader";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <section>
      <AnalyticsHeader />
      <div className="container">
        <div className="border-2 border-gray-200 p-3 rounded-xl">
          <ul className="flex gap-3 pb-2 border-b-2 border-gray-200">
            <li>
              <Link className="font-semibold" href={"/dashboard/analytics/"}>
                Grade Distribution
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold"
                href={"/dashboard/analytics/student-attendance"}
              >
                Student Attendance
              </Link>
            </li>
          </ul>
          <div>{children}</div>
        </div>
      </div>
    </section>
  );
}
