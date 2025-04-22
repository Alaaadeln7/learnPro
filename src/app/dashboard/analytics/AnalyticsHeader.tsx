import { Clock, FolderDown, MoveLeft, ListFilter } from "lucide-react";
export default function AnalyticsHeader() {
  return (
    <header className="mt-10">
      <div className="flex justify-between items-center px-20">
        <h1 className="flex gap-2 text-gary-500">
          <MoveLeft className="size-5" /> <p>Analytics</p>
        </h1>
        <p className="text-sm flex items-center gap-2">
          <Clock className="size-4 text-orange-600" />
          <span>Last Updated: 09:10:13 | September 28, 2024</span>
        </p>
      </div>
      <div className="flex justify-between items-center px-20 mt-10">
        <h1 className="text-3xl font-bold text-black">
          Social Media Marketing
        </h1>
        <div className="flex gap-3">
          <button className="btn btn-outline">
            <ListFilter className="size-4" />
            <span>Filter</span>
          </button>
          <button className="btn btn-primary">
            <FolderDown className="size-4" />
            Export
          </button>
        </div>
      </div>
    </header>
  );
}
