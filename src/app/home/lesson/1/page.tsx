"use client";

import SideNav from "@/components/SideNav";
import { LessonCard } from "@/components/lesson-card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Page() {
  const router = useRouter();

  return (
    <main className="flex h-screen items-center w-screen">
      <SideNav />
      <div className="flex flex-col items-center h-full w-full space-y-4 flex-grow px-16 py-20 gap-4 overflow-auto justify-start">
        <h1 className="text-6xl font-bold text-eel">Lesson 1: Letters</h1>

        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            <CarouselItem key={1}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <h2 className="text-3xl font-bold text-eel">
                        Letter "A"
                      </h2>
                      <Image
                        src="/a.png"
                        alt="letter a"
                        width={100}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem key={2}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <h2 className="text-3xl font-bold text-eel">
                        Letter "B"
                      </h2>
                      <Image
                        src="/b.png"
                        alt="letter b"
                        width={100}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem key={3}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <h2 className="text-3xl font-bold text-eel">
                        Letter "C"
                      </h2>
                      <Image
                        src="/c.png"
                        alt="letter c"
                        width={100}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem key={4}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <h2 className="text-3xl font-bold text-eel">
                        Letter "D"
                      </h2>
                      <Image
                        src="/d.png"
                        alt="letter d"
                        width={100}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>

            <CarouselItem key={5}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 gap-4">
                    <div className="flex flex-col items-center justify-center gap-6">
                      <h2 className="text-3xl font-bold text-eel">
                        Letter "E"
                      </h2>
                      <Image
                        src="/e.png"
                        alt="letter e"
                        width={100}
                        height={100}
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Button
          onClick={() => router.push("/home/lesson")}
          className="bg-[#6BA6FF] text-white py-6 px-20 rounded-lg din-rounded font-bold text-xl hover:bg-[#2b70c9] border-2 border-[#2b70c9] drop-shadow-2xl max-w-60"
        >
          Finished
        </Button>

        <Button
          onClick={() => router.push("/video")}
          className="bg-wing-overlay drop-shadow-2xl hover:bg-feather-green text-white border-green py-6 px-20 rounded-lg din-rounded font-bold text-xl  border-2 max-w-60 border-mask-green"
        >
          Ready to test?
        </Button>
      </div>
    </main>
  );
}
