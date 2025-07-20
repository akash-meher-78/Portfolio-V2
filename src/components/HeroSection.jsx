function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1
            className="z-10 text-center font-bold bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-4xl sm:text-3xl md:text-5xl lg:text-8xl max-sm:text-2xl leading-relaxed lg:leading-snug"
            style={{ opacity: 1, transform: "none" }}
          >
            Hey! I am Akash Meher, a{" "}
            <span className="relative inline-block px-1 pb-1 rounded-lg animate-gradient-x">
              Frontend Developer.
            </span>
          </h1>

          <p className="text-muted-foreground text-base sm:text-lg font-medium text-center max-w-6xl mx-auto opacity-90 px-2 max-[450px]:text-left max-[325px]:text-sm">
            I specialize in crafting high-performance, responsive, and visually
            stunning web applications. With expertise in JavaScript, TypeScript,
            React, Next.js, and Node.js, I build seamless user experiences.
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

          <div className="flex justify-center items-center gap-6 max-[390px]:flex-col">
            <a
              id="project"
              className="cosmic-button cursor-pointer text-sm sm:text-base max-[325px]:text-xs"
            >
              View My Work
            </a>
            <a
              id="contact"
              className="px-12 py-3 border rounded-xl bg-black text-primary-foreground font-medium transition-all duration-300 hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base max-[325px]:text-xs"
            >
              Hire me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
