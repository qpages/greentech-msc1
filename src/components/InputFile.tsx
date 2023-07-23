import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type InputFileProps = {
  label: string;
};

const InputFile = ({ label }: InputFileProps) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={label}>{label}</Label>
      <Input id={label} type="file" accept="image/png, image/jpeg" required />
    </div>
  );
};

export { InputFile };
