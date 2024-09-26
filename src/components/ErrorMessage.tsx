import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
  error: string
}

export function ErrorMessage({ error }: Props) {
  return (
    <Alert variant={"destructive"}>
      <AlertTitle>Erro!</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  )
}