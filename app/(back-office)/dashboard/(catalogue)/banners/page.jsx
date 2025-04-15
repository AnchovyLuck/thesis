import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";

export const dynamic = 'force-dynamic';
export default async function page() {
  const banners = await getData("banners")
  return (
    <div>
      {
        <PageHeader
          heading="Banner"
          href="/dashboard/banners/new"
          linkTitle="Thêm Banner"
        />
      }
      <div className="py-8">
        <DataTable data={banners} columns={columns}/>
      </div>
    </div>
  );
}
