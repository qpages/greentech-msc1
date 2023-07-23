import {
  Bar,
  BarChart,
  Label,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/utils";

function SelectSensor() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Temperature" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a parameter</SelectLabel>
          <SelectItem value="temperature">Temperature (°C)</SelectItem>
          <SelectItem value="humidity">Humidity (%)</SelectItem>
          <SelectItem value="potassium">Potassium (K)</SelectItem>
          <SelectItem value="azote">Azote (N)</SelectItem>
          <SelectItem value="Phosphore">Phosphore (P)</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

const data = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * -10),
  },
  {
    name: "Fev",
    total: Math.floor(Math.random() * -20),
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * -5),
  },
  {
    name: "Avr",
    total: Math.floor(Math.random() * 10),
  },
  {
    name: "Mai",
    total: Math.floor(Math.random() * 15),
  },
  {
    name: "Jui",
    total: Math.floor(Math.random() * 20),
  },
  {
    name: "Jui",
    total: Math.floor(Math.random() * 30),
  },
  {
    name: "Aout",
    total: Math.floor(Math.random() * 40),
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 25),
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 15),
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5),
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * -5),
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}°C`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const DatePickerWithRange = ({
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

const SensorDataHistory = () => {
  return (
    <Card className="w-[350px] sm:w-[450px] md:w-[550px]">
      <CardHeader>
        <CardTitle>Sensor Data History 📆</CardTitle>
        <CardDescription>
          Retrieve results from the various sensors installed in the vineyard
        </CardDescription>
        <div className="flex flex-col gap-3 py-4">
          <span className="text-sm font-semibold opacity-80">
            Pick the period
          </span>
          <DatePickerWithRange />
        </div>
        <SelectSensor />
      </CardHeader>
      <CardContent className="px-10">
        <Chart />
      </CardContent>
      <CardFooter className="flex justify-start">
        <Button>See more details 🔍</Button>
      </CardFooter>
    </Card>
  );
};

export { SensorDataHistory };
