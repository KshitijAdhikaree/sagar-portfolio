import React from 'react'

const ScrollDown = () => {
  return (
    <div className='flex flex-col items-center justify-center text-dark mt-8 dark:text-light'>
      <div className='mb-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 animate-bounce'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='M19 14l-7 7m0 0l-7-7m7 7V3'
          ></path>
        </svg>
      </div>
      <div className='text-center'>
        <p className='text-lg font-medium '>Scroll down</p>
      </div>
    </div>
  )
}

export default ScrollDown
