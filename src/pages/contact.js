import React,{ useState } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import TransitionEffect from '@/components/TransitionEffect'
import {
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
} from '@/components/Icons'


function contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Send data to API endpoint
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })

    // Handle response from API
    if (res.ok) {
      console.log('Data successfully submitted')
      setName('')
      setEmail('')
      setMessage('')
    } else {
      console.error('Error submitting data')
    }
  }

  const handleReset = () => {
    setName('')
    setEmail('')
    setMessage('')
  }
  return (
    <>
      <Head>
        <title>Sagar | Contact</title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-2'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 lg:w-full md:w-full'>
              <div className='flex items-center self-start lg:self-center pt-0 sm:mt-6'>
                <AnimatedText
                  text='Contact Info'
                  className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center'
                />
              </div>
              <div className='text-xl mt-6 text-center font-semibold sm:text-base'>
                <h1 className='mb-4'>Email : adhikarisagar@gmail.com</h1>
                <h1 className='mb-4'>Phone : (+1) 9845362846</h1>
                <h1 className='mb-8'>Address : South Carolina, USA</h1>
              </div>
              <div className=''>
                <h1 className='text-2xl text-center font-bold'>
                  Connect With Me On Social Media
                </h1>
                <div className='flex flex-row ml-32 mt-6 sm:ml-2 sm:justify-center md:justify-start md:ml-32 lg:ml-48 sm:mb-4'>
                  <Link href='/'>
                    <LinkedInIcon className='w-[40px] md:w-[60px] lg:w-[80px] mr-4' />
                  </Link>
                  <Link href='/'>
                    <TwitterIcon className='w-[40px] md:w-[60px] lg:w-[80px] mx-4' />
                  </Link>
                  <Link href='/'>
                    <InstagramIcon className='w-[50px] md:w-[80px] lg:w-[100px] mx-4 -mt-3 md:-mt-5'/>
                  </Link>
                  <Link href='/'>
                    <FacebookIcon className='w-[40px] md:w-[60px] lg:w-[80px] ml-4' />
                  </Link>
                </div>
              </div>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText
                text='Contact Form'
                className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center '
              />
              <form onSubmit={handleSubmit} className='space-y-4 mt-8'>
                <div>
                  <label className='block  font-bold mb-2 ' htmlFor='name'>
                    Name
                  </label>
                  <input
                    className='w-full px-40 py-2 border border-gray-400 rounded-md focus:outline-none'
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className='block font-bold mb-2' htmlFor='email'>
                    Email
                  </label>
                  <input
                    className='w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary'
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className='block  font-bold mb-2' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    className='w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:border-primary'
                    name='message'
                    id='message'
                    rows='5'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className='flex justify-center space-x-6'>
                  <button
                    className='text-dark bg-green-600   font-semibold py-2 px-4 border border-black hover:border-black hover:bg-green-200 rounded dark:border-white'
                    type='submit'
                  >
                    Send
                  </button>
                  <button
                    className='text-dark bg-red-600  font-semibold py-2 px-4 border border-black hover:border-balck hover:bg-red-200 rounded dark:border-white'
                    type='reset'
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default contact
