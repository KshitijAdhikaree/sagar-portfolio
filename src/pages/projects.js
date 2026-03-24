import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import { ProjectData } from "../../public/projectData";
import Image from "next/image";

const Projects = ({ title, summary, link, image, tech, isPressAndTalk }) => {
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
        {image && (
          <Image
            src={`/images/${image}`}
            alt={title}
            width={300}
            height={300}
            className="mb-4 rounded-lg"
          />
        )}
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
        {tech && tech.length > 0 && (
          <div className="my-2 flex flex-wrap justify-center gap-2">
            {tech.map((t, index) => (
              <span key={index} className="bg-gray-200 dark:bg-gray-700 text-dark dark:text-light px-2 py-1 rounded text-sm">
                {t}
              </span>
            ))}
          </div>
        )}
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

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Sagar | Projects</title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-8 flex flex-col items-center justify-center dark:text-light ">
        
        <Layout className="pt-16">
          <AnimatedText
            text="Data Science & ML Projects"
            className="mb-8 lg:!text-7xl sm:mb-8 sm:!text-4xl xs:!text-2xl text-center "
          />
          <div className="grid grid-cols-12 gap-y-10 gap-x-8 xl:gap-x-8 lg:gap-x-6 sm:gap-x-0">
            {ProjectData.map((projects) => (
              <div key={projects.id} className="col-span-6 md:col-span-12 lg:col-span-12">
                <Projects
                  title={projects.title}
                  summary={projects.description}
                  link={projects.link}
                  image={projects.image}
                  tech={projects.tech}
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

export default ProjectsPage;
