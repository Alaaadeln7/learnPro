import CreateCourseHeader from "./CreateCourseHeader";
import Sidebar from "./Sidebar";
interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <section>
      <CreateCourseHeader />

      <div className="px-20 mt-10 flex">
        <Sidebar />
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
