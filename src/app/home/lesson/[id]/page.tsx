import SideNav from "@/components/SideNav";

export default function Page({ params }: { params: { id: number } }) {
  // console.log({ params });

  return (
    <main className="flex min-h-screen flex-col items-center min-w-full">
      <SideNav />
      <h1>Lesson {params.id}</h1>
    </main>
  );
}
