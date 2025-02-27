import React from 'react'
import Select from 'react-select'

export default function SelectInput ({
  label,
  name,
  register,
  className = 'sm:col-span-2',
  options = [],
  multiple = false
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
          <Select 
          isMulti
          name={name}
          options={options.map(option => ({value: option.id, label: option.title}))}
          className='basic-multi-select text-gray-900 rounded-md'
          classNamePrefix='Chọn loại sản phẩm'
          />
        ) : (
          <select
            {...register(`${name}`)}
            id={name}
            multiple={false}
            name={name}
            className='block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          >
            {options.map((option, i) => {
              return (
                <option key={i} value={option.id}>
                  {option.title}
                </option>
              )
            })}
          </select>
        )}
      </div>
    </div>
  )
}
