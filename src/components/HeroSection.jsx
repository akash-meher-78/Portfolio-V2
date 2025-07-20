
function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 "
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1
            className="z-10 text-4xl max-sm:text-2xl sm:text-3xl md:text-5xl lg:text-8xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4 leading-relaxed lg:leading-snug mx-auto max-[325px]:text-xl"
            style={{ opacity: 1, transform: "none" }}
          >
            Hey! I am Akash Meher, a{" "}
            <span className="text-center relative mt-2 inline-block pb-1 px-1 rounded-lg animate-gradient-x max-[325px]:text-base">
              Frontend Developer.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-center text-muted-foreground max-w-6xl mx-auto opacity-90 px-2 max-[380px]:text-left max-[325px]:text-sm">
            I specialize in crafting high-performance, responsive, and visually
            stunning web applications. With expertise in JavaScript, TypeScript,
            React, Next.js, and Node.js, I build seamless user experiences.
            Whether it's a custom website, a web app, or a SaaS platform, I turn
            ideas into scalable digital solutions.
          </p>

          <div className="pt-4">
            <a
              id="project"
              className="cosmic-button cursor-pointer text-sm sm:text-base max-[325px]:text-xs"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
