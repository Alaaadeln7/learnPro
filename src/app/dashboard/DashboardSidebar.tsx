import ComingUp from "./ComingUp";
import Reviews from "./Reviews";

export default function DashboardSidebar() {
  return (
    <div className="bg-gray-100 w-full sm:max-w-[300px] p-5">
      <ComingUp />
      <hr className="h-[2px] bg-gray-300 my-3" />
      <Reviews />
    </div>
  );
}
