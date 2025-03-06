import PageHeader from "@/components/backoffice/PageHeader";
import DataTable from "@/components/data-table-components/DataTable";
import { getData } from "@/lib/getData";
import React from "react";
import { columns } from "./columns";

export default async function page() {
  const articles = await getData("articles")
  return (
    <div>
      {
        <PageHeader
          heading="Bài viết"
          href="/dashboard/articles/new"
          linkTitle="Thêm Bài viết"
        />
      }
      <div className="py-8">
        <DataTable data={articles} columns={columns}/>
      </div>
    </div>
  );
}
