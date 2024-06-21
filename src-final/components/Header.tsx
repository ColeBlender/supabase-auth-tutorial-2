"use client";

import { createSupabaseClient } from "../auth/client";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
import Link from "next/link";

function Header() {
  const [user, setUser] = useState<User | null>(null);

  const { auth } = createSupabaseClient();

  auth.onAuthStateChange((event, session) => {
    setUser(session?.user || null);
  });

  return (
    <div className="absolute top-0 bg-black text-white w-full h-20 flex items-center px-4 justify-between">
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        <Link href="/protected">Protected</Link>
      </div>

      <p>{user?.email || "Not logged in"}</p>
    </div>
  );
}

export default Header;
