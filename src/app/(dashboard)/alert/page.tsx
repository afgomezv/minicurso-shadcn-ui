import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { RocketIcon } from "@radix-ui/react-icons";

export default function AlertPage() {
  return (
    <div className="grid gap-3">
      <Alert>
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the clic.
        </AlertDescription>
      </Alert>
      <Alert variant="destructive">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Danger!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the clic.
        </AlertDescription>
      </Alert>
      <Alert variant="success">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the clic.
        </AlertDescription>
      </Alert>
    </div>
  );
}
