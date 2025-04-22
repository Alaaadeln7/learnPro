"use client";
import { useFormik } from "formik";
import { MoveLeft, MoveRight, Pencil, Plus } from "lucide-react";
export default function Grades() {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section>
      <div className="bg-white border-2 border-gray-200 rounded-md p-5">
        <div className="border-b-2 border-gray-200 pb-2 flex justify-between items-center px-5">
          <h1 className="text-2xl font-bold text-black flex items-center gap-3">
            <span className="bg-cyan-600 w-2 h-8"></span> Grades
          </h1>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-3 p-5 mt-5 gap-5 from-primary"
        >
          <div className="form-control flex flex-col gap-1">
            <label className="label font-semibold" htmlFor="gradingMethod">
              Grading Method
            </label>
            <select
              defaultValue="Points-Based"
              className="select bg-gray-200"
              name="gradingMethod"
              id="gradingMethod"
            >
              <option disabled={true}>Points-Based</option>
              <option value="Percentage">Percentage</option>
              <option value="Letter">Letter</option>
              <option value="Points">Points</option>
            </select>
          </div>
          <div className="col-span-2">
            <h1 className="text-md font-bold">Total Course Points</h1>
            <p className="italic">
              <span className="mx-2">90</span> Auto-calculated based on
              assignments, quizzes
            </p>
          </div>
          <h1 className="text-md font-bold col-start-1 col-end-3">
            Grade Distribution
          </h1>
          <div className="col-start-1 col-end-7">
            <div className="form-control">
              <label className="font-semibold" htmlFor="minimumPassing">
                Minimum Passing Grade
              </label>
              <pre className="bg-gray-200 p-3 rounded-sm">80%</pre>
            </div>
            <div className="form-control">
              <label className="font-semibold" htmlFor="minimumPassing">
                Late Submission Penalty
              </label>
              <pre className="bg-gray-200 p-3 rounded-sm"> -10 %</pre>
            </div>
          </div>
          <table className="table col-start-1 col-end-7">
            <thead className="bg-gray-200 rounded-xl">
              <tr>
                <th>Category</th>
                <th>Weight (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>assignments</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">40</pre>
                </td>
              </tr>
              <tr>
                <td>Participation</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">20</pre>
                </td>
              </tr>
              <tr>
                <td>Final Project</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">40</pre>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="btn btn-primary mt-5">
                  <Plus className="size-4" /> add category
                </td>
              </tr>
            </tfoot>
          </table>
          <table className="table col-start-1 col-end-7">
            <thead className="bg-gray-200 rounded-xl">
              <tr>
                <th>Letter Grade</th>
                <th>Percentage Range</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">90% - 100%</pre>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <Pencil className="size-4" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">80% - 89%</pre>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <Pencil className="size-4" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>C</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">70% - 79%</pre>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <Pencil className="size-4" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>D</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">60% - 69%</pre>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <Pencil className="size-4" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>F</td>
                <td>
                  <pre className="bg-gray-200 p-3 rounded-sm">Below 60%</pre>
                </td>
                <td>
                  <button className="btn btn-ghost">
                    <Pencil className="size-4" />
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="btn btn-primary mt-5">
                  <Plus className="size-4" /> add category
                </td>
              </tr>
            </tfoot>
          </table>
        </form>
        <div className="flex justify-between items-center px-5 py-5 mt-10 border-t-2 border-gray-200">
          <button className="btn btn-soft">
            <MoveLeft className="size-5" />
            Back
          </button>
          <button className="btn btn-primary">
            Next <MoveRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
