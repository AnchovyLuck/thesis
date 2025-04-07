'use client'
import ArrayItemsInput from '@/components/formInputs/ArrayItemsInput'
import MultipleImageInput from '@/components/formInputs/MultipleImageInput'
import SelectInput from '@/components/formInputs/SelectInput'
import SubmitButton from '@/components/formInputs/SubmitButton'
import TextareaInput from '@/components/formInputs/TextAreaInput'
import TextInput from '@/components/formInputs/TextInput'
import ToggleInput from '@/components/formInputs/ToggleInput'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest'
import { generateSlug } from '@/lib/generateSlug'
import { generateUserCode } from '@/lib/generateUserCode'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function ProductForm ({
  categories,
  brands,
  farmers,
  updateData = {}
}) {
  const initialImages = updateData?.productImages ?? []
  const id = updateData?.id ?? ''
  const tagList = updateData?.tags ?? []
  const [tags, setTags] = useState(tagList)
  const [loading, setLoading] = useState(false)
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholeSale: false,
      ...updateData
    }
  })
  const isActive = watch('isActive')
  const isWholeSale = watch('isWholeSale')
  const router = useRouter()
  const redirect = () => {
    router.push('/dashboard/products')
  }
  const [productImages, setProductImages] = useState(initialImages)
  console.log(productImages)
  async function onSubmit (data) {
    if (data.brandId === '111') {
      data.brandId = null
    }
    const slug = generateSlug(data.title)
    const productCode = generateUserCode('PRODUCT', data.title)
    data.slug = slug
    data.productImages = productImages
    console.log('product images:', productImages)
    data.tags = tags
    data.qty = 1
    data.productCode = productCode
    if (!data.isWholeSale) {
      data.wholeSalePrice = 0
      data.wholeSaleQty = 0
    }
    if (id) {
      makePutRequest(
        setLoading,
        `api/products/${id}`,
        data,
        'sản phẩm',
        reset,
        redirect
      )
    } else {
      makePostRequest(
        setLoading,
        'api/products',
        data,
        'Sản phẩm',
        reset,
        redirect
      )
    }
  }
  return (
    <form
      className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput
          label='Tên sản phẩm *'
          name='title'
          register={register}
          errors={errors}
        />
        <TextInput
          label='Số lô (SKU) *'
          name='sku'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Barcode sản phẩm *'
          name='barcode'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Giá gốc *'
          name='productPrice'
          type='number'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Giá bán ra *'
          name='salePrice'
          type='number'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Số lượng hàng tồn kho *'
          name='productStock'
          type='number'
          register={register}
          errors={errors}
          className='w-full'
        />
        <TextInput
          label='Đơn vị sản phẩm *'
          name='unit'
          register={register}
          errors={errors}
          className='w-full'
        />
        <SelectInput
          label='Chọn loại sản phẩm *'
          name='categoryId'
          register={register}
          errors={errors}
          className='w-full'
          options={categories}
        />
        <SelectInput
          label='Chọn thương hiệu *'
          name='brandId'
          register={register}
          errors={errors}
          className='w-full'
          options={brands}
        />
        <SelectInput
          label='Chọn người bán *'
          name='farmerId'
          register={register}
          errors={errors}
          className='w-full'
          options={farmers}
        />
        <ToggleInput
          label='Chấp nhận bán với giá sỉ ?'
          toggle={isWholeSale}
          name='isWholeSale'
          trueTitle='Có'
          falseTitle='Không'
          register={register}
        />
        {isWholeSale && (
          <>
            <TextInput
              label='Giá bán sỉ'
              name='wholeSalePrice'
              type='number'
              register={register}
              errors={errors}
              className='w-full'
            />
            <TextInput
              label='Số lượng tối thiểu để mua với giá sỉ'
              name='wholeSaleQty'
              type='number'
              register={register}
              errors={errors}
              className='w-full'
            />
          </>
        )}
        <MultipleImageInput
          imageUrls={productImages}
          setImageUrls={setProductImages}
          endpoint='multipleProductsUploader'
          label='Ảnh sản phẩm'
        />
        <ArrayItemsInput setItems={setTags} items={tags} itemTitle='Thẻ' />
        <TextareaInput
          label='Mô tả sản phẩm *'
          name='description'
          register={register}
          errors={errors}
        />
        <ToggleInput
          label='Đăng sản phẩm ?'
          toggle={isActive}
          name='isActive'
          trueTitle='Có'
          falseTitle='Không'
          register={register}
        />
      </div>
      <SubmitButton
        isLoading={loading}
        buttonTitle='Lưu'
        loadingButtonTitle='Đang lưu...'
      />
    </form>
  )
}
