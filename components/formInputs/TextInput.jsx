"use client"
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
  beginYear = 0,
  length = 10,
  placeholder = ""
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2 "
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
                onChange={(date) => onChange(date)}
                dateFormat="dd/MM/yyyy"
                openToDate={value || new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                showPopperArrow={false}
                renderCustomHeader={({ date, changeYear, changeMonth }) => (
                  <div className="flex justify-between px-2 py-2">
                    <div className="flex gap-2">
                      <select
                        value={(new Date(date)).getMonth()}
                        onChange={({ target: { value } }) => changeMonth(value)}
                      >
                        {[
                          "Tháng 1 (January)",
                          "Tháng 2 (February)",
                          "Tháng 3 (March)",
                          "Tháng 4 (April)",
                          "Tháng 5 (May)",
                          "Tháng 6 (June)",
                          "Tháng 7 (July)",
                          "Tháng 8 (August)",
                          "Tháng 9 (September)",
                          "Tháng 10 (October)",
                          "Tháng 11 (November)",
                          "Tháng 12 (December)",
                        ].map((option, index) => (
                          <option key={option} value={index}>
                            {option}
                          </option>
                        ))}
                      </select>
                      <select
                        value={(new Date(date)).getFullYear()}
                        onChange={({ target: { value } }) => changeYear(value)}
                      >
                        {Array.from(
                          { length: length },
                          (_, i) => new Date().getFullYear() - beginYear + i
                        ).map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}
                 shouldCloseOnSelect={true}
                className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
                name={name}
                id={name}
              />
            )}
          />
        ) : (
          <input
            {...register(`${name}`, {
              required: isRequired,
              ...(type === "tel"
                ? {
                    pattern: {
                      value:
                        /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/,
                    },
                  }
                : {}),
            })}
            type={type}
            name={name}
            id={name}
            defaultValue={defaultValue}
            autoComplete={name}
            className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-500 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-500 dark:focus:ring-slate-500 sm:text-sm sm:leading-6 dark:bg-transparent dark:text-slate-100"
            placeholder={`Nhập ${label.charAt(label.length-1) === '*' ? label.slice(0,-2).toLowerCase(): label.toLowerCase()}`}
          />
        )}
        {errors[`${name}`] && (
          <span className="text-sm text-red-600">
            {errors[`${name}`].type === "required" &&
              (`${label.charAt(label.length - 1) === '*' ? label.slice(0,-2) : label} chưa được điền!`)}
            {type === "tel" &&
              errors[`${name}`].type === "pattern" &&
              "Vui lòng nhập số điện thoại hợp lệ!"}
          </span>
        )}
      </div>
    </div>
  );
}