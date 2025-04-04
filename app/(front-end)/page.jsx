import ArticleList from "@/components/frontend/ArticleList";
import CategoryList from "@/components/frontend/CategoryList";
import Hero from "@/components/frontend/Hero";
import { getData } from "@/lib/getData";
import Link from "next/link";
import React from "react";
import BrandList from "@/components/frontend/BrandList";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
export default async function page() {
  const categories = await getData("categories");
  // const filteredCategories = categories?.filter((category) => {
  //   return category.products.length > 3;
  // });
  const session = await getServerSession(authOptions);
  return (
    <>
      <Hero />
      <div className="py-4">
        <BrandList />
      </div>
      <div className="text-center">
        <h2 className="text-3xl font-extrabold">Chào mừng đến với website!</h2>
        <Link className="my-4 underline" href="/register-farmer">
          Trở thành đối tác của chúng tôi!
        </Link>
      </div>
      {categories.map((category, i) => {
        return (
          <div className="py-4" key={i}>
            <CategoryList isMarketPage={false} category={category} />
          </div>
        );
      })}
    </>
  );
}
