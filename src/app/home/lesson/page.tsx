import SideNav from "@/components/SideNav";
import { LessonCard } from "@/components/lesson-card";

export default function Page() {
  // console.log({ params });

  return (
    <main className="flex min-h-screen items-center min-w-full">
      <SideNav />
      <LessonCard />
    </main>
  );
}
