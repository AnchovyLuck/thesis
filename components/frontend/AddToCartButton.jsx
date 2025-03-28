"use client";
import { addToCart } from "@/redux/slices/cartSlice";
import { BaggageClaim } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function AddToCartButton({ product, title = "Thêm"}) {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Thêm vào giỏ hàng thành công!");
  };
  return (
    <button
      onClick={() => handleAddToCart()}
      className="flex items-center justify-center gap-2 text-slate-200 bg-lime-600 hover:bg-lime-700 px-4 py-2 rounded-lg"
    >
      <BaggageClaim />
      <span>{title}</span>
    </button>
  );
}
