import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

const data = [
  {
    nutriment: "Potassium (K)",
    value: "100 mg/kg",
    statut: "wrong",
  },
  {
    nutriment: "Azote (N)",
    value: "3,7 kg/ha",
    statut: "cautious",
  },
  {
    nutriment: "Phosphore (P)",
    value: "100 mg/kg",
    statut: "good",
  },
  {
    nutriment: "Magnesium (Mg)",
    value: "6,5 mg/kg",
    statut: "wrong",
  },
];

const FormatStatut = ({ statut }: { statut: string }) => {
  if (statut === "wrong") return "🔴";
  if (statut === "cautious") return "🟡";
  if (statut === "good") return "🟢";
};

function Nutrients() {
  return (
    <Card className="h-fit w-[350px] md:w-[400px]">
      <CardHeader>
        <CardTitle>Nutrients 🌱</CardTitle>
        <CardDescription>Prevents soil nutrient deficiencies.</CardDescription>
      </CardHeader>
      <CardContent className="overflow-scroll">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nutriment</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>Statut</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((d) => (
              <TableRow key={d.nutriment}>
                <TableCell className="font-medium">{d.nutriment}</TableCell>
                <TableCell>{d.value}</TableCell>
                <TableCell className="text-right">
                  <FormatStatut statut={d.statut} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-start">
        <Button>See in details 🔍</Button>
      </CardFooter>
    </Card>
  );
}

export { Nutrients };
