"use client";

import { Button, Modal } from "flowbite-react";
import {
  CornerDownLeft,
  Headphones,
  HelpCircle,
  MessageSquare,
  Truck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HelpModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="flex items-center text-green-950 dark:text-slate-100 space-x-2"
      >
        <HelpCircle />
        <span className="absolute invisible lg:visible lg:relative font-bold">
          Trợ giúp
        </span>
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Bạn cần giúp đỡ?</Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-2 gap-6">
            <Link
              href="tel:0785800160"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Headphones className="w-6 h-6 text-lime-800" />
              </div>
              <span>Gọi cho số 0123456789</span>
            </Link>
            <Link
              href="/track"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <Truck className="w-6 h-6 text-lime-800" />
              </div>
              <span>Theo dõi đơn hàng</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <CornerDownLeft className="w-6 h-6 text-lime-800" />
              </div>
              <span>Trả hàng</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-2 text-green-950 dark:text-slate-100"
            >
              <div className="flex items-center w-10 h-10 bg-lime-100 justify-center rounded-full">
                <MessageSquare className="w-6 h-6 text-lime-800" />
              </div>
              <span>Chat với chúng tôi</span>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
