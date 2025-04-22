import GradesHeader from "./GradesHeader";
import SingleStudentGrades from "./SingleStudentGrades";
import TableStudentGrades from "./TableStudentGrades";
export default function Grades() {
  return (
    <section className="container">
      <GradesHeader />
      <section className="flex w-full mt-10">
        <TableStudentGrades />
        <SingleStudentGrades />
      </section>
    </section>
  );
}
