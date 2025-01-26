import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";

export default function TextInput({
  label,
  name,
  register,
  control,
  errors,
  isRequired = true,
  type = "text",
  className = "sm:col-span-2",
  defaultValue = "",
}) {
  const formattedDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date);
    return formattedDate.toISOString().split("T")[0];
  };
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2"
      >
        {label}
      </label>
      <div className="mt-2">
        {type === "date" ? (
          <Controller
            name={name}
            control={control}
            rules={{ required: isRequired }}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                selected={value}
                onChange={(date) => onChange(formattedDate(date))}
                dateFormat="dd/MM/yyyy"
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                name={name}
                id={name}
              />
            )}
          />
        ) : (
          <input
            {...register(`${name}`, { required: isRequired })}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
            placeholder={`Nhập ${label.toLowerCase()}`}
          />
        )}
        {errors[`${name}`] && (
          <span className="text-sm text-red-600">{label} chưa được điền!</span>
        )}
      </div>
    </div>
  );
}
