"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
export default function Component() {
  const router = useRouter();

  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl p-4">
        <div className="flex justify-between items-center">
          <SettingsIcon
            onClick={() => router.push("/home")}
            className="text-gray-400"
          />
          <div className="ml-4" />
          {/* use state to keep progress */}

          <Progress value={33} />
          <div className="flex items-center ml-4">
            <HeartIcon className="text-red-500" />
            <p className="text-red-500 font-din-rounded">5</p>
          </div>
        </div>

        <div className="mt-12 bg-green-100 rounded-lg p-4 flex items-center justify-between">
          <CheckIcon className="text-green-500" />
          <span className="text-green-500 font-din-rounded font-bold ">
            Excellent!
          </span>
          <Button className="bg-green-500 text-white py-2 px-6 font-din-rounded rounded-lg hover:bg-green-400">
            Continue
          </Button>
        </div>

        <div className="mt-12 bg-red-100 rounded-lg p-4 flex items-center justify-between">
          <WrongIcon className="text-red-500" />
          <span className="text-red-500 font-din-rounded font-bold ">
            Incorrect :(
          </span>
          <Button className="bg-red-500 text-white py-2 px-6 font-din-rounded rounded-lg hover:bg-red-400">
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function WrongIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function FileAudioIcon(props: any) {
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
      <path d="M17.5 22h.5c.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4V7.5L14.5 2H6c-.5 0-1 .2-1.4.6C4.2 3 4 3.5 4 4v3" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M10 20v-1a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0Z" />
      <path d="M6 20v-1a2 2 0 1 0-4 0v1a2 2 0 1 0 4 0Z" />
      <path d="M2 19v-3a6 6 0 0 1 12 0v3" />
    </svg>
  );
}

function HeartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
    >
      <path
        d="M2.65625 13.4717C2.65625 16.2267 4.05262 18.6627 6.19106 20.1401L15.3112 28.0973C16.3946 29.0426 18.0133 29.03 19.0819 28.0679L28.254 19.8104C30.1391 18.3144 31.3438 16.0307 31.3438 13.4717C31.3438 8.96552 27.6079 5.3125 22.9993 5.3125C20.6443 5.3125 18.5172 6.26635 17 7.80049C15.4828 6.26635 13.3557 5.3125 11.0008 5.3125C6.39223 5.3125 2.65625 8.96552 2.65625 13.4717Z"
        fill="#FF4B4B"
        stroke="white"
        stroke-width="2"
      />
      <path
        opacity="0.3"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6619 16.9888C12.5042 16.9888 13.9977 15.4513 13.9977 13.5546C13.9977 11.6579 12.5042 10.1204 10.6619 10.1204C8.81964 10.1204 7.32617 11.6579 7.32617 13.5546C7.32617 15.4513 8.81964 16.9888 10.6619 16.9888Z"
        fill="white"
      />
    </svg>
  );
}

function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
