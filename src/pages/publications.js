import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'
import { LinkIcon } from '@/components/Icons'
import { PublicationsData } from '../../public/data'

const Publication = ({ title, summary, link }) => {
  return (
    <article
      className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 relative rounded-br-2xl
    dark:border dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 '
    >
      <div
        className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]'
      />

      <div className='w-full flex flex-col items-center justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 text-center'>
        <h2 className='my-2 w-full text-dark text-center text-4xl font-bold dark:text-light sm:text-sm '>
          {title}
        </h2>

        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm  '>
          {summary}
        </p>
        <div className='mt-2 flex flex-row items-center'>
          <Link
            href={link}
            target='_blank'
            className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
    sm:px-4 sm:text-base flex items-center'
          >
            <LinkIcon className='fill-light mr-2 dark:fill-dark' />
            <span>Link</span>
          </Link>
        </div>
      </div>
    </article>
  )
}

const publications = () => {
  return (
    <>
      <Head>
        <title>Sagar | Publications</title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />
      <main className='w-full mb-8 flex flex-col items-center justify-center dark:text-light '>
        <Layout className='pt-16'>
          <AnimatedText
            text='Publications And Scholarly Contribution'
            className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center '
          />
          <div className='grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            {PublicationsData.map((publication) => (
              <div key={publication.id} className='col-span-12'>
                <Publication
                  title={publication.title}
                  summary={publication.description}
                  link={publication.link}
                />
              </div>
            ))}
          </div>
        </Layout>
      </main>
    </>
  )
}

export default publications
