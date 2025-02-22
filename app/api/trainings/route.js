import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function POST (request) {
  try {
    const {
      title,
      slug,
      categoryId,
      imageUrl,
      description,
      isActive,
      content
    } = await request.json()
    const existingTraining = await db.training.findUnique({
      where: {
        slug
      }
    })
    if (existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: 'Khoá đào tạo cùng tên đã tồn tại!'
        },
        {
          status: 409
        }
      )
    }
    const newTraining = await db.training.create({
      data: {
        title,
        slug,
        categoryId,
        imageUrl,
        description,
        isActive,
        content
      }
    })
    return NextResponse.json(newTraining)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Thêm khoá đào tạo thất bại!',
        error
      },
      { status: 500 }
    )
  }
}

export async function GET (request) {
  try {
    const trainings = await db.training.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(trainings)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      {
        message: 'Hiển thị danh sách khoá đào tạo thất bại!',
        error
      },
      { status: 500 }
    )
  }
}