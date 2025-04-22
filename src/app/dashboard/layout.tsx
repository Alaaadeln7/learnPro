import DashboardHeader from "./DashboardHeader";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <section>
      <DashboardHeader />
      <div>{children}</div>
    </section>
  );
}
