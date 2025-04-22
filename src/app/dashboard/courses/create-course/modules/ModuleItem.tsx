import { Eye, Menu, PencilIcon, Trash2 } from "lucide-react";
interface ModuleItemProps {
  lesson: number;
  title: string;
  published: boolean;
}

export default function ModuleItem({
  title,
  lesson,
  published,
}: ModuleItemProps) {
  return (
    <tr className="flex justify-between items-center text-start my-2 border-b-2 border-gray-200 pb-2">
      <td>
        <Menu />
      </td>
      <td className="text-cyan-500">Lesson{lesson}</td>
      <td className="font-semibold">{title}</td>
      <td
        className={` ${
          published ? "text-green-600 bg-green-200" : "bg-base-300"
        } max-w-fit  rounded-2xl text-sm px-3 py-2`}
      >
        {published ? "Published" : "Unpublish"}
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
