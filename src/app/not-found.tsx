import Image from "next/image";
import notFoundImage from "../../public/not-found-page.png";
export default function notFound() {
  return (
    <section className="h-screen w-screen flex flex-col justify-center items-center bg-gray-100">
      <Image src={notFoundImage} alt={"not found image"} />
      <h1 className="text-4xl font-bold text-black">{"Hello 404"}</h1>
    </section>
  );
}
