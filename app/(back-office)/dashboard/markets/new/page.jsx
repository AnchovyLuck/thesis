"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/formInputs/ImageInput";
import SelectInput from "@/components/formInputs/SelectInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewMarket() {
  const [logoUrl, setLogoUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const categories = [
    {
      id: 1,
      title: "Loại sản phẩm  1",
    },
    {
      id: 1,
      title: "Loại sản phẩm  2",
    },
    {
      id: 1,
      title: "Loại sản phẩm  3",
    },
  ];
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
    data.logoUrl = logoUrl;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Chợ", reset);
    setLogoUrl("");
  }
  return (
    <div>
      <FormHeader title="Thêm Chợ" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Tên chợ *"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Chọn loại sản phẩm *"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={true}
          />
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
            label="Logo chợ"
          />
          <TextareaInput
            label="Mô tả chợ *"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Tình trạng ?"
            name="isActive"
            toggle={isActive}
            trueTitle="Đang hoạt động"
            falseTitle="Không hoạt động"
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
