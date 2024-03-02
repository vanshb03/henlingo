export default function Page({ params }: { params: { id: number } }) {
  // console.log({ params });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Lesson {params.id}</h1>
    </main>
  );
}
