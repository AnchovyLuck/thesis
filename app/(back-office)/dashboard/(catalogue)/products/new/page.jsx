"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ArrayItemsInput from "@/components/formInputs/ArrayItemsInput";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import { Plus, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewProduct() {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Loại sản phẩm 1",
    },
    {
      id: 2,
      title: "Loại sản phẩm 2",
    },
    {
      id: 3,
      title: "Loại sản phẩm 3",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Nông trại 1",
    },
    {
      id: 2,
      title: "Nông trại 2",
    },
    {
      id: 3,
      title: "Nông trại 3",
    },
  ];
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Sản phẩm", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="Thêm Sản Phẩm" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Tên sản phẩm *"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Số lô (SKU) *"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Barcode sản phẩm *"
            name="barcode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Giá gốc *"
            name="productPrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Giá bán ra *"
            name="salePrice"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Chọn loại sản phẩm *"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
          />
          <SelectInput
            label="Chọn nông trại *"
            name="farmerId"
            register={register}
            errors={errors}
            className="w-full"
            options={farmers}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Ảnh sản phẩm"
          />
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Thẻ" />
          <TextareaInput
            label="Mô tả sản phẩm *"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Đăng sản phẩm ?"
            toggle={isActive}
            name="isActive"
            trueTitle="Có"
            falseTitle="Không"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="Lưu"
          loadingButtonTitle="Đang lưu..."
        />
      </form>
    </div>
  );
}
