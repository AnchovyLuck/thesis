import React from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Số đơn hàng",
      number: 37,
      iconBg: "bg-green-600",
      icon: ShoppingCart
    },
    {
      title: "Đang xử lý",
      number: 37,
      iconBg: "bg-blue-600",
      icon: ShoppingCart
    },
    {
      title: "Đang giao hàng",
      number: 0,
      iconBg: "bg-orange-600",
    },
    {
      title: "Đã giao",
      number: 7,
      iconBg: "bg-blue-600",
    }
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i}/>;
      })}
    </div>
  );
}
