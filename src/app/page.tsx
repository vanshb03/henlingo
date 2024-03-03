"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();
  return (
    <div className="flex flex-col w-screen h-screen">
      {/* nav bar */}
      <Link className="flex items-center py-4 pl-32" href="/">
        <h2 className="font-feather-bold text-4xl text-[#6BA6FF]">henlingo</h2>
      </Link>
      {/* hero section */}
      <div className="flex flex-row pt-24 mx-60 justify-evenly">
        <div className="flex ">
          <Image
            src="/chic3nakey.png"
            width={400}
            height={400}
            alt="Picture of chicken"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full pt-10 gap-10">
          <span className="din-rounded font-bold text-eel text-4xl text-center max-w-82  whitespace-normal">
            The fun way to learn <br />
            American Sign Language!
          </span>
          <div className="flex items-center justify-center w-full">
            <Button
              onClick={() => router.push("/home")}
              className="bg-[#6BA6FF] text-white py-6 px-20 rounded-lg din-rounded font-bold text-xl hover:bg-[#2b70c9] border-2 border-[#2b70c9] drop-shadow-2xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
