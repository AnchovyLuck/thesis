import { Layers } from "lucide-react";
import React from "react";

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg text-white shadow-md py-7 px-4 flex items-center flex-col gap-2 ${data.color}`}>
      <Layers />
      <h4 className='h-9'>{data.period}</h4>
      <h2 className='lg:text-2xl text-xl min-w-24'>{data.sales} đ</h2>
    </div>
  );
}
