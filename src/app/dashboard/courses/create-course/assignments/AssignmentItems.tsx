import { Calendar, Eye, Menu, PencilIcon, Trash2 } from "lucide-react";
interface ModuleItemProps {
  quiz: number;
  title: string;
  date: string;
  questions: number;
  pts: number;
}

export default function AssignmentItem({
  title,
  quiz,
  date,
  questions,
  pts,
}: ModuleItemProps) {
  return (
    <tr className="flex justify-between items-center my-2 border-b-2 border-gray-200 pb-2 text-start">
      <td>
        <Menu />
      </td>
      <td className="text-cyan-500">Quiz{quiz}</td>
      <td>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">
          {questions} questions | {pts} pts
        </p>
      </td>
      <td
        className={` ${
          new Date(date) > new Date()
            ? "text-green-600 bg-green-200"
            : "bg-base-300"
        } max-w-fit  rounded-2xl text-sm px-3 py-2 flex gap-1`}
      >
        <Calendar className="size-4" />
        <p>{date}</p>
      </td>
      <td className="flex gap-2 self-end">
        <button className="btn btn-ghost">
          <PencilIcon className="size-4" />
        </button>
        <button className="btn btn-ghost">
          <Eye className="size-4" />
        </button>
        <button className="btn btn-ghost">
          <Trash2 className="size-4" />
        </button>
      </td>
    </tr>
  );
}
