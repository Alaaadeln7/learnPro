import { Check } from "lucide-react";
import React from "react";

export default function CorrectMark() {
  return (
    <p className="w-5 h-5 flex justify-center items-center border-2 border-green-600 text-green-600 rounded-full">
      <Check className="size-5 font-bold" />
    </p>
  );
}
