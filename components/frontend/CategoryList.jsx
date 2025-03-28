import Link from "next/link";
import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList({ category, isMarketPage }) {
  return (
    <div className="border rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-800 overflow-y-hidden shadow-md">
      <div className="bg-slate-300 dark:bg-slate-800 py-8 px-6  text-slate-800 dark:text-slate-100 h-12 flex justify-between items-center">
        <h2 className="font-bold">{category.title}</h2>
        <Link
          className="bg-lime-600 hover:bg-lime-700 text-slate-50 rounded-md px-4 py-2"
          href={`/category/${category.slug}`}
        >
          Xem thêm
        </Link>
      </div>
      <div className="px-4 py-4">
        <CategoryCarousel isMarketPage={isMarketPage} products={category.products} />
      </div>
    </div>
  );
}
