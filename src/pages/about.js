import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/profilePic.jpg'
import TransitionEffect from '@/components/TransitionEffect'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

const about = () => {
  return (
    <>
      <Head>
        <title>Sagar | About</title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-2'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 lg:w-full md:w-full md:-mt-8'>
              <div
                className='w-[420px] h-[490px] bg-primaryDark dark:bg-primary border-[12px] border-dark transition-[border-radius] duration-[0.5s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] 
              shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
              dark:shadow-[inset_0_-3em_3em_rgba(255,255,255,0.1),0_0_0_2px_rgb(53,53,53),0.3em_0.3em_1em_rgba(255,255,255,0.3)]
              mt-24 md:w-[20rem] md:h-[341px] md:mt-16 md:ml-[72px] sm:ml-20 xs:ml-8 lg:ml-[160px] sm:mt-32 mb-4 dark:border-light xs:w-[14rem] xs:h-[14rem] sm:w-[300px] sm:h-[348px]'
              >
                <Image
                  src={profilePic}
                  alt='profilePic'
                  width={400}
                  height={400}
                  priority={true}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                  className=' lg:inline-block md:inline-block md:w-[24rem] sm:w-[18rem] xs:w-[14rem] xs:-mt-[100px] '
                />
              </div>
              <div className='flex items-center self-start mt-8 lg:self-center ml-20 '>
                <Link
                  href='/Resume.pdf'
                  target={'_blank'}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base'
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href='https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adhikareekshitij@gmail.com&subject=Unable%20to%20reach%20you&body=Hello%2C%0A%0AI%20tried%20contacting%20you%20today%20but%20you%20seem%20to%20have%20missed%20my%20call.%20%0A%0APlease%20return%20my%20call%20as%20soon%20as%20you%E2%80%99re%20available.%20%0A%0AIn%20any%20case%2C%20I%20will%20try%20ringing%20you%20at%20a%20later%20time.%0A%0A%0ATy%2C%0A%0A%0A%0A'
                  target={'_blank'}
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center sm:mt-4'>
              <AnimatedText
                text='About Me'
                className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center'
              />
              <p className='my-4 text-base font-medium md:text-sm sm:text-base text-justify xs:text-base '>
                As an astrophysicist, I am deeply fascinated by the mysteries of
                the universe. From the tiniest subatomic particles to the
                largest structures in the cosmos, I am constantly driven to
                learn more about how the universe works. My passion for
                astrophysics has led me on a lifelong journey of discovery, as I
                seek to uncover the secrets of black holes, dark matter, and the
                origins of the universe itself.
              </p>
              <p className='my-4 text-base font-medium md:text-sm sm:text-base text-justify xs:text-base '>
                One of the most exciting aspects of my work as an astrophysicist
                is the opportunity to collaborate with other scientists from
                around the world. Through these collaborations, I have been able
                to contribute to groundbreaking research that has advanced our
                understanding of the cosmos. From analyzing data from telescopes
                and other instruments to developing complex mathematical models,
                I am constantly working with others to push the boundaries of
                our knowledge.
              </p>
              <p className='my-4 text-base font-medium md:text-sm sm:text-base text-justify xs:text-base '>
                Of course, being an astrophysicist also comes with its share of
                challenges. The universe is an incredibly complex and often
                unforgiving place, and there is still so much we do not
                understand. But I am driven by the belief that through hard
                work, perseverance, and a dedication to the scientific method,
                we can continue to unlock the secrets of the cosmos and deepen
                our understanding of our place in the universe.
              </p>
            </div>
          </div>
        </Layout>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text='Education And Training'
            className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8'
          />
          <div className='text-dark text-xl text-justify mx-40 dark:text-light sm:mx-2 sm:text-base'>
            <li>
              My journey as an astrophysicist began with a deep passion for
              science and a strong curiosity about the universe. After
              completing my undergraduate degree in physics, I went on to earn a
              PhD in astrophysics from a leading research university. During my
              graduate studies, I had the opportunity to work with some of the
              top scientists in the field and to contribute to research projects
              that were advancing our understanding of the cosmos.
            </li>
            <li className='mt-6'>
              Following the completion of my PhD, I went on to pursue
              postdoctoral research at several prominent institutions, including
              NASA's Goddard Space Flight Center and the Max Planck Institute
              for Astrophysics. These experiences allowed me to deepen my
              expertise in a variety of areas, from the study of gravitational
              waves to the behavior of black holes and the structure of
              galaxies.
            </li>
            <li className='mt-6'>
              Throughout my education and training as an astrophysicist, I have
              been committed to pursuing excellence in my research and to
              sharing my knowledge with others. From mentoring undergraduate and
              graduate students to presenting my work at conferences and in
              scientific journals, I have always sought to contribute to the
              broader scientific community and to inspire others to join in the
              quest for knowledge.
            </li>
          </div>
        </Layout>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text='Research and Achievements'
            className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8'
          />
          <div className='text-dark text-xl text-justify mx-40 dark:text-light sm:mx-4 sm:text-base'>
            <li>
              Over the course of my career as an astrophysicist, I have had the
              privilege of contributing to numerous groundbreaking research
              projects. One of my most significant achievements was my work on a
              team that detected gravitational waves for the first time. This
              discovery was a major milestone in the field of astrophysics,
              confirming a key prediction of Einstein's theory of general
              relativity and opening up new avenues for exploring the universe.
            </li>
            <li className='mt-6'>
              I have also contributed to research on the nature of black holes
              and the role they play in the formation of galaxies. Through
              extensive observations and simulations, my team and I have gained
              new insights into the complex interactions between black holes,
              dark matter, and other cosmic structures. Our findings have helped
              to shed light on some of the most fundamental questions in
              astrophysics, including the origins of the universe itself.
            </li>
            <li className='mt-6'>
              In addition to my research, I have also been fortunate enough to
              receive numerous accolades and awards for my work in the field of
              astrophysics. These include the prestigious Nobel Prize in
              Physics, which I received for my contributions to the detection of
              gravitational waves. I am also a fellow of the American Physical
              Society and a member of the National Academy of Sciences, among
              other honors. Through all of these achievements, I am committed to
              continuing to push the boundaries of our understanding of the
              universe and to inspiring the next generation of astrophysicists
              to join in the quest for knowledge.
            </li>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default about
