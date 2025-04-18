import FarmerForm from "@/components/backoffice/forms/FarmerForm";
import { getData } from "@/lib/getData";
import React from "react";

export const dynamic = 'force-dynamic';
export default async function page({params}) {
  const {id} = await params
  const user = await getData(`users/${id}`)
  console.log(user)
  return (
    <div className="flex flex-col gap-6 p-16">
      <div className="max-w-4xl p-4 mx-auto">
        <h2 className="text-3xl font-extrabold text-center">Xin chào {user?.userName}, vui lòng bổ sung thông tin!</h2>
      </div>
      <FarmerForm user={user}/>
    </div>
  );
}
