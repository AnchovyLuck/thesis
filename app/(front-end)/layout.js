import Footer from "@/components/frontend/Footer";
import Navbar from "@/components/frontend/Navbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 fixed w-full">
      <Navbar />
      <div className="mx-auto h-[calc(100vh-7rem)] overflow-y-auto mt-28 flex flex-col justify-between">
        <div className="px-8 lg:px-6 py-6">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
