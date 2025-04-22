"use client";
import Link from "next/link";
import Logo from "../Logo";
import { FaBars } from "react-icons/fa";
// import useAuth from "@/hooks/useAuth";
import Image from "next/image";
import { LogOut } from "lucide-react";
export default function Header() {
  // const { user } = useAuth();
  return (
    <header className="flex justify-around flex-wrap sm:flex-nowrap items-center py-3 bg-white w-10/12 mt-10 rounded-xl absolute top-0 left-0 right-0 mx-auto z-10">
      <span className=" text-2xl font-bold">
        <Logo />
      </span>
      <nav className="flex gap-10">
        <ul className="items-center gap-8 hidden md:flex">
          <li>
            <Link className="font-semibold" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href={"/feature"}>
              Feature
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href={"/support"}>
              Support
            </Link>
          </li>
          <li>
            <Link className="font-semibold" href={"/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
        <div className="flex gap-3 ">
          <Link href={"/register"} className="btn  btn-primary">
            Register
          </Link>
          <Link href={"/login"} className="btn btn-primary">
            sign in
          </Link>
        </div>

        <button className="btn btn-ghost md:hidden">
          <FaBars />
        </button>
      </nav>
    </header>
  );
}
