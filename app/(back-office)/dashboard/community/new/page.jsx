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
import dynamic from "next/dynamic";

const CustomEditor = dynamic(
  () => import("@/components/formInputs/CustomEditor"),
  { ssr: false }
);

export default function NewTraining() {
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
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
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
    data.content = content; 
    console.log(data);
    makePostRequest(setLoading, "api/trainings", data, "Khoá đào tạo", reset);
    setImageUrl("");
    setContent("");
  }
  return (
    <div>
      <FormHeader title="Thêm Khoá Đào Tạo" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Tên khoá đào tạo *"
            name="title"
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
            multiple={false}
          />
          <TextareaInput
            label="Mô tả khoá đào tạo *"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingImageUploader"
            label="Thumbnail khoá đào tạo"
          />
          <CustomEditor
            label="Nội dung bài viết"
            value={content}
            onChange={setContent}
          />
          <ToggleInput
            label="Đăng khoá đào tạo ?"
            name="isActive"
            toggle={isActive}
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
