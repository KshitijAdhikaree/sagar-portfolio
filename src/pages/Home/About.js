import React from "react";

function About() {
  return (
    <div className="bg-primary py-8 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-5xl text-black font-semibold tracking-wide uppercase">
            About Me
          </h2>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div class="flex items-center">
              <div class="w-3/3 text-center">
                <img
                  src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.6435-9/188601978_4620907477924652_6266218967972445976_n.jpg?stp=dst-jpg_p720x720&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=B0FFlcs9XXEAX8xmWWl&_nc_ht=scontent.fktm6-1.fna&oh=00_AfAtuyIiU-FCb7dmTdk6_hqQJMsmKAL3ZzJ699g6SYHQ6g&oe=642C52C3"
                  alt="Profile picture"
                  class="rounded-full w-80 mx-auto mb-4 pb-6"
                />
                <a
                  href="https://drive.google.com/file/d/1DOfIlTqmFJrngC_6rb_Qwba42Hc8A7ak/view?usp=sharing"
                  class="bg-[#0b2e33] hover:bg-[#133e45] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div>
              <h1 className="text-3xl leading-6 font-medium text-white py-4">
                Hey,
              </h1>
              <p className="mt-2 text-lg  text-black">
                As an astrophysicist, I am fascinated by the mysteries of the
                universe and the forces that govern its behavior. My passion for
                this field began with a childhood fascination for the stars, and
                has only grown stronger with time. My academic journey began
                with a degree in physics and astronomy, followed by a PhD in
                astrophysics. Since then, I have been conducting research in
                various areas such as cosmology, galactic astronomy, and
                high-energy astrophysics.
              </p>
              <p className="mt-2 text-lg  text-black">
                One of the most exciting aspects of my work as an astrophysicist
                is the opportunity to collaborate with other researchers and
                experts in related fields. This interdisciplinary approach
                allows me to explore new ideas and approaches, and to stay at
                the forefront of cutting-edge research. Whether it's working on
                a new model of dark matter or analyzing data from the latest
                astronomical observatories, I am always eager to tackle new
                challenges and uncover new insights about the universe we live
                in.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
