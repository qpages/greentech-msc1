import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";

function VineyardIndicators() {
  const [progress, setProgress] = useState(0);
  const [water, setWater] = useState(0);
  const [harvest, setHarvest] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(5.5), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setWater(68.3), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHarvest(17.9), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="h-fit w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle>Global metrics 🎯</CardTitle>
        <CardDescription>
          Find all the key indicators for your vineyard installation and add new
          ones if necessary.
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-scroll">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium opacity-80">Usage</h3>
          <div className="flex flex-col gap-2 rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Parasites 🐛
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-green-700 opacity-90">
                5.5%
              </span>
              <Progress value={progress} className="w-[80%]" />
            </div>
          </div>
          <div className="flex flex-col gap-2 rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Water usage 💧
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-blue-500 opacity-90">
                68.3%
              </span>
              <Progress value={water} className="w-[80%]" />
            </div>
          </div>
          <div className="flex justify-between rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Drone squaring 🛰️
            </span>
            <div className="w-fit rounded-md border bg-green-500 px-2 py-1">
              <span className="font-semibold text-white">active</span>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-medium opacity-80">Prediction</h3>
          <div className="flex flex-col gap-2 rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Harvesting time estimation 🍷
            </span>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-pink-700 opacity-90">
                17.9%
              </span>
              <Progress value={harvest} className="w-[80%]" />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Optimal Watering 🚿
            </span>
            <div className="w-fit rounded-md border-2 px-2 py-1">
              <span className="font-semibold">now 🕔</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-md border border-slate-100 p-2">
            <span className="text-lg font-semibold opacity-80">
              Fertilizer Spreading 🧪
            </span>
            <div className="w-fit rounded-md border-2 px-2 py-1">
              <span className="font-semibold">25/07/23 - 13:30 🕔</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-start gap-3">
        <Button>See in details 🔍</Button>
        <Button variant="secondary">Add a metric ➕</Button>
      </CardFooter>
    </Card>
  );
}

export { VineyardIndicators };
