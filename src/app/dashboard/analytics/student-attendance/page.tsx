import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../../public/preson.jpg";
import CorrectMark from "./CorrectMark";
export default function StudentAttendance() {
  return (
    <section>
      <header className="flex gap-2 items-center justify-between px-5 py-5">
        <div className="flex gap-3 items-center ">
          <h1 className="text-md">
            Total Students Enrolled :<span className="font-bold"> 30</span>
          </h1>
          <div className="flex gap-5 items-center justify-center">
            <button className="btn btn-soft">
              <ChevronLeft className="size-5" />
            </button>
            <h1 className="font-bold text-xl">21 Oct - 27 Oct, 2024</h1>
            <button className="btn btn-soft">
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
        <div className="flex gap-3 self-end">
          <button className="btn btn-primary">Week</button>
          <button className="btn btn-soft btn-primary">Month</button>
        </div>
      </header>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-gray-200">
            <tr>
              <th>Student Name</th>
              <th>Mon 21</th>
              <th>Tue 22</th>
              <th>Wed 23</th>
              <th>Thu 24</th>
              <th>Fri 25</th>
              <th>Sat 26</th>
              <th>Sun 27</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td>
                <CorrectMark />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
