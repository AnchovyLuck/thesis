"use client";
import React from "react";
import TextInput from "../formInputs/TextInput";
import { useForm } from "react-hook-form";
import NavButtons from "./NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateOnboardingFormData,
} from "@/redux/slices/onboardingSlice";

export default function PersonalDetailsForm() {
  const dispatch = useDispatch();
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const existingFormData = useSelector(
    (store) => store.onboarding.onboardingFormData,
  );
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...existingFormData,
    },
  });
  const processData = async (data) => {
    dispatch(updateOnboardingFormData(data));
    dispatch(setCurrentStep(currentStep + 1));
  };
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold mb-5 text-center dark:text-lime-400">
        Thông tin cộng tác viên
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 items-center">
        <TextInput
          label="Tên"
          name="firstName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Họ"
          name="lastName"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Số điện thoại"
          name="phone"
          register={register}
          errors={errors}
          className="w-full"
        />
        <TextInput
          label="Địa chỉ"
          name="physicalAddress"
          register={register}
          errors={errors}
          className="w-full"
        />
      </div>
      <NavButtons />
    </form>
  );
}
