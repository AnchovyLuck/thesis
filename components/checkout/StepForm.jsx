'use client'
import React from 'react'
import PersonalDetailsForm from './PersonalDetailsForm'
import ShippingAddressForm from './ShippingAddressForm'
import PaymentMethodForm from './PaymentMethodForm'
import OrderSummaryForm from './OrderSummaryForm'
import { useSelector } from 'react-redux'
import { useSession } from 'next-auth/react'

export default function StepForm ({ user }) {
  const currentStep = useSelector(store => store.checkout.currentStep)
  const { data: session, status } = useSession()
  const renderFormByStep = step => {
    if (step === 1) {
      return <PersonalDetailsForm session={session} />
    } else if (step === 2) {
      return <ShippingAddressForm session={session} />
    } else if (step === 3) {
      return <PaymentMethodForm />
    } else if (step === 4) {
      return <OrderSummaryForm />
    }
  }
  return <div>{renderFormByStep(currentStep)}</div>
}
