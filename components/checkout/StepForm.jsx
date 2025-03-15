"use client"
import React from 'react'
import PersonalDetailsForm from './PersonalDetailsForm'
import ShippingAddressForm from './ShippingAddressForm'
import PaymentMethodForm from './PaymentMethodForm'
import OrderSummaryForm from './OrderSummaryForm'
import { useSelector } from 'react-redux'

export default function StepForm () {
  const currentStep = useSelector(store => store.checkout.currentStep)
  const renderFormByStep = step => {
    if (step === 1) {
      return <PersonalDetailsForm />
    } else if (step === 2) {
      return <ShippingAddressForm />
    } else if (step === 3) {
      return <PaymentMethodForm />
    } else if (step === 4) {
      return <OrderSummaryForm />
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>
}
