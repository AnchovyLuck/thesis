import Hero from "@/components/frontend/Hero";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <Hero />
      <h2 className="text-3xl font-extrabold">Chào mừng đến với website!</h2>
      <Link className="my-4 underline" href="/register-farmer">
        Trở thành đối tác của chúng tôi!
      </Link>
    </>
  );
}
