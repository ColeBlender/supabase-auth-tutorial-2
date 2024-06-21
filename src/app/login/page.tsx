"use client";

import Link from "next/link";

function LoginPage() {
  const handleClickLoginButton = () => {};

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
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded-lg p-2"
        />

        <button className="rounded-lg p-2 mt-4 bg-black text-white flex justify-center">
          Login
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
