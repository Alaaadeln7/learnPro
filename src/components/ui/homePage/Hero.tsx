import Image from "next/image";
import Header from "../Header";
import hero from "../../../../public/hero.png";
export default function Hero() {
  return (
    <section className="hero relative flex flex-col justify-center items-center h-screen">
      <div className="absolute inset-0 z-[-1] h-screen object-cover">
        <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
        <Image src={hero} alt="hero" fill style={{ objectFit: "cover" }} />
      </div>
      <Header />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="sm:text-6xl text-2xl font-bold text-white w-12/12 sm:w-9/12 text-center">
          Share Your Knowledge with the World
        </h1>
        <p className=" text-sm sm:text-lg text-center font-semibold text-white w-9/12">
          each thousands of students with our powerful tools to create, publish,
          and manage your online course in minutes
        </p>
        <div className="flex gap-3 flex-wrap sm:flex-nowrap mx-2">
          <button className="btn btn-outline btn-primary text-white">
            Explore Instructor Features
          </button>
          <button className="btn btn-primary">Start Creating Now</button>
        </div>
      </div>
    </section>
  );
}
