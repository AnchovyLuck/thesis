import React from 'react'
import PriceFilter from '../frontend/filter/PriceFilter'

export default function Pricing () {
  const plans = [
    {
      title: 'Miễn phí',
      isRecommended: false,
      description: 'Phí cho mỗi giao dịch thành công là 5%. Phù hợp cho người mới bắt đầu.',
      price: '0 VNĐ',
      features: ['Chọn bán tất cả các sản phẩm với doanh thu không giới hạn'],
      nonFeatures: []
    },
    {
      title: 'Tiêu chuẩn',
      isRecommended: true,
      description: 'Phí cho mỗi giao dịch thành công là 2%. Phù hợp nếu bạn có doanh thu hàng tháng từ 10 triệu.',
      price: '200,000 VNĐ',
      features: ['Chọn bán tất cả các sản phẩm với doanh thu không giới hạn'],
      nonFeatures: []
    },
    {
      title: 'Cao cấp',
      isRecommended: false,
      description: 'Miễn phí mọi giao dịch. Phù hợp nếu bạn có doanh thu hàng tháng từ 100 triệu.',
      price: '1,000,000 VNĐ',
      features: ['Chọn bán tất cả các sản phẩm với doanh thu không giới hạn'],
      nonFeatures: []
    }
  ]
  return (
    <div className='sm:flex sm:flex-col sm:align-center p-2 md:p-10'>
      <div className='flex flex-col items-center'>
        <div className='relative items-center self-center bg-slate-200 dark:bg-slate-900 rounded-lg p-0.5 flex'>
          <button
            type='button'
            className='relative rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none px-4 sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm w-full'
          >
            Chọn gói phù hợp
          </button>
        </div>
        <span className='max-w-2xl text-center mt-4'>
          Chọn gói phù hợp với bạn để bắt đầu bán hàng trên Online Shop. Bạn có
          thể thay đổi gói đăng ký bất cứ lúc nào.
        </span>
      </div>
      <div className='mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200'
          >
            <div className='p-6 h-60 flex flex-col justify-between'>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl leading-6 font-bold text-slate-900 dark:text-white'>
                  {plan.title}
                </h2>
                {plan.isRecommended && (
                  <span className='uppercase border dark:bg-transparent bg-lime-500 text-white border-lime-500 text-xs rounded-full px-3 py-1'>
                    Gói đề xuất
                  </span>
                )}
              </div>
              <p className='mt-2 text-base text-slate-700 dark:text-slate-300 leading-tight'>
                {plan.description}
              </p>
              <p className='mt-8'>
                <span className='text-3xl font-bold text-slate-900 dark:text-lime-400 tracking-tighter'>
                  {plan.price}
                </span>
                <span className='text-base font-medium text-slate-500'>
                  /tháng
                </span>
              </p>
            </div>
            <div className='pt-6 pb-8 px-6'>
              <h3 className='text-sm font-bold text-slate-900 dark:text-white tracking-wide uppercase'></h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
