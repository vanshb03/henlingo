import { CardContent, Card } from "@/components/ui/card";

export function video() {
  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <CardContent className="space-y-4">
        <div className="space-y-2 text-center">
          <h3 className="text-lg font-bold">
            Recreate the letter in the first line. Tap the image.
          </h3>
          <h3 className="text-lg font-bold">
            <span className="block mx-auto">A</span>
          </h3>
        </div>
        <div className="flex items-center justify-center p-4 border border-gray-200 rounded-lg border-dashed dark:border-gray-800 dark:border-gray-800">
          <img
            alt="Image"
            className="aspect-[16/9] object-cover rounded-lg border border-gray-200 border-gray-300 dark:border-gray-700 dark:rounded-lg dark:border-gray-800"
            height="450"
            src="/placeholder.svg"
            width="800"
          />
        </div>
      </CardContent>
    </Card>
  );
}
