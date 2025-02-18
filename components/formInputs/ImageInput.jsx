import { UploadDropZone } from "@/lib/uploadthing";
import { Check, Pencil, Upload } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

export default function ImageInput({
  label,
  imageUrl = "",
  setImageUrl,
  className = "col-span-full",
  endpoint = "",
}) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <label
          htmlFor="course-image"
          className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50"
        >
          {label}
        </label>
        {imageUrl && (
          <button
            onClick={() => setImageUrl("")}
            type="button"
            className="flex space-x-2  bg-slate-900 rounded-md shadow text-slate-50 py-2 px-4"
          >
            <Pencil className="w-5 h-5" />
            <span>Đổi Ảnh</span>
          </button>
        )}
      </div>
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="Item image"
          width={1000}
          height={667}
          className="w-full h-64 object-contain"
        />
      ) : (
        <UploadDropZone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].ufsUrl);
            toast.success("Tải ảnh hoàn tất!");
          }}
          onUploadError={(error) => {
            toast.error("Tải ảnh thất bại!");
            console.log(`ERROR! ${error.message}`, error);
          }}
          content={{
            button({ files }) {
              if (files.length > 0)
                return (
                  <div className="flex justify-center space-x-3 text-sm font-medium">
                    <Upload />
                    <span>Tải Ảnh Lên</span>
                  </div>
                );
              return (
                <div className="flex justify-center text-sm font-medium">
                  <span>Chọn Ảnh</span>
                </div>
              );
            },
            allowedContent({ files, isUploading }) {
              if (files.length > 0) {
                return (
                  <div className="flex justify-center space-x-1 items-center">
                    <span className="dark:text-slate-50">Chọn ảnh hoàn tất</span>
                    <Check className="text-lime-500" />
                  </div>
                );
              }
              return <div className="text-center dark:text-slate-50">Tối đa 5MB</div>;
            },
            label({}) {
              return <></>;
            },
          }}
        />
      )}
    </div>
  );
}
