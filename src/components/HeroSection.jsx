function HeroSection() {
  const education = [
    {
      id: 1,
      title: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Gandhi Engineering College, Bhubaneswar",
      cgpa: "8.5/10",
      year: "2022-2026",
      image: "https://www.reviewadda.com/assets/uploads/college/logo/LOGO_8330.jpg",
    },
    {
      id: 2,
      title: "Central Board of Secondary Education",
      institution: "I D M Public School, Balangir",
      year: "2019-2021",
      image:
        "https://static.wixstatic.com/media/8977ae_8c6fe6a428ff4b8682dab318e1f278bc~mv2.jpg/v1/fill/w_182,h_182,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8977ae_8c6fe6a428ff4b8682dab318e1f278bc~mv2.jpg",
    },
    // {
    //   id: 3,
    //   title: "Central Board of Secondary Education",
    //   institution: "Lion Vocational Public School, Patnagarh",
    //   year: "2005-2019",
    //   image: "https://www.lvpspatnagarh.in/images/logo.png",
    // },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center w-full"
    >
      <div className="w-full max-w-screen-xl mx-auto text-center z-10 mt-10 px-4">
        <div className="space-y-6 mt-10 roboto">
          <h1 className="bg-white roboto text-red-600 rounded-lg">Under Construction</h1>
          <h1
            className="z-10 text-center font-mono bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-4xl sm:text-2xl md:text-5xl lg:text-7xl max-sm:text-[22px] max-[450px]:text-2xl leading-relaxed lg:leading-snug"
          >
            Hey! I am Akash Meher, a{" "}
            <span className="relative mt-2 inline-block px-1 pb-1 rounded-lg animate-gradient-x ">
              FullStack Developer.
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg font-medium text-center max-w-6xl mx-auto opacity-90 px-2 max-[450px]:text-left max-[325px]:text-sm">
            I specialize in crafting high-performance, responsive, and visually
            stunning web applications. With expertise in JavaScript,
            React, and Node.js, I build seamless user experiences.
            Whether it's a custom website, a web app, or a SaaS platform, I turn
            ideas into scalable digital solutions. Follow me on
            <span className="relative font-semibold underline-anim-load">
              <a
                href="https://x.com/_akashmeher_"
                target="_blank"
                className="mx-2"
              >
                X
              </a>
              ,
              <a
                href="https://github.com/akash-meher-78"
                target="_blank"
                className="mx-2"
              >
                Github
              </a>{" "}
              and
              <a
                href="https://www.linkedin.com/in/akash-meher"
                target="_blank"
                className="mx-2"
              >
                LinkedIn
              </a>
            </span>
          </p>

          <div className="flex justify-center items-center gap-2">
            <a
              id="projects"
              href="#projectsLink"
              className="cosmic-button cursor-pointer px-6 py-3 text-base sm:text-lg rounded-xl font-mono font-semibold"
            >
              View My Work
            </a>
            <a
              id="contactus"
              href="#getInTouch"
              className="hover:shadow-[0_0_10px_rgba(0,0,0,0.2)] hover:scale-105 cursor-pointer px-6 py-3 text-base sm:text-lg rounded-xl font-mono font-semibold bg-black border border-primary text-primary-foreground"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="w-full max-w-screen-xl mx-auto text-center z-10 mt-16 px-4">
        <div className="space-y-6 roboto">
          <h1 className="text-4xl font-bold font-mono mb-6 text-center">
            Education
          </h1>
        </div>

        <div className="w-full">
          {education.map((educationItem, key) => (
            <div
              key={key}
              className="flex items-center justify-between gap-4 px-4 py-6 bg-background rounded-xl shadow-md text-left w-full mb-4 max-[450px]:justify-start max-[450px]:gap-3 max-[450px]:pl-0 roboto"
            >
              {/* Logo */}
              <div className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 overflow-hidden flex-shrink-0 flex items-center justify-center">
                <img
                  src={educationItem.image}
                  alt={educationItem.title}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* College Info */}
              <div className="flex-1 min-w-[250px] px-2 max-[450px]:px-1">
                <div className="max-[450px]:text-xs max-[450px]:leading-snug max-[450px]:space-y-0 space-y-1">
                  <h1 className="text-base sm:text-lg lg:text-2xl font-bold font-mono max-[450px]:text-xs max-[450px]:leading-tight">
                    {educationItem.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-xl font-mono text-muted-foreground max-[450px]:text-xs max-[450px]:leading-tight">
                    {educationItem.institution}
                  </p>
                </div>
              </div>

              {/* CGPA & Year */}
              <div className="text-right min-w-[80px] px-2 max-[450px]:hidden">
                <h1 className="text-base sm:text-lg lg:text-2xl font-semibold">
                  {educationItem.cgpa}
                </h1>
                <p className="text-sm sm:text-base lg:text-xl text-muted-foreground">
                  {educationItem.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
