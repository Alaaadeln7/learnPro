"use client";
import { useFormik } from "formik";
import { MoveRight } from "lucide-react";
import { useState } from "react";

export default function CreateCourse() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const formik = useFormik({
    initialValues: {
      CourseTitle: "",
      CourseLevel: "",
      Category: "",
      Language: "",
      Timezone: "",
      InstructorBio: "",
      description: "",
      personalizedLearningPaths: false,
      allAssignmentsMustBeSubmitted: false,
      allowStudentsAttachFiles: false,
      allowStudentsCreateDiscussions: false,
      AllowStudentsEdit: false,
      allowStudentsOrganize: false,
      hideTotalsInStudents: false,
    },
    onSubmit: async (values) => {
      console.log({ ...values, startDate });
    },
  });

  return (
    <div className="bg-white border-2 border-gray-200 rounded-md p-5">
      <div className="border-b-2 border-gray-200 pb-2">
        <h1 className="text-2xl font-bold text-black flex items-center gap-3">
          <span className="bg-cyan-600 w-2 h-8"></span> Basics
        </h1>
        <form
          onSubmit={formik.handleSubmit}
          className="flex justify-center items-center flex-col gap-5 mt-4"
        >
          <div className="flex gap-5 justify-center items-center w-full">
            {/* Left Side */}
            <div className="flex flex-col gap-4 w-full">
              <div className="form-control">
                <label htmlFor="CourseTitle" className="font-semibold">
                  Course Title
                </label>
                <input
                  type="text"
                  name="CourseTitle"
                  id="CourseTitle"
                  onChange={formik.handleChange}
                  value={formik.values.CourseTitle}
                  placeholder="Enter Course Title"
                  className="input input-bordered outline-none bg-gray-200 w-full p-2 rounded"
                />
              </div>
              <div className="form-control">
                <label htmlFor="CourseLevel" className="font-semibold">
                  Course Level
                </label>
                <select
                  id="CourseLevel"
                  name="CourseLevel"
                  onChange={formik.handleChange}
                  value={formik.values.CourseLevel}
                  className="select bg-gray-200 w-full p-2 rounded"
                >
                  <option value="" disabled>
                    Choose course level
                  </option>
                  <option value="beginners">Beginners</option>
                  <option value="midLevels">Mid-levels</option>
                  <option value="seniors">Seniors</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="Timezone" className="font-semibold">
                  Timezone
                </label>
                <select
                  id="Timezone"
                  name="Timezone"
                  onChange={formik.handleChange}
                  value={formik.values.Timezone}
                  className="select bg-gray-200 w-full p-2 rounded"
                >
                  <option value="" disabled>
                    Choose timezone
                  </option>
                  <option value="UTC +03:00">UTC +03:00</option>
                  <option value="UTC +02:00">UTC +02:00</option>
                  <option value="UTC +01:00">UTC +01:00</option>
                </select>
              </div>
              <div className="form-control">
                <label className="font-semibold" htmlFor="description">
                  Description
                </label>
                <textarea
                  className="textarea bg-gray-200 w-full"
                  name="description"
                  id="description"
                  placeholder="Description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-4 w-full">
              <div className="form-control">
                <label htmlFor="Category" className="font-semibold">
                  Category
                </label>
                <select
                  id="Category"
                  name="Category"
                  onChange={formik.handleChange}
                  value={formik.values.Category}
                  className="select bg-gray-200 w-full p-2 rounded"
                >
                  <option value="" disabled>
                    Choose category
                  </option>
                  <option value="marketing">Marketing</option>
                  <option value="web development">Web Development</option>
                  <option value="design">Design</option>
                </select>
              </div>
              <div className="form-control">
                <label htmlFor="Language" className="font-semibold">
                  Language
                </label>
                <select
                  id="Language"
                  name="Language"
                  onChange={formik.handleChange}
                  value={formik.values.Language}
                  className="select bg-gray-200 w-full p-2 rounded"
                >
                  <option value="" disabled>
                    Choose language
                  </option>
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                  <option value="french">French</option>
                </select>
              </div>
              <div className="flex gap-3">
                <div className="form-control">
                  <label htmlFor="startDate" className="font-semibold">
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="input input-bordered bg-gray-200 w-full p-2 rounded max-wifit"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="endDate" className="font-semibold">
                    End Date
                  </label>
                  <input
                    type="date"
                    id="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="input input-bordered bg-gray-200 w-full p-2 rounded max-wifit"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="font-semibold" htmlFor="InstructorBio">
                  Instructor Bio
                </label>
                <textarea
                  className="textarea bg-gray-200 w-full"
                  name="InstructorBio"
                  id="InstructorBio"
                  placeholder="Instructor Bio"
                  value={formik.values.InstructorBio}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
            </div>
          </div>

          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="personalizedLearningPaths"
              name="personalizedLearningPaths"
              className="checkbox"
              checked={formik.values.personalizedLearningPaths}
              onChange={formik.handleChange}
            />
            <label htmlFor="personalizedLearningPaths">
              Allow personalized learning paths for students based on their
              assessments
            </label>
          </div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="allAssignmentsMustBeSubmitted"
              name="allAssignmentsMustBeSubmitted"
              className="checkbox"
              checked={formik.values.allAssignmentsMustBeSubmitted}
              onChange={formik.handleChange}
            />
            <label htmlFor="allAssignmentsMustBeSubmitted">
              All assignments must be submitted by the end date for a
              certificate
            </label>
          </div>
          <div className="divider m-0"></div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="allowStudentsAttachFiles"
              name="allowStudentsAttachFiles"
              className="checkbox"
              checked={formik.values.allowStudentsAttachFiles}
              onChange={formik.handleChange}
            />
            <label htmlFor="allowStudentsAttachFiles">
              Allow students attach files to discusstions
            </label>
          </div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="allowStudentsCreateDiscussions"
              name="allowStudentsCreateDiscussions"
              className="checkbox"
              checked={formik.values.allowStudentsCreateDiscussions}
              onChange={formik.handleChange}
            />
            <label htmlFor="allowStudentsCreateDiscussions">
              Allow students create discussions topics
            </label>
          </div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="AllowStudentsEdit"
              name="AllowStudentsEdit"
              className="checkbox"
              checked={formik.values.AllowStudentsEdit}
              onChange={formik.handleChange}
            />
            <label htmlFor="AllowStudentsEdit">
              Allow students edit or delete their own discussion replies
            </label>
          </div>
          <div className="divider m-0"></div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="allowStudentsOrganize"
              name="allowStudentsOrganize"
              className="checkbox"
              checked={formik.values.allowStudentsOrganize}
              onChange={formik.handleChange}
            />
            <label htmlFor="allowStudentsOrganize">
              Allow students organize their own groups
            </label>
          </div>
          <div className="space-x-2 cursor-pointer self-start">
            <input
              type="checkbox"
              id="hideTotalsInStudents"
              name="hideTotalsInStudents"
              className="checkbox"
              checked={formik.values.hideTotalsInStudents}
              onChange={formik.handleChange}
            />
            <label htmlFor="hideTotalsInStudents">
              Hide totals in students grands summary
            </label>
          </div>
          <div className="col-span-2 flex self-end">
            <button type="submit" className="btn btn-primary">
              Next <MoveRight className="size-5 mx-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
