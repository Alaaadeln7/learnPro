import avatar from "../../../public/preson.jpg";
import Image from "next/image";
export default function ReviewItem() {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-md p-5 max-w-fit">
      <div className="flex gap-5 flex-wrap sm:flex-nowrap">
        <Image
          src={avatar}
          alt="preson"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col items-start justify-center gap-3">
          <h1 className="font-semibold">Jevon Raynor</h1>
          <p className="text-gray-400">
            Cupidatat deserunt sint ipsum deserunt
          </p>
          <p className="text-gray-400">A day ago</p>
        </div>
      </div>
    </div>
  );
}
