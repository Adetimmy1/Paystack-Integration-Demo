"use client";
import UserForm from "@/components/UserForm";
import { useState } from "react";
export default function Home() {
  const [donate, useDonate] = useState(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      {!donate && (
        <button
          className="rounded-3xl border dark:border-gray-300 px-3 py-1.5 hover:bg-white hover:text-gray-900"
          onClick={() => useDonate(!donate)}
        >
          Donate Now
        </button>
      )}
      {donate && <UserForm />}
    </main>
  );
}
