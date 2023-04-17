import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import background from '../../public/images/backgroundHome1.jpg'
import AnimatedText from '@/components/AnimatedText'
import TransitionEffect from '@/components/TransitionEffect'
import ScrollDown from '@/components/ScrollDown'

function Home() {
  return (
    <>
      <Head>
        <title>Sagar | Home </title>
        <meta name='description' content='description' />
      </Head>
      <TransitionEffect />
      <main>
        <div className='relative'>
          <Image
            src={background}
            alt='background'
            className='-mt-32 h-[101vh] sm:h-[120vh]'
          />
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 xs:mt-2 xs:-ml-2'>
            <AnimatedText
              text='Sagar Adhikari'
              className='xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl'
            />
            <AnimatedText
              text='Study celestial bodies and the universe.'
              className='!text-3xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl'
            />
            <AnimatedText
              text='Research dark matter, black holes, and more.'
              className='!text-3xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl'
            />
            <ScrollDown />
          </div>
        </div>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text='Area Of Expertise'
            className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8 xs:!text-xl'
          />
          <div className='text-dark text-xl text-justify mx-40 dark:text-light sm:mx-6 xs:mx-0 xs:text-base'>
            <li>
              Black holes: My research has focused on the formation and behavior
              of black holes, as well as their role in shaping galaxies.
            </li>
            <li className='mt-6'>
              Dark matter: I have a deep interest in the study of dark matter,
              which makes up the majority of the matter in the universe but
              remains largely mysterious.
            </li>
            <li className='mt-6'>
              Gravitational waves: I have contributed to the study of
              gravitational waves, which provide a new way of exploring the
              universe and have opened up new avenues for research in
              astrophysics.
            </li>
            <li className='mt-6'>
              Observational tools: I have expertise in the use of cutting-edge
              observational tools, such as telescopes and other instruments, to
              collect data on the universe.
            </li>
            <li className='mt-6'>
              Computational tools: I am also skilled in the use of computational
              tools and mathematical models to analyze data and develop theories
              that help to deepen our understanding of the cosmos.
            </li>
          </div>
        </Layout>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text='Current Research Focus'
            className='xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8 xs:!text-xl'
          />
          <div className='text-dark text-xl text-justify mx-40 dark:text-light sm:mx-6 xs:mx-0 xs:text-base'>
            <li>
              Supermassive black holes: I am currently conducting research on
              the behavior of supermassive black holes, particularly their role
              in shaping the galaxies they reside in.
            </li>
            <li className='mt-6'>
              Gravitational waves: I am continuing my work on the study of
              gravitational waves, particularly in the context of the detection
              and interpretation of these waves from sources across the
              universe.
            </li>
            <li className='mt-6'>
              Dark matter: I am also currently focused on understanding the
              nature of dark matter and its impact on the formation and
              evolution of galaxies.
            </li>
            <li className='mt-6'>
              Cosmology: My research also involves the study of the large-scale
              structure of the universe, including the distribution of matter
              and the evolution of cosmic structures.
            </li>
            <li className='mt-6'>
              Interdisciplinary approaches: Finally, I am interested in
              exploring interdisciplinary approaches to astrophysics, including
              the intersection of astrophysics with fields such as computer
              science, machine learning, and artificial intelligence.
            </li>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default Home
