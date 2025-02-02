import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {
        <PageHeader
          heading="Nhà Cung Cấp"
          href="/dashboard/markets/new"
          linkTitle="Thêm Nhà Cung Cấp"
        />
      }
      <TableActions />
      <div className="py-8">
        <h2>Bảng</h2>
      </div>
    </div>
  );
}
