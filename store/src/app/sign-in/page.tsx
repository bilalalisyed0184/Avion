"use client";
import { Button } from "@/components/ui/button";
import {  
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useState } from "react";
import { sign } from "crypto";
import { redirect } from "next/dist/server/api-utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { set } from "sanity";
import { TriangleAlert } from "lucide-react";

export default function SignIn() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [pending, setPending] = useState(false);
    const router = useRouter();
    const [error, setError] = useState<string>("");
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        const res = await signIn("credentials", {
            redirect: false,
            email,
            password
        });
        if (res?.ok){
            router.push("/");
            toast.success("Signed in successfully");
        } else if (res?.status === 400) {
            setError("Invalid email or password");
            setPending(false);
        } else {
            setError("Something went wrong. Please try again later");
            setPending(false);
        }
    };

    return (
      <div className="h-full flex items-center bg-[#1b0918]">
        <Card className="md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
                <CardTitle className="text-center">Sign In</CardTitle>
                <CardDescription className="text-sm text-center text-accent-foreground">Sign In to get started</CardDescription>
                
            </CardHeader>
            {!!error && (
                <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                    <TriangleAlert />
                    <p>{error}</p>
                </div>
            )}
            <CardContent className="px-2 sm:px-6">
                <form onSubmit={handleSubmit} className="space-y-3">
                    <Input 
                        type="email" 
                        disabled={pending}
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input 
                        type="password" 
                        disabled={pending}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Button
                     className="w-full"
                     size="lg"
                     disabled={pending}
                    >continue</Button>
                </form>
                <Separator />
                <div className="flex justify-evenly mx-auto items-center">
                    <Button
                        disabled={false}
                        onClick={() => {}}
                        variant="outline"
                        size="lg"
                        className="bg-slate-300 hover:bg-slate-400 hover:scale-110"
                    >
                        <FcGoogle className="size-8 left-2.5 top-2.5" />
                    </Button>
                </div>
                <p className="text-center text-sm mt-2 text-muted-foreground">Create new account
                    <Link className="text-sky-700 ml-4 hover:underline cursor-pointer" href="sign-up">Sign up</Link>
                </p>
            </CardContent>
        </Card>
      </div>
    );
  }