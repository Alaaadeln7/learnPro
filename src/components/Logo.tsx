import { SiSololearn } from "react-icons/si";
export default function Logo() {
  return (
    <div className="sm:text-2xl text-md font-bold flex items-center gap-2">
      <SiSololearn />
      Learn<span className="text-primary">Pro</span>
    </div>
  );
}
