import React from "react";
import { Download, Plus, Search, Trash } from "lucide-react";
export default function TableActions() {
  return (
    <div className="flex justify-between py-6 px-12 bg-white dark:bg-slate-700 rounded-lg items-center gap-8">
      <button className="relative inline-flex items-center justify-center p-0.5 py-3 px-4 space-x-3 text-base font-medium text-gray-900 rounded-lg group bg-lime-600  hover:text-white dark:text-white hover:bg-lime-600/90">
        <Download />
        <span>Xuất File</span>
      </button>
      <div className="flex-grow">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
            placeholder="Tìm kiếm"
          />
        </div>
      </div>
      <button className="flex items-center space-x-2 bg-red-700 hover:bg-red-600 text-white rounded-lg px-6 py-3">
        <Trash />
        <span>Xoá Nhiều Dòng</span>
      </button>
    </div>
  );
}
