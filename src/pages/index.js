import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import background from "../../public/images/backgroundHome1.jpg";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import ScrollDown from "@/components/ScrollDown";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title>Sagar | Home </title>
        <meta name="description" content="description" />
      </Head>
      <TransitionEffect />
      <main className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
        <Image
          src={background}
          alt="background"
          priority
          className="absolute inset-0 w-full h-full object-cover opacity-70 dark:opacity-70 pointer-events-none"
        />
        <div className="relative z-10 text-center px-4 w-full">
          <AnimatedText
            text="Sagar Adhikari, PhD"
            className="xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl"
          />
            <AnimatedText
              text="Data Scientist | ML Engineer| Astrophysicist | Researcher"
              className="!text-3xl xl:!text-5xl lg:!text-4xl md:!text-3xl sm:!text-3xl text-center sm:mb-4 xs:!text-xl"
            />
            <div className="flex items-center justify-center mt-6">
              <Link href="/projects" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">
                View DS/ML Portfolio
              </Link>
            </div>
            <div className="flex items-center justify-center mt-6">
              <Link href="/research" className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base">
                View Research Portfolio
              </Link>
            </div>
            <div className="mt-8">
            <ScrollDown />
          </div>
        </div>
      </main>
      <main>
        <Layout>
          <AnimatedText
            text="Featured Projects"
            className="xl:!text-5xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl justify-center text-center mb-8 xs:!text-xl"
          />
          <div className="text-dark text-xl text-justify mx-40 dark:text-light sm:mx-6 xs:mx-0 xs:text-base">
            <li>
              <strong>ML Classifications of Fermi-LAT Blazars:</strong> Achieved &gt;90% accuracy using XGBoost for classifying astrophysical sources.
            </li>
            <li className="mt-6">
              <strong>Stock Market Forecasting:</strong> Built models to predict S&P 500 trends, comparing statistical and ML approaches.
            </li>
            <li className="mt-6">
              <strong>Image Style Transfer with TensorFlow:</strong> Implemented VGG19-based neural style transfer for artistic image transformations.
            </li>
            <p className="mt-8 text-center">
              <Link href="/projects" className="text-blue-600 hover:underline dark:text-blue-400 font-semibold text-2xl">View All Data Science Projects</Link>
            </p>
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
