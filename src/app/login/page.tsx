"use client";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
// import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import Logo from "@/components/Logo";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  // const { handleLogin, loginLoading } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(6).required("Password is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      // handleLogin(values);
      resetForm();
    },
  });

  return (
    <section className="w-screen h-screen flex justify-around items-center bg-gray-100">
      <h1 className="sm:block hidden text-8xl font-bold text-white">
        Learn<span className="text-primary">Pro</span>
      </h1>
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
        <div className="flex flex-col gap-2 justify-center items-center mb-5 text-center">
          <Logo />
          <h2 className="text-3xl font-bold text-primary">
            welcome back to LearnPro
          </h2>
          <p>let is get started</p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="font-semibold">Email Address</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type your email"
              required
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <div className="form-control flex-1">
              <label className="font-semibold">Password</label>
              <div className="relative flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <input
                  type={showPassword ? "text" : "password"}
                  className="outline-none"
                  placeholder="Type your password"
                  required
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 cursor-pointer size-4"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 cursor-pointer size-4"
                  />
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400  disabled:cursor-not-allowed "
            // disabled={loginLoading}
          >
            Login
          </button>

          <p className="text-center">
            create account
            <Link href="/register" className="text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
