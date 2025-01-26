"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import ImageInput from "@/components/formInputs/ImageInput";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "Loại sản phẩm", reset);
    setImageUrl("");
  }
  return (
    <div>
      <FormHeader title="Loại Sản Phẩm Mới" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Tên loại sản phẩm"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Mô tả loại sản phẩm"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Ảnh loại sản phẩm"
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
