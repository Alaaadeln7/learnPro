"use client";
import { useFormik } from "formik";
import { Plus } from "lucide-react";
export default function RubricsForm() {
  const formik = useFormik({
    initialValues: {
      rubricName: "",
      AssignRubricToAssignment: "",
      description: "",
    },
    onSubmit(values, { resetForm }) {
      console.log(values);
      resetForm();
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="grid grid-cols-2 gap-5 px-10 my-5"
    >
      <div className="form-control flex flex-col">
        <label className="font-semibold text-base-800" htmlFor="rubricName">
          Rubric Name
        </label>
        <input
          type="text"
          name="rubricName"
          id="rubricName"
          className="input input-bordered bg-gray-200 w-full"
          placeholder="Rubric Name"
          value={formik.values.rubricName}
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-control flex flex-col">
        <label className="font-semibold" htmlFor="AssignRubricToAssignment">
          Assign Rubric To Assignment
        </label>
        <select
          name="AssignRubricToAssignment"
          id="AssignRubricToAssignment"
          className="select select-bordered bg-gray-200 w-full"
          value={formik.values.AssignRubricToAssignment}
          onChange={formik.handleChange}
        >
          <option disabled selected>
            Assign to existing assignments
          </option>
          <option value="Assignment 1">Assignment 1</option>
          <option value="Assignment 2">Assignment 2</option>
          <option value="Assignment 3">Assignment 3</option>
        </select>
      </div>
      <div className="form-control flex flex-col col-start-1 col-end-7">
        <label htmlFor="description" className="font-semibold">
          Description
        </label>
        <textarea
          id="description"
          className="textarea bg-gray-200 w-full"
          placeholder="Description"
        ></textarea>
      </div>
      <button className="btn btn-primary col-span-2 col-end-7">
        <Plus className="size-4" />
      </button>
    </form>
  );
}
