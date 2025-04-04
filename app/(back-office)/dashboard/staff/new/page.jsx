"use client";
import FormHeader from "@/components/backoffice/forms/FormHeader";
import SubmitButton from "@/components/formInputs/SubmitButton";
import TextareaInput from "@/components/formInputs/TextAreaInput";
import TextInput from "@/components/formInputs/TextInput";
import ToggleInput from "@/components/formInputs/ToggleInput";
import { makePostRequest } from "@/lib/apiRequest";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { generateUserCode } from "@/lib/generateUserCode";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function NewStaff() {
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
  async function onSubmit(data) {
    const code = generateUserCode("STAFF", data.fullName);
    data.birthday = generateIsoFormattedDate(data.birthday);
    data.code = code;
    console.log(data);
    makePostRequest(setLoading, "api/staff", data, "Nhân viên", reset);
  }
  return (
    <div>
      <FormHeader title="Thêm Nhân Viên" />
      <form
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 space-y-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
          <TextInput
            label="Tên nhân viên *"
            name="fullName"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Ngày sinh *"
            name="birthday"
            type="date"
            control={control}
            register={register}
            errors={errors}
            beginYear={35}
            length={18}
            className="w-full"
          />
          <TextInput
            label="Mật khẩu *"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Email nhân viên *"
            type="email"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Số điện thoại nhân viên *"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Địa chỉ nhân viên *"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="col-span-2"
          />
          <TextareaInput
            label="Ghi chú"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ToggleInput
            label="Trạng thái"
            name="isActive"
            control={control}
            register={register}
            toggle={isActive}
            trueTitle="Đang làm việc"
            falseTitle="Đã nghỉ việc"
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
