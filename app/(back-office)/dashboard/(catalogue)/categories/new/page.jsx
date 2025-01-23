"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import { generateSlug } from "@/lib/generateSlug";
import React from "react";
import { useForm } from "react-hook-form";

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    const slug = generateSlug(data.title)
    data.slug = slug
    console.log(data);
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
        </div>
        <TextareaInput
          label="Mô tả loại sản phẩm"
          name="description"
          register={register}
          errors={errors}
        />
        <SubmitButton
          isLoading={false}
          buttonTitle="Lưu"
          loadingButtonTitle="Đang lưu. Chờ chút nha..."
        />
      </form>
    </div>
  );
}
