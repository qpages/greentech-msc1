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

function HarvestingAnalysis() {
  return (
    <Card className="h-fit w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle>Optimizing harvesting itineraries</CardTitle>
        <CardDescription>
          Suggests the best itinerary to guarantee the best harvest in the
          shortest possible time.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-scroll">
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <InputFile label="Aerial photo of your vineyard" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex flex-wrap items-end justify-start gap-2">
        <Button className="justify-start" disabled>
          Optimize ✨
        </Button>
        <span className="pb-1 text-sm font-medium italic leading-none tracking-tight opacity-80">
          * requires harvest estimate above 80%.
        </span>
      </CardFooter>
    </Card>
  );
}

export { HarvestingAnalysis };
