"use client";

import { signOutAction } from "@/actions/users";
import { Loader2 } from "lucide-react";
import { useTransition } from "react";

function SignOutButton() {
  const [isPending, startTransition] = useTransition();

  const handleClickSignOutButton = async () => {
    startTransition(async () => {
      await signOutAction();
    });
  };

  return (
    <button
      onClick={handleClickSignOutButton}
      className="rounded-lg p-2 text-white flex justify-center bg-emerald-700 w-40"
    >
      {isPending ? <Loader2 className="animate-spin" /> : "Sign Out"}
    </button>
  );
}

export default SignOutButton;
