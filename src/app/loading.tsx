import { Loader } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader className="animate-spin size-10" />
    </div>
  );
}
