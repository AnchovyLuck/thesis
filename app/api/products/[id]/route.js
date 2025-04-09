import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET (request, { params }) {
  const { id } = await params
  try {
    const product = await db.product.findUnique({
      where: {
        id
      },
      include: {
        category: true,
        user: true
      }
    })
    return NextResponse.json(product)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function DELETE (request, { params }) {
  const { id } = await params
  try {
    const existingProduct = await db.product.findUnique({
      where: {
        id
      },
      include: {
        category: true,
        user: true
      }
    })
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy sản phẩm!'
        },
        {
          status: 404
        }
      )
    }
    const deletedProduct = await db.product.delete({
      where: {
        id
      }
    })
    return NextResponse.json(deletedProduct)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Xoá sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function PUT (request, { params }) {
  const { id } = await params
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
      brandId,
      farmerId,
      isWholeSale,
      wholeSalePrice,
      wholeSaleQty,
      tags,
      description,
      isActive,
      productCode,
      qty,
      productImages
    } = await request.json()
    const existingProduct = await db.product.findUnique({
      where: {
        id
      }
    })
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: 'Không tìm thấy sản phẩm!'
        },
        {
          status: 404
        }
      )
    }
    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        title,
        sku,
        barcode,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        productStock: parseInt(productStock),
        unit,
        categoryId,
        brandId,
        userId: farmerId,
        farmerProfileId: farmerId,
        isWholeSale,
        wholeSalePrice: parseFloat(wholeSalePrice),
        wholeSaleQty: parseInt(wholeSaleQty),
        productImages,
        imageUrl: productImages[0],
        tags,
        description,
        isActive,
        productCode,
        qty: parseInt(qty)
      }
    })
    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Cập nhật sản phẩm thất bại!',
        error
      },
      { status: 500 }
    )
  }
}
