import DashboardSidebar from "./DashboardSidebar";
import PerformanceOverview from "./PerformanceOverview";
import StudentsSummary from "./StudentsSummary";
import TopPublishedCourse from "./TopPublishedCourse";

export default function DashboardContent() {
  return (
    <main className="px-5 flex w-full flex-wrap">
      <section className="w-full sm:w-9/12 px-10 py-5">
        <StudentsSummary />
        <PerformanceOverview />
        <TopPublishedCourse />
      </section>
      <DashboardSidebar />
    </main>
  );
}
