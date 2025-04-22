import { Pencil, Trash2, Volume2 } from "lucide-react";

interface AnnouncementItemsProps {
  date: string;
  title: string;
  messageSummary: string;
}
export default function AnnouncementItems({
  date,
  title,
  messageSummary,
}: AnnouncementItemsProps) {
  return (
    <tr className="text-start py-3 ">
      <td className="w-2/12">{date}</td>
      <td className="text-cyan-500 flex justify-center items-center gap-1">
        <Volume2 className="size-5" />
        {title}
      </td>
      <td>{messageSummary}</td>
      <div className="flex gap-3">
        <td className="btn btn-ghost">
          <Pencil className="size-4" />
        </td>
        <td className="btn btn-ghost">
          <Trash2 className="size-4" />
        </td>
      </div>
    </tr>
  );
}
