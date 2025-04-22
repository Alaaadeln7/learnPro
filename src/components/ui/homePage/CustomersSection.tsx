import Image from "next/image";
import bg from "../../../../public/clients.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
export default function Customers() {
  return (
    <section className="relative sm:block hidden mt-20">
      <Image src={bg} alt={"clients"} className="w-full" />
      <article className="bg-white rounded-sm h-96 w-96 absolute top-1/4 right-0 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 p-4 justify-center items-center text-center">
          <Image
            src={bg}
            alt="picture"
            className="w-3/12 rounded-full object-cover"
          />
          <h1 className="font-bold text-center">Join Our Happy Customers</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            distinctio ut ullam quasi vero eligendi nisi reiciendis magnam error
            quo, delectus eius numquam. Natus at aliquam esse! Dolorem, maxime
            harum.
          </p>
        </div>
        <div className=" flex gap-3">
          <button className="rounded-full p-3 bg-gray-200 cursor-pointer active:animate-wiggle transition duration-300">
            <IoIosArrowBack />
          </button>
          <button className="rounded-full p-3 bg-gray-200 cursor-pointer active:animate-wiggle transition duration-300">
            <IoIosArrowForward />
          </button>
        </div>
      </article>
    </section>
  );
}
