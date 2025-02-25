import React from "react";
import SearchForm from "./SearchForm";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-nocap.png";
import { ShoppingCart, User } from "lucide-react";
import ThemeSwitcherButton from "../ui/ThemeSwitcherButton";
import HelpModal from "./HelpModal";

export default function Navbar() {
  return (
    <div className="bg-gray-200 dark:bg-slate-800 h-28 fixed w-full">
      <div className="flex items-center justify-between py-3 w-full mx-auto px-8 gap-8">
        <Link className="" href="/">
          <Image src={logo} alt="online shop logo" className="w-24" />
        </Link>
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-8">
          <Link
            href="/login"
            className="flex items-center text-green-950 dark:text-slate-100 space-x-2"
          >
            <User />
            <span className="absolute invisible lg:visible lg:relative font-bold">
              Đăng nhập
            </span>
          </Link>

          <HelpModal />
          <Link
            href="/cart"
            type="button"
            className="relative inline-flex items-center p-3
        text-sm font-medium text-center text-while bg-transparent rounded-lg"
          >
            <ShoppingCart className="text-lime-700 dark:text-lime-500" />
            <span className="sr-only">Cart</span>
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
              20
            </div>
          </Link>
        </div>
        <ThemeSwitcherButton />
      </div>
    </div>
  );
}
