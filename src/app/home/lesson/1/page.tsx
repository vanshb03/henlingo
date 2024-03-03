import SideNav from "@/components/SideNav";
import { LessonCard } from "@/components/lesson-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="flex h-screen items-center w-screen">
      <SideNav />
      <div className="flex flex-col items-center h-full w-full space-y-4 flex-grow px-16 pt-16 gap-4 overflow-auto justify-start">
        <h1 className="text-6xl font-bold text-eel">Lesson 1: Letters</h1>
        {/* Add content here for lesson 1 @Vansh */}
        <h1>Insert Video Here</h1>
        <h1>Insert Letter</h1>

        <h1>Insert Video Here</h1>
        <h1>Insert Letter</h1>

        <h1>Insert Video Here</h1>
        <h1>Insert Letter</h1>

        <h1>Insert Video Here</h1>
        <h1>Insert Letter</h1>
      </div>
    </main>
  );
}
