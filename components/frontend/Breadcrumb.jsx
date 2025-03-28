import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ title }) {
  return (
    <nav className="flex mb-8" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
          >
            <Home className="w-3 h-3 me-2.5" />
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight className="rtl:rotate-180 w-3 h-3 text-slate-400 mx-1" />
            {title}
          </div>
        </li>
      </ol>
    </nav>
  );
}
