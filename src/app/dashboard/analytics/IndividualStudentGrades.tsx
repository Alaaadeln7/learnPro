import Image from "next/image";
import avatar from "../../../../public/preson.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function IndividualStudentGrades() {
  return (
    <article className="mt-10">
      <header className="my-5 mx-2">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          <p className="w-2 h-8 bg-cyan-600 inline-block"></p>
          <p>Individual Student Grades</p>
        </h1>
      </header>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <thead className="bg-gray-200">
            <tr>
              <th>Student Name</th>
              <th>Final Grade</th>
              <th>Assignment Avg</th>
              <th>Quiz Avg</th>
              <th>Final Exam</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </th>
              <td>A</td>
              <td>
                <pre>67%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
            </tr>
            <tr>
              <th>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </th>
              <td>A</td>
              <td>
                <pre>67%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
            </tr>
            <tr>
              <th>
                <div className="flex items-center gap-2">
                  <Image
                    src={avatar}
                    alt={"student avatar"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <h5>John Doe</h5>
                </div>
              </th>
              <td>A</td>
              <td>
                <pre>67%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
              <td>
                <pre>80%</pre>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pagination flex justify-between items-center px-10 py-10">
        <p>
          Show <span className="font-bold"> 1 </span> to
          <span className="font-bold"> 10 </span> of
          <span className="font-bold"> 20 </span> results
        </p>
        <div className="flex gap-5">
          <button className="text-blue-500 flex gap-2 justify-center items-center cursor-pointer">
            <ChevronLeft className="size-5" />
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
            <p>Next</p> <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
