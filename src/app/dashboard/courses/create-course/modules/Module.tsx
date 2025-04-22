import { Menu, Plus } from "lucide-react";
import ModuleItem from "./ModuleItem";

export default function Module() {
  return (
    <div className="bg-gray-100 rounded-md w-full px-5 space-y-2 my-5 py-5">
      <header className="flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-5">
          <Menu />
          <h1 className="text-xl font-bold">
            Module 1: Introduction to Social Media Marketing (2 lessons)
          </h1>
        </div>
        <button className="btn btn-success text-base-300">
          <Plus />
          lesson
        </button>
      </header>
      <div className="bg-base-100 border-2 border-gray-200 rounded-xl px-5 py-3 mx-3">
        <table className="table text-start">
          <tbody>
            <ModuleItem
              title="Overview of Social Media Platforms"
              lesson={1}
              published={true}
            />
            <ModuleItem
              title="Key Trends in Social Media"
              lesson={2}
              published={false}
            />
            <ModuleItem
              title="Setting Up a Facebook Business Page"
              lesson={3}
              published={true}
            />
            <ModuleItem
              title="Facebook Ad Types & Objectives"
              lesson={4}
              published={false}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
