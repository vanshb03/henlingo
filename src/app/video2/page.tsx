"use client";

import { CardContent, Card } from "@/components/ui/card";
import VideoComponent from "@/components/component/VideoComponent";

export default function Component() {
  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold">Recreate the letter in the first line. Tap the image.</h3>
          <h3 className="text-lg font-bold">
            <span className="block mx-auto">A</span>
          </h3>
        </div>
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed border-gray-200 dark:border-gray-800">
          <VideoComponent />
        </div>
      </CardContent>
    </Card>
  );
}
