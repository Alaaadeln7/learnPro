import { featureData } from "../../../data/featureData.js";
import Feature from "./Feature";
export default function Features() {
  const printFeatures = featureData.map((feature) => (
    <Feature key={feature.id} {...feature} />
  ));
  return (
    <section>
      <header className="flex flex-col justify-center items-center space-y-4 text-center">
        <h2 className="text-gray-700 font-semibold text-center mt-10 text-2xl">
          Features
        </h2>
        <h1 className="sm:text-5xl text-2xl text-bold text-center mx-2 my-3">
          Why Choose LearnPro?
        </h1>
      </header>
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-10 mt-20">
        {printFeatures}
      </div>
    </section>
  );
}
