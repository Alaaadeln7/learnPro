import Step from "./Step";
import { stepsData } from "../../../data/stepData";
export default function Steps() {
  const printSteps = stepsData.map((step) => {
    return (
      <Step
        key={step.id}
        number={step.number}
        title={step.title}
        desc={step.desc}
        color={step.color}
      />
    );
  });
  return (
    <section className="bg-blue-200 py-10 mt-10">
      <header className="flex flex-col justify-center items-center space-y-4 text-center">
        <h2 className="capitalize text-gary-800">how it works</h2>
        <h1 className="text-3xl font-bold capitalize">Start in 3 Easy Steps</h1>
      </header>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {printSteps}
      </div>
    </section>
  );
}
