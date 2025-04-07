import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug } = await params;
  try {
    const brand = await db.brand.findUnique({
      where: {
        slug,
      },
      include: {
        products: true
      }
    });
    return NextResponse.json(brand);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Hiển thị thương hiệu thất bại!",
        error,
      },
      { status: 500 },
    );
  }
}
