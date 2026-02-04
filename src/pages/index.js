import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import background from "../../public/images/backgroundHome1.jpg";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollDown from "@/components/ScrollDown";

function Home() {
  return (
    <>
      <Head>
        <title>Sagar | Home </title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main>
        <div className="relative">
          <Image
            src={background}
            alt="background"
            className="-mt-32 h-[104vh] sm:h-[120vh]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 xs:mt-2 xs:-ml-2">
            <AnimatedText
              text="Sagar Adhikari, PhD"
              className="xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl"
            />
            <AnimatedText
              text="Clemson University, Clemson, SC, USA"
              className="!text-3xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl"
            />
            <AnimatedText
              text="I research black holes, AGNs using multiwavelength observations, Statistical models, and Machine Learning."
              className="!text-3xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl"
            />
            <ScrollDown />
          </div>
        </div>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text="Area Of Expertise"
            className="xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8 xs:!text-xl"
          />
          <div className="text-dark text-xl text-justify mx-40 dark:text-light sm:mx-6 xs:mx-0 xs:text-base">
            <li>
              Black holes: My research is focused on the Supermassive blackholes
              in the center of galaxies.
            </li>
            <li className="mt-6">
              Computational tools: I am skilled in the use of computational
              tools and mathematical models to analyze data and develop theories
              that help to deepen our understanding of the AGNs.
            </li>
            <li className="mt-6">
              Data Science & Machine Learning: I utilize modern ML algorithms, models to analyze multitude of data and develop/test theories
              that help to deepen our understanding of the AGNs. Visit my &ldquo;Projects&rdquo; tab.
            </li>
          </div>
        </Layout>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text="Current Research Focus"
            className="xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8 xs:!text-xl"
          />
          <div className="text-dark text-xl text-justify mx-40 dark:text-light sm:mx-6 xs:mx-0 xs:text-base">
            <li>
              AGNs: I am currently conducting research on the long-term
              variability on the multiwavelength Blazar emission to constrain
              the binary SMBH models.
            </li>
            <li className="mt-6">
              Impact of gaps in the periodicity analysis: I am interested in
              exploring the impact of gaps in a light curve in the periodicity
              analysis. Specifically, I am studying the detection of false
              periods in a random timeseries data when various amount of gaps
              are introduced randomly.
            </li>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default Home;
