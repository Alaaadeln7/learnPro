import { X } from "lucide-react";
import Image from "next/image";
import avatar from "../../../../public/preson.jpg";
export default function SingleStudentGrades() {
  return (
    <div className="w-3/12 relative rounded-2xl py-5 px-2">
      <button className="btn btn-ghost absolute top-0 right-0 rounded-full">
        <X className="size-5" />
      </button>
      <div className="flex flex-col items-center justify-center">
        <Image
          src={avatar}
          alt={"student avatar"}
          className="w-20 h-20 rounded-full object-cover"
        />
        <h1 className="font-bold text-xl">alaa adel</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          facere qui repellat culpa magnam magni reiciendis
        </p>
      </div>
      <div className="flex flex-col gap-4 mt-10">
        <div className="flex flex-col gap-2">
          <label className="font-bold text-sm">Quiz 1 (Auto)</label>
          <p className="p-3 bg-gray-200 w-full rounded-xl font-semibold">A</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-sm">Quiz 1 (Auto)</label>
          <p className="p-3 bg-gray-200 w-full rounded-xl font-semibold">A</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-sm">Quiz 1 (Auto)</label>
          <p className="p-3 bg-gray-200 w-full rounded-xl font-semibold">A</p>
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-bold text-sm">Quiz 4 (Manual)</label>
          <select className="p-3 bg-gray-200 w-full rounded-xl font-semibold">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>
      </div>
    </div>
  );
}
