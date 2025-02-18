"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateUserCode";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewFarmer() {
  const [loading, setLoading] = useState(false);
  const [couponCode, setCouponCode] = useState();
  const {
    register,
    reset,
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  const redirect = () => {
    router.push("/dashboard/farmers");
  };
  async function onSubmit(data) {
    const code = generateUserCode("FARM", data.name);
    data.code = code;
    console.log(data);
    makePostRequest(
      setLoading,
      "api/farmers",
      data,
      "Nông trại",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title="Thêm Nông Trại" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
          <TextInput
            label="Tên nông trại *"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Số điện thoại nông trại *"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email nông trại *"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Địa chỉ *"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Người liên hệ *"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Số điện thoại người liên hệ *"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextareaInput
            label="Hợp đồng thanh toán *"
            name="terms"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Ghi chú"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
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
