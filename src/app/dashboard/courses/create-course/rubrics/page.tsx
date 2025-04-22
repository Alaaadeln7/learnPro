import { MoveLeft, MoveRight } from "lucide-react";
import RubricCriteriaTable from "./RubricCriteriaTable";
import RubricsForm from "./RubricsForm";

export default function Rubrics() {
  return (
    <section>
      <div className="bg-white border-2 border-gray-200 rounded-md p-5">
        <div className="border-b-2 border-gray-200 pb-2 flex justify-between items-center px-5">
          <h1 className="text-2xl font-bold text-black flex items-center gap-3">
            <span className="bg-cyan-600 w-2 h-8"></span> Rubrics
          </h1>
        </div>
        <RubricsForm />
        <RubricCriteriaTable />
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
