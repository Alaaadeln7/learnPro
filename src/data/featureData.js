import { FaLaptop } from "react-icons/fa";
import { SiStatista } from "react-icons/si";
import { RiGlobalLine } from "react-icons/ri";
import { MdDiscount } from "react-icons/md";
export const featureData = [
  {
    id: 1,
    title: "ntuitive Course Builder",
    desc: "Easily structure your course with video lessons, assignments and using our drag-and-drop interface",
    icon: <FaLaptop />,
    color: "cyan"
  },
  {
    id: 2,
    title: "Engage Learners",
    desc: "Interactive quizzes, student discussions, and detailed analytics to track performance and engagement",
    icon: <SiStatista />,
    color: "orange"
  },
  {
    id: 3,
    title: "Global Reach",
    desc: "Your courses can be accessed by students worldwide. We handle the technical details",
    icon: <RiGlobalLine />,
    color: "green"
  },
  {
    id: 4,
    title: "Flexible Pricing",
    desc: "Choose to offer your course for free or monetize it with competitive pricing options",
    icon: <MdDiscount />,
    color: "purple"
  }
]