import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import React from "react";

export default function page() {
  return (
    <div>
      {
        <PageHeader
          heading="Loại Sản Phẩm"
          href="/dashboard/categories/new"
          linkTitle="Thêm Loại Sản Phẩm"
        />
      }
      <TableActions />
      <div className="py-8">
        <h2>Bảng</h2>
      </div>
    </div>
  );
}
