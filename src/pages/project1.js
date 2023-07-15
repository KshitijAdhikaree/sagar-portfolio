//import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
//import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import React from 'react'


const project1 = () => {
  return (
    <>
    <Head>
      <title>Sagar | Project</title>
      <meta name="description" content="description" />
    </Head>
    
    <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light ">
      <Layout className="pt-16">
        <h1>Project1</h1>
      </Layout>
      
    </main>
  </>
  )
}

export default project1