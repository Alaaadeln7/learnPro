"use client";
import Link from "next/link";
import Logo from "../Logo";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="flex flex-col  gap-10 mt-10">
      <span className="self-center">
        <Logo />
      </span>
      <ul className="flex justify-center sm:justify-around items-start flex-wrap gap-5 sm:gap-3">
        <li>
          <h1 className="font-bold text-xl mb-5">Product</h1>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
          </ul>
        </li>
        <li>
          <h1 className="font-bold text-xl mb-5">Resources</h1>
          <ul>
            <li>Blog</li>
            <li>User guides</li>
            <li>Webinars</li>
          </ul>
        </li>
        <li>
          <h1 className="font-bold text-xl mb-5">Company</h1>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
          </ul>
        </li>
        <li>
          <h1 className="font-bold text-xl mb-5">Plans & Pricing</h1>
          <ul>
            <li>Personal</li>
            <li>Start up</li>
            <li>Organization</li>
          </ul>
        </li>
      </ul>
      <hr />
      <div className="mb-5 flex gap-5 items-center justify-between text-center px-10 flex-wrap">
        <select
          name="lang"
          id="lang"
          className="bg-gray-300 p-2 px-5 rounded-sm"
        >
          <option value="en">English</option>
          <option value="ar">العربية</option>
          <option value="fr">france</option>
        </select>
        <ul className="flex justify-center flex-wrap sm:flex-nowrap items-center gap-5 mt-5">
          <li> &copy;2025 Brand, Inc.</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Sitemap</li>
        </ul>
        <ul className="flex gap-5">
          <li>
            <Link href="#">
              <FaFacebookF />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaLinkedinIn />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTwitter />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
