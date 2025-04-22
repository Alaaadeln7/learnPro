import { ChevronDown } from "lucide-react";
import React from "react";
import AssignmentItem from "./AssignmentItems";

export default function Assignment() {
  return (
    <div className="bg-gray-100 rounded-md w-full px-5 space-y-2 my-5 py-5">
      <header className="flex justify-between items-center px-5">
        <div className="flex justify-center items-center gap-1">
          <ChevronDown />
          <h1 className="text-xl font-bold">Current Assignments (4)</h1>
        </div>
      </header>
      <div className="bg-base-100 border-2 border-gray-200 rounded-xl px-5 py-3 mx-3">
        <table className="table">
          <tbody>
            <AssignmentItem
              date={"Mar 30, 2025"}
              title={"Create a Facebook Marketing Plan"}
              quiz={1}
              questions={20}
              pts={2}
            />
            <AssignmentItem
              date={"Oct 30, 2024"}
              title={"Instagram Story Strategy Analysis"}
              quiz={1}
              questions={20}
              pts={2}
            />
            <AssignmentItem
              date={"Oct 30, 2024"}
              title={"Analyze a Social Media Campaign"}
              quiz={1}
              questions={20}
              pts={2}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
