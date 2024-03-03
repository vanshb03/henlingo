import SideNav from "@/components/SideNav";
import { QuizCard } from "@/components/ui/quiz-card";

export default function Page() {
  // console.log({ params });

  return (
    <main className="flex min-h-screen items-center min-w-full">
      <SideNav />
      <QuizCard />
    </main>
  );
}
