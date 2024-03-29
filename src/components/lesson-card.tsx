

// import ThumbsUpChicken from "./chic1nakey.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function LessonCard() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center h-full space-y-4 flex-grow px-16 pt-8 gap-4 overflow-auto">
        <h1 className="text-6xl font-bold text-eel">
          Learn American Sign Language
        </h1>
        <div className="flex items-center justify-between bg-[#6BA6FF] p-4 rounded-lg min-w-[700px] max-w-[800px] min-h-[200px] px-24">
          <div className="flex flex-col text-white gap-4">
            <h2 className="text-4xl font-bold">Lesson 1</h2>
            <Button className="bg-wing-overlay drop-shadow-2xl hover:bg-feather-green ">
              Start
            </Button>
          </div>
          <Image
            src="/chic1nakey.png"
            width={144}
            height={144}
            alt="Picture of chicken with thumbs up"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-400 p-4 rounded-lg min-w-[700px] max-w-[800px] min-h-[200px] px-24">
          <div className="flex flex-col text-white gap-4">
            <h2 className="text-4xl font-bold">Lesson 2</h2>
            <div className="flex gap-4">
              <LockIcon className="h-8 w-8 text-black" />
              <h2 className="text-2xl font-bold"> Locked</h2>
            </div>
          </div>
          <Image
            className="grayscale-[80%]"
            src="/chic2nakey.png"
            width={144}
            height={144}
            alt="Picture of chicken"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-400 p-4 rounded-lg min-w-[700px] max-w-[800px] min-h-[200px] px-24">
          <div className="flex flex-col text-white gap-4">
            <h2 className="text-4xl font-bold">Lesson 3</h2>
            <div className="flex gap-4">
              <LockIcon className="h-8 w-8 text-black" />
              <h2 className="text-2xl font-bold"> Locked</h2>
            </div>
          </div>
          <Image
            className="grayscale-[80%]"
            src="/chic2nakey.png"
            width={144}
            height={144}
            alt="Picture of chicken"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-400 p-4 rounded-lg min-w-[700px] max-w-[800px] min-h-[200px] px-24">
          <div className="flex flex-col text-white gap-4">
            <h2 className="text-4xl font-bold">Lesson 4</h2>
            <div className="flex gap-4">
              <LockIcon className="h-8 w-8 text-black" />
              <h2 className="text-2xl font-bold"> Locked</h2>
            </div>
          </div>
          <Image
            className="grayscale-[80%]"
            src="/chic2nakey.png"
            width={144}
            height={144}
            alt="Picture of chicken"
          />
        </div>

        <div className="flex items-center justify-between bg-gray-400 p-4 rounded-lg min-w-[700px] max-w-[800px] min-h-[200px] px-24">
          <div className="flex flex-col text-white gap-4">
            <h2 className="text-4xl font-bold">Lesson 5</h2>
            <div className="flex gap-4">
              <LockIcon className="h-8 w-8 text-black" />
              <h2 className="text-2xl font-bold"> Locked</h2>
            </div>
          </div>
          <Image
            className="grayscale-[80%]"
            src="/chic2nakey.png"
            width={144}
            height={144}
            alt="Picture of chicken"
          />
        </div>
      </div>
    </div>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
