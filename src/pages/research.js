import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { ProjectData } from "../../public/projectData";
import { PublicationData } from "../../public/publicationData";
import { PressAndTalkData } from "../../public/pressAndTalkData";

const Research = ({ title, summary, link, isPressAndTalk }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10 relative rounded-br-2xl
    dark:border dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4 "
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl
      dark:bg-light xs:-right-2 sm:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]"
      />

      <div className="w-full flex flex-col items-center justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 text-center">
        {isPressAndTalk && link ? (
          <Link href={link} className="my-2 w-full text-dark text-center text-2xl font-bold dark:text-light sm:text-sm hover:underline">
            {title}
          </Link>
        ) : (
          <h2 className="my-2 w-full text-dark text-center text-2xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        )}

        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm text-justify">
          {summary}
        </p>
        {!isPressAndTalk && (
          <div className="mt-2 flex flex-row items-center">
            {link ? (
              <Link
                href={link}
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
              sm:px-4 sm:text-base flex items-center"
              >
                View
              </Link>
            ) : (
              <button
                disabled
                className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-gray-300 dark:text-dark
                sm:px-4 sm:text-base flex items-center cursor-not-allowed"
              >
                View
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

const ResearchPage = () => {
  return (
    <>
      <Head>
        <title>Sagar | Research</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light ">
        
        <Layout className="pt-16">
          <AnimatedText
            text="Publications"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {PublicationData.map((publication) => (
              <div key={publication.id} className="col-span-12">
                <Research
                  title={publication.title}
                  summary={publication.description}
                  link={publication.link}
                  isPressAndTalk={false}
                />
              </div>
            ))}
          </div>
        </Layout>
        <Layout className="pt-16">
          <AnimatedText
            text="Press And Talks"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center "
          />
          <div className="grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {PressAndTalkData.map((pressAndTalk) => (
              <div key={pressAndTalk.id} className="col-span-12">
                <Research
                  title={pressAndTalk.title}
                  summary={pressAndTalk.description}
                  link={pressAndTalk.link}
                  isPressAndTalk={true}
                />
              </div>
            ))}
          </div>
        </Layout>
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-10 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {ProjectData.map((project) => (
              <div key={project.id} className="col-span-12">
                <Research
                  title={project.title}
                  summary={project.description}
                  link={project.link}
                  isPressAndTalk={false}
                />
              </div>
            ))}
          </div>
        </Layout>
        
      </main>
    </>
  );
};

export default ResearchPage;
