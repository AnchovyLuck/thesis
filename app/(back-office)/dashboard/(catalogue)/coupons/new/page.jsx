"use client";
import FormHeader from "@/components/backoffice/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewCoupon() {
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
    router.push("/dashboard/coupons");
  };
  async function onSubmit(data) {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    data.couponCode = couponCode;
    data.expiryDate = generateIsoFormattedDate(data.expiryDate);
    console.log(data);
    makePostRequest(
      setLoading,
      "api/coupons",
      data,
      "Khuyến mãi",
      reset,
      redirect
    );
  }
  return (
    <div>
      <FormHeader title="Thêm Khuyến Mãi" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
          <TextInput
            label="Tên khuyến mãi *"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Ngày hết hạn *"
            name="expiryDate"
            type="date"
            register={register}
            control={control}
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Kích hoạt khuyến mãi ?"
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
