"use client";

import { loginAction } from "@/actions/users";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

function LoginPage() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickLoginButton = (formData: FormData) => {
    startTransition(async () => {
      const { errorMessage } = await loginAction(formData);
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Successfully logged in");
        router.push("/");
      }
    });
  };

  return (
    <div className="bg-emerald-700 w-96 rounded-lg p-8">
      <h1 className="text-2xl text-center mb-8">Login</h1>

      <form
        className="flex flex-col bg-emerald-700 gap-4"
        action={handleClickLoginButton}
      >
        <input
          type="email"
          name="email"
          className="rounded-lg p-2"
          placeholder="Email"
          disabled={isPending}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-lg p-2"
          disabled={isPending}
        />

        <button
          className="rounded-lg p-2 mt-4 bg-black text-white flex justify-center"
          disabled={isPending}
        >
          {isPending ? <Loader2 className="animate-spin" /> : "Login"}
        </button>
      </form>

      <p className="text-center text-sm mt-4">
        Don't have an account?{" "}
        <Link href="/create-account" className="underline">
          Create Account
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
