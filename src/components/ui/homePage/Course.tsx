import Image, { StaticImageData } from "next/image";
interface CourseProps {
  id: number;
  title: string;
  thumnail: StaticImageData;
  author: {
    id: number;
    name: string;
    image: StaticImageData;
  };
}
export default function Course({ title, thumnail, author }: CourseProps) {
  return (
    <div className="w-full m-2 sm:max-w-5/12 flex flex-col items-center justify-center  rounded-xl border border-gray-300 shadow-md px-2 py-4 gap-3">
      <Image src={thumnail} alt={title} className="w-full" />
      <div className="flex flex-col items-start justify-start gap-2">
        <span className="p-1 sm:p-3 rounded-full bg-gray-200">
          Over 1,500 students enrolled
        </span>
        <h3 className="font-bold text-md sm:text-xl">{title}</h3>
        <div className="flex items-center justify-center gap-3">
          <Image
            src={author.image}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>by {author.name}</span>
        </div>
      </div>
    </div>
  );
}
