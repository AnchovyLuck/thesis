import { DoorOpen, Search } from "lucide-react";

export default function SearchForm() {
  return (
    <form className="flex items-center mx-auto w-full">
      <label htmlFor="voice-search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <DoorOpen className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-lime-500 focus:border-lime-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500"
          placeholder="Tìm kiếm sản phẩm, loại sản phẩm, chợ..."
          required
        />
        <button
          type="button"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        ></button>
      </div>
      <button
        type="submit"
        className="text-slate-900 inline-flex whitespace-nowrap justify-center items-center min-w-36 py-2.5 px-3 ms-2 text-sm font-medium bg-lime-500 rounded-lg hover:bg-lime-600 focus:ring-4"
      >
        <Search className="w-4 h-4 me-2"/>
        Tìm kiếm
      </button>
    </form>
  );
}
