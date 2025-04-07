import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, slug, logoUrl, description, isActive, productIds } =
      await request.json();
    const existingBrand = await db.brand.findUnique({
      where: {
        slug,
      },
    });
    const brandProducts = await db.product.findMany({
      where: {
        id: {
          in: productIds,
        },
      }
    })
    if (existingBrand) {
      return NextResponse.json(
        {
          data: null,
          message: "Thương hiệu này đã tồn tại!",
        },
        {
          status: 409,
        },
      );
    }
    const newBrand = await db.brand.create({
      data: {
        title,
        slug,
        logoUrl,
        description,
        isActive,
        products: {
          connect: brandProducts.map(product => ({ id: product.id }))
        }
      },
    });
    return NextResponse.json(newBrand);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Thêm thương hiệu thất bại!",
        error,
      },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const brands = await db.brand.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: true,
      },
    });
    return NextResponse.json(brands);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Hiển thị danh sách thương hiệu thất bại!",
        error,
      },
      { status: 500 },
    );
  }
}
