"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Steps({ steps, isCheckout = false }) {
  const cartItems = useSelector((store) => store.cart);
  let currentStep 
  if (isCheckout) {
    currentStep = useSelector((store) => store.checkout.currentStep);
  } else {
    currentStep = useSelector((store) => store.onboarding.currentStep);
  }
  return (
    <nav className="flex text-sm md:text-xl items-center justify-center mb-3">
      <ol
        role="list"
        className="flex flex-wrap gap-y-5 md:gap-y-0 items-center gap-x-1.5"
      >
        <li>
          <div>
            <Link
              href="/cart"
              className="inline-flex items-center p-1 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 dark:hover:text-lime-500 hover:text-gray-700"
            >
              Giỏ hàng
              <span className="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-bold bg-lime-400 rounded-full text-gray-900">
                {" "}
                {cartItems.length}{" "}
              </span>
            </Link>
          </div>
        </li>

        {steps.map((step, i) => {
          return (
            <li key={i}>
              <div className="flex items-center">
                <ChevronRight className="flex-shrink-0 w-4 h-4 text-gray-400" />
                <p
                  className={`ml-1.5 text-sm font-medium text-gray-500 rounded-md focus:outline-none focus:ring-2 focus:text-gray-900 focus:ring-gray-900 hover:text-gray-700 ${
                    step.number === currentStep ? "text-lime-400" : ""
                  }`}
                >
                  {" "}
                  {step.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
