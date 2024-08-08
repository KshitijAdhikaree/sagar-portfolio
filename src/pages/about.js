import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilePic.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";

const about = () => {
  return (
    <>
      <Head>
        <title>Sagar | About</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light xs:-mx-2">
        <Layout className="pt-0 md:p-16 sm:pt-2 ">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 lg:w-full md:w-full md:-mt-8 ">
              <div
                className="w-[420px] h-[490px] bg-primaryDark dark:bg-primary border-[12px] border-dark transition-[border-radius] duration-[0.5s] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] rounded-[10px] 
              shadow-[inset_0_-3em_3em_rgba(0,0,0,0.1),0_0_0_2px_rgb(190,190,190),0.3em_0.3em_1em_rgba(0,0,0,0.3)]
              dark:shadow-[inset_0_-3em_3em_rgba(255,255,255,0.1),0_0_0_2px_rgb(53,53,53),0.3em_0.3em_1em_rgba(255,255,255,0.3)]
              mt-24 md:w-[20rem] md:h-[341px] md:mt-16 md:ml-[72px] sm:ml-20 xs:ml-8 lg:ml-[160px] sm:mt-32 mb-4 dark:border-light xs:w-[14rem] xs:h-[16rem] sm:w-[300px] sm:h-[348px]"
              >
                <Image
                  src={profilePic}
                  alt="profilePic"
                  width={400}
                  height={400}
                  priority={true}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className=" lg:inline-block md:inline-block md:w-[24rem] sm:w-[18rem] xs:w-[14rem] xs:-mt-[3px] "
                />
              </div>
              <div className="flex items-center self-start mt-8 lg:self-center ml-20 xs:flex-col xs:ml-4 xs:gap-2">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold 
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                  dark:text-dark dark:bg-light dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=adhikaree.sagar@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base xs:ml-0"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center sm:mt-4">
              <AnimatedText
                text="About Me"
                className="xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-base text-justify xs:text-base ">
                I find the mysteries of the universe to be incredibly
                fascinating as an astrophysicist. My goal is to figure out how
                the accreting supermassive blackhole system at the center of
                active galaxies emits light.
              </p>
              <p className="my-4 text-base font-medium md:text-sm sm:text-base text-justify xs:text-base ">
                Working with scientists from all over the world is one of the
                most intriguing aspects of my job as an astrophysicist. I've
                been able to contribute to ground-breaking studies that have
                expanded our knowledge of the universe through these
                collaborations. From analyzing data from telescopes to
                developing complex mathematical models, I am constantly working
                with others to push the boundaries of our knowledge.
              </p>
            </div>
          </div>
        </Layout>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text="Education And Achievements"
            className="xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8"
          />
          <div className="text-dark text-xl text-justify mx-40 dark:text-light sm:mx-2 sm:text-base xs:-mx-2">
            <li className="mt-6">
              I graduated from the Tribhuvan University, Kathmandu, Nepal with a
              Master&apos;s degree in Astrophysics in 2018. Since the fall of
              2019, I have been working towards my PhD in high-energy
              observational astrophysics.
            </li>
            <li className="mt-6">
              I have also been teaching physics and mathematics to highschool
              and undergraduate students since 2014.
            </li>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
