import GradeGraph from "./GradeGraph";
import IndividualStudentGrades from "./IndividualStudentGrades";

export default function Analytics() {
  return (
    <section>
      <header className="my-5 mx-2 mt-10">
        <h1 className="text-2xl font-bold flex gap-2 items-center">
          <p className="w-2 h-8 bg-cyan-600 inline-block"></p>
          <p>Grade Distribution Grade Distribution Graph</p>
        </h1>
      </header>
      <GradeGraph />
      <IndividualStudentGrades />
    </section>
  );
}
