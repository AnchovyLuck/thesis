import React from 'react'
import { Controller } from 'react-hook-form'
import Select from 'react-select'

export default function SelectInput ({
  label,
  name,
  register,
  control,
  className = 'sm:col-span-2',
  options = [],
  multiple = false,
  errors
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className='block text-sm font-medium leading-6 text-gray-900 dark:text-slate-50 mb-2'
      >
        {label}
      </label>
      <div className='mt-2'>
        {multiple ? (
          <Controller
            name={name}
            control={control}
            render={({ field }) => {
              return (
                <Select
                  {...field}
                  isMulti
                  name={name}
                  options={options.map(option => ({
                    value: option.id,
                    label: option.title
                  }))}
                  className='basic-multi-select text-gray-900 rounded-md'
                  classNamePrefix='Chọn loại sản phẩm'
                  placeholder='...'
                  onChange={selectedOptions => {
                    const selectedIds = selectedOptions
                      ? selectedOptions.map(option => option.value)
                      : []
                    field.onChange(selectedIds)
                  }}
                  value={options
                    .filter(option => field.value?.includes(option.id))
                    .map(option => ({
                      value: option.id,
                      label: option.title
                    }))}
                />
              )
            }}
          />
        ) : (
          <select
            {...register(name)}
            id={name}
            multiple={false}
            className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            {options.map(option => {
              return (
                <option key={option.id} value={option.id}>
                  {option.title}
                </option>
              )
            })}
          </select>
        )}
        {errors?.[name] && (
          <p className='text-red-500 text-sm mt-1'>{errors[name].message}</p>
        )}
      </div>
    </div>
  )
}
