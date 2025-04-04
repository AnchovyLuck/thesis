"use client";
import React from "react";
import { useSelector } from "react-redux";
import PersonalDetailsForm from "./PersonalDetailsForm";
import AdditionalInformationForm from "./AdditionalInformationForm";
import SummaryForm from "./SummaryForm";

export default function StepForm({ farmerId }) {
  const currentStep = useSelector((store) => store.onboarding.currentStep);
  const renderFormByStep = (step) => {
    if (step === 1) {
      return <PersonalDetailsForm />;
    } else if (step === 2) {
      return <AdditionalInformationForm />;
    } else if (step === 3) {
      return <SummaryForm farmerId={farmerId} />;
    }
  };
  return <div>{renderFormByStep(currentStep)}</div>;
}
