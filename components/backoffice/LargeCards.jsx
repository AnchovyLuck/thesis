import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const revenueStats = [
    {
      period: "Doanh thu hôm nay",
      sales: 50000,
      color: "bg-green-600",
    },
    {
      period: "Doanh thu hôm qua",
      sales: 30000,
      color: "bg-blue-600",
    },
    {
      period: "Doanh thu tháng này",
      sales: 2000000,
      color: "bg-orange-600",
    },
    {
      period: "Tổng doanh thu",
      sales: 3750000,
      color: "bg-purple-600",
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {
        revenueStats.map((data, i) => {
          return(
            <LargeCard data={data} key={i} />
          )
        })
      }
    </div>
  );
}
