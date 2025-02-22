import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {
        <PageHeader
          heading="Nông Dân"
          href="/dashboard/farmers/new"
          linkTitle="Thêm Nông Dân"
        />
      }
      <TableActions />
      <div className="py-8">
        <h2>Bảng</h2>
      </div>
    </div>
  );
}
