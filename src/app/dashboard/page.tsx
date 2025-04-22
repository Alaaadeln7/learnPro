import DashboardContent from "./DashboardContent";
import StatisticsDashboard from "./StatisticsDashboard";
export default function page() {
  return (
    <section>
      <StatisticsDashboard />
      <DashboardContent />
    </section>
  );
}
