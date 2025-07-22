
function SkillSection() {
    const skills = [
    "JavaScript",
    "C++",
    "Next.js",
    "React",
    "TypeScript",
    "TailwindCSS",
    "MongoDB",
    "Node.js",
    "MySQL",
  ];


    return (
        <section
            id="skills"
            className="bg-background mt-8 w-full scroll-mt-20"
        >
            <div className="container max-w-4xl mx-auto flex flex-col items-center justify-center text-center z-10 max-[425px]:mt-4 roboto">
                <h2 className="text-4xl font-bold font-mono mb-6 text-center">
                    My Tech Stack
                </h2>
                <div className="flex  cursor-pointer flex-wrap justify-start items-start gap-3 max-[425px]:text-left">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="bg-black text-primary-foreground rounded-[10px] px-4 py-3 text-sm font-mono font-medium hover:scale-105"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
 
  )
}

export default SkillSection