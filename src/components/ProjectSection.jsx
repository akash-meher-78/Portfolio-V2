import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description:
      "A modern SaaS landing page built with Next.js and Tailwind CSS, featuring a responsive design and smooth animations.",
    image: "/projects/project1.jpg",
    tags: [
      "Html",
      "Tailwind CSS",
      "React",
      "MongoDB",
      "Node.js",
      "Epress",
      "Shadcn",
      "Farmer Motion",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Saas Landing Page",
    description:
      "A modern SaaS landing page built with Next.js and Tailwind CSS, featuring a responsive design and smooth animations.",
    image: "/projects/project1.jpg",
    tags: [
      "Html",
      "Tailwind CSS",
      "React",
      "MongoDB",
      "Node.js",
      "Epress",
      "Shadcn",
      "Farmer Motion",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 1,
    title: "Saas Landing Page",
    description:
      "A modern SaaS landing page built with Next.js and Tailwind CSS, featuring a responsive design and smooth animations.",
    image: "/projects/project1.jpg",
    tags: [
      "Html",
      "Tailwind CSS",
      "React",
      "MongoDB",
      "Node.js",
      "Epress",
      "Shadcn",
      "Farmer Motion",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative roboto">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Proof of Work</h2>
          <p
            id="projectHead"
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group w-full sm:w-[80%] bg-card mb-5 rounded-lg overflow-hidden shadow-xs border border-border flex flex-col mx-auto"
            >
              <div className="h-40 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-2xl font-bold font-mono mb-0 lowercase break-words">
                    {project.title}
                  </h3>
                  {project.status && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
                {project.date && (
                  <div className="text-xs sm:text-sm text-muted-foreground mb-2 font-mono">
                    {project.date}
                  </div>
                )}
                <p className="text-xs sm:text-base text-muted-foreground mb-4 font-mono">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-semibold rounded bg-black border text-foreground font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto flex-wrap">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-3 sm:px-4 py-2 rounded font-mono font-semibold flex items-center gap-2 text-xs sm:text-sm hover:bg-primary transition"
                  >
                    <Link />
                    <span>Website</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-muted text-foreground px-3 sm:px-4 py-2 rounded font-mono font-semibold flex items-center gap-2 text-xs sm:text-sm border border-border hover:bg-primary hover:text-white transition"
                  >
                    <Github />
                    <span>Source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
