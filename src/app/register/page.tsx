"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
// import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Logo from "@/components/Logo";
export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const { handleRegister, registerLoading } = useAuth();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      subject: "",
      role: "",
      termsAccepted: false,
    },
    validationSchema: yup.object().shape({
      fullName: yup.string().required("Full name is required"),
      email: yup.string().email().required("Email is required"),
      password: yup.string().min(6).required("Password is required"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm password is required"),
      subject: yup.string().required("Subject is required"),
      role: yup.string().oneOf(["admin", "student", "instructor"]),
      termsAccepted: yup.boolean().oneOf([true], "You must accept the terms"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // handleRegister({ ...values, jobTitle: values.role });
      resetForm();
    },
  });
  useEffect(() => {
    if (formik.submitCount > 0 && Object.keys(formik.errors).length > 0) {
      toast.error("Please fill all the required fields correctly.");
    }
  }, [formik.errors, formik.submitCount]);

  return (
    <section className="flex justify-around items-center bg-gray-100">
      <h1 className="sm:block hidden text-8xl font-bold text-white">
        Learn<span className="text-primary">Pro</span>
      </h1>
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-md">
        <div className="flex flex-col gap-2 justify-center items-center mb-5 text-center">
          <Logo />
          <h2 className="text-3xl font-bold text-primary">
            Create Your Instructor Account
          </h2>
          <p>
            Fill out the form below to start building and sharing your courses
            with students across the globe
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label className="font-semibold">Full Name</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Type your name"
              required
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
            />
          </div>

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
            <div className="form-control flex-1">
              <label className="font-semibold">Confirm Password</label>
              <div className="flex items-center justify-between w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  required
                  className="outline-none"
                  name="confirmPassword"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                />
                {showConfirmPassword ? (
                  <FaRegEyeSlash
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 cursor-pointer size-4"
                  />
                ) : (
                  <FaRegEye
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 cursor-pointer size-4"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="form-control">
            <label htmlFor="subject" className="font-semibold">
              Subject(s) You Want to Teach
            </label>
            <select
              id="subject"
              className="select"
              onChange={formik.handleChange}
              value={formik.values.subject}
            >
              <option value="marketing">marketing</option>
              <option value="programming">programming</option>
              <option value="design">design</option>
              <option value="videoEditing">video editing</option>
            </select>
          </div>

          <div className="form-control">
            <label htmlFor="role" className="font-semibold">
              your Role
            </label>
            <select
              name="role"
              id="role"
              className="select"
              onChange={formik.handleChange}
              value={formik.values.role}
            >
              <option value="admin">admin</option>
              <option value="student">student</option>
              <option value="instructor">instructor</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Checkbox
              id="terms1"
              className="cursor-pointer"
              checked={formik.values.termsAccepted}
              onCheckedChange={(checked) =>
                formik.setFieldValue("termsAccepted", checked)
              }
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:bg-gray-400  disabled:cursor-not-allowed "
            // disabled={registerLoading || formik.values.termsAccepted === false}
          >
            Sign up
          </button>

          <p className="text-center">
            Already have an account?
            <Link href="/login" className="text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}
