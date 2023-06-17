import Link from 'next/link'
import React from 'react'
import Layout from './Layout'


const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:border-light dark:text-light sm:text-base'>
      <Layout className='py-8 flex flex-col items-center justify-between text-center lg:flex-col lg:py-6 '>
        <span>Designed And Developed By:</span>

        <Link
          href='https://kshitijadhikaree.com.np'
          className='underline underline-offset-2 lg:py-3 mt-2 text-sm'
          target={'_blank'}
        >
          Kshitij Adhikaree
        </Link>
      </Layout>
    </footer>
  )
}

export default Footer
