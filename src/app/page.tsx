import { LoginForm } from "@/components/login-form";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
    return (
        <div className="min-h-screen w-full max-w-2xl mx-auto">

            <ThemeToggle />

            <LoginForm />

        </div>
    )
}