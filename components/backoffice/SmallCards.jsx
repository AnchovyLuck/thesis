import React from "react";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Số đơn hàng",
      number: 37,
      iconBg: "bg-green-600",
      icon: ShoppingCart
    },
    {
      title: "Đang chờ xử lý",
      number: 30,
      iconBg: "bg-blue-600",
      icon: Loader2
    },
    {
      title: "Đang xử lý",
      number: 0,
      iconBg: "bg-orange-600",
      icon: RefreshCcw
    },
    {
      title: "Đã giao",
      number: 7,
      iconBg: "bg-purple-600",
      icon: CheckCheck
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
