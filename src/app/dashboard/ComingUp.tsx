import ComingItem from "./ComingItem";

export default function ComingUp() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-black my-5">Coming Up</h1>
      <div className="flex flex-col justify-center items-center gap-5">
        <ComingItem />
        <ComingItem />
        <ComingItem />
        <button className="text-blue-500 self-start">View More</button>
      </div>
    </section>
  );
}
