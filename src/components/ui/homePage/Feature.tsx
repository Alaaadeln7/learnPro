import { ReactNode } from "react";

interface featureProps {
  title: string;
  desc: string;
  color: string;
  icon: ReactNode;
}
export default function Feature({ title, desc, icon, color }: featureProps) {
  return (
    <div className="sm:max-w-2/12 m-3 w-full flex flex-col items-center justify-center p-4 gap-3 bg-gray-100 rounded-xl text-center">
      <span
        className="text-3xl bg-gray-50 p-2 rounded-full"
        style={{
          color: color,
        }}
      >
        {icon}
      </span>
      <h1 className="font-bold">{title}</h1>
      <p className="text-sm">{desc}</p>
    </div>
  );
}
