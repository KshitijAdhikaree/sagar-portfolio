import React from "react";

function Home() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#151859] sm:text-5xl md:text-6xl">
            Hi, I am Sagar Adhikari
          </h1>
          <p className="mt-6 text-xl text-black text-justify">
            As an astrophysicist, I am driven by a deep curiosity about the
            universe and the mysteries it holds. From the tiniest subatomic
            particles to the largest galaxies, I am fascinated by the
            intricacies of the cosmos and am constantly seeking to expand my
            understanding of it. With a combination of theoretical models and
            cutting-edge observational techniques, I am constantly working to
            shed new light on the nature of the universe and the forces that
            shape it.
          </p>
          <p className="mt-6 text-xl text-black text-justify">
            At the heart of my work as an astrophysicist is a dedication to the
            scientific process and a commitment to the pursuit of truth. Through
            rigorous experimentation, detailed data analysis, and careful
            interpretation of results, I am able to generate new insights into
            the workings of the universe and contribute to the broader body of
            scientific knowledge. With a deep respect for the power and beauty
            of science, I am committed to sharing my findings with the wider
            world and inspiring others to engage with the wonders of the cosmos.
          </p>
          <p className="mt-6 text-xl text-black text-justify">
            Whether you are a fellow scientist, a student, or simply someone
            with a sense of wonder about the universe, I welcome you to explore
            my work and join me on a journey of discovery. Together, we can
            uncover new insights into the workings of the cosmos and deepen our
            understanding of the forces that shape our world and the universe
            beyond.
          </p>

          <div class="mt-10 text-center">
            <a
              href="/contact"
              class="text-base font-medium bg-[#0b2e33] hover:bg-[#2b722e]  text-white px-4 py-2 rounded-md"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
