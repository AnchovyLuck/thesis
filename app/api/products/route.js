import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const {
      title,
      sku,
      barcode,
      productPrice,
      salePrice,
      productStock,
      unit,
      categoryId,
      farmerId,
      isWholeSale,
      wholeSalePrice,
      wholeSaleQty,
      imageUrl,
      tags,
      description,
      isActive,
      productCode,
      slug,
      qty
    } = await request.json()
    const existingProduct = await db.product.findUnique({
      where: {
        slug
      }
    })
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: 'Sản phẩm đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const newProduct = await db.product.create({
      data: {
        title,
        sku,
        barcode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(productPrice),
        productStock: parseInt(productStock),
        unit,
        categoryId,
        userId: farmerId,
        farmerId: farmerId,
        isWholeSale,
        wholeSalePrice: parseFloat(wholeSalePrice),
        wholeSaleQty: parseInt(wholeSaleQty),
        imageUrl,
        tags,
        description,
        isActive,
        productCode,
        slug,
        qty: parseInt(qty)
      }
    })
    console.log(newProduct)
    return NextResponse.json(newProduct)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(products)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
