import { Pencil, Plus } from "lucide-react";

export default function RubricCriteriaTable() {
  return (
    <div>
      <h1 className="text-md font-semibold">Rubric Criteria Table</h1>
      <table className="table table-zebra *">
        <thead className="bg-gray-200">
          <tr>
            <th className="font-semibold">Criteria</th>
            <th className="font-semibold">Excellent (4 pts)</th>
            <th className="font-semibold">Good (3 pts)</th>
            <th className="font-semibold">Fair (2 pts)</th>
            <th className="font-semibold">Needs Improvement (1 pt)</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-2 border-gray-200">
            <td className="font-semibold text-md border-2 border-gray-200">
              Content Quality
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Content is highly relevant, well-researched, and aligns perfectly
              with the assignment prompt.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Extremely creative and original ideas that stand out.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
          </tr>
          <tr className="border-2 border-gray-200">
            <td className="font-semibold text-md border-2 border-gray-200">
              Creativity
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Content is highly relevant, well-researched, and aligns perfectly
              with the assignment prompt.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Extremely creative and original ideas that stand out.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
          </tr>
          <tr className="border-2 border-gray-200">
            <td className="font-semibold text-md border-2 border-gray-200">
              Presentation & Structure
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Content is highly relevant, well-researched, and aligns perfectly
              with the assignment prompt.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Extremely creative and original ideas that stand out.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
            <td className="relative pb-10 border-2 border-gray-200">
              Well-organized and professionally structured.
              <button className="btn btn-soft btn-primary absolute bottom-0 right-0">
                <Pencil className="size-4" />
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <button className="btn btn-soft btn-primary mt-5">
            <Plus className="size-4" />
            add new category
          </button>
        </tfoot>
      </table>
    </div>
  );
}
