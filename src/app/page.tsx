import { TeamArea } from "@/components/team/team-area";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <div className="min-h-screen w-full max-w-2xl mx-auto">

            <ThemeToggle />

            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Faça o seu Login</CardTitle>
                    <CardDescription>Digite seus dados de login</CardDescription>
                </CardHeader>
                <CardContent>
                    ...
                </CardContent>
            </Card>

        </div>
    )
}