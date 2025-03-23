const { PrismaClient } = require('@prisma/client')
const { categories, products } = require('./data.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.category.createMany()
    await prisma.product.deleteMany()
    await prisma.category.createMany({
      data: categories
    })
    await prisma.product.createMany({
      data: products
    })
  } catch (e) {
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()