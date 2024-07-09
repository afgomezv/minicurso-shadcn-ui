import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="flex gap-4">
      <Badge capitalize>default</Badge>
      <Badge variant="secondary">secondary</Badge>
      <Badge variant="outline">outline</Badge>
      <Badge variant="destructive">destructive</Badge>
      <Badge variant="info">info</Badge>
      <Badge capitalize variant="success">
        success
      </Badge>
    </div>
  );
}
