import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { InputFile } from "./InputFile";

function HealthAnalysis() {
  return (
    <Card className="h-fit w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle>Analyze the grasp</CardTitle>
        <CardDescription>
          Upload a grasp picture and let our AI detects the grasp's health.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-scroll">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <InputFile label="Grasp picture" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-start">
        <Button>Analyze ✨</Button>
      </CardFooter>
    </Card>
  );
}

export { HealthAnalysis };
