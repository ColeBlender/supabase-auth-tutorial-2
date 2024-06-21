"use client";

import { signOutAction } from "../actions/users";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";

function SignOutButton() {
  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = () => {
    startTransition(async () => {
      const { errorMessage } = await signOutAction();
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Successfully signed out");
        router.push("/");
      }
    });
  };

  return (
    <button
      onClick={handleClickSignOutButton}
      className="rounded-lg p-2 text-white flex justify-center bg-emerald-700 w-40"
      disabled={isPending}
    >
      {isPending ? <Loader2 className="animate-spin" /> : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
