import { Github, SquareArrowOutUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Saas Landing Page",
    description:
      "A modern SaaS landing page built with Next.js and Tailwind CSS, featuring a responsive design and smooth animations.",
    image: "/projects/SaasLandingPage.png",
    tags: ["Tailwind CSS", "React", "Farmer Motion"],
    demoUrl: "https://saas-landing-page-iota-one.vercel.app/",
    githubUrl: "https://github.com/akash-meher-78/SaaS-Landing-Page",
    date: "July 2025",
    status: "Completed",
  },
  {
    id: 2,
    title: "Old Portfolio",
    description:
      "This Was my first portfolio website, showcasing my skills and projects in a simple yet elegant design. ",
    image: "/projects/oldPortfolio.png",
    tags: ["Html", "CSS", "JavaScript"],
    date: "Jan 2025",
    demoUrl: "https://portfolio-snowy-ten-40.vercel.app/",
    githubUrl: "https://github.com/akash-meher-78/Portfolio-basic",
    status: "Completed",
  },
  {
    id: 3,
    title: "Project Heading",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/projects/project1.jpg",
    tags: [],
    demoUrl: "#",
    githubUrl: "#",
    date: "July 2025",
    status: "In Progress",
  },
];

function ProjectSection() {
  return (
    <section id="projectsLink" className="py-24 px-4 relative roboto">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Proof of Work</h2>
          <p id="projectHead" className="text-muted-foreground max-w-2xl mx-auto">
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
              <div className="h-50 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-6 flex flex-col flex-1 text-left">
                <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-2xl font-bold font-mono lowercase break-words">
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
                  {project.date && (
                    <div className="text-xs sm:text-sm text-muted-foreground font-mono">
                      {project.date}
                    </div>
                  )}
                  {project.status && (
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 sm:px-3 py-2 rounded-md">
                      {project.status}
                    </span>
                  )}
                </div>
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
                    className="bg-black text-white px-3 sm:px-4 py-2 rounded font-mono font-semibold flex items-center gap-2 text-xs sm:text-sm hover:bg-primary transition"
                  >
                    <SquareArrowOutUpRight />
                    <span>Website</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
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

        <div className="text-center mt-12">
          <a className="px-6 py-3 border rounded-xl bg-slate-700 text-white hover:bg-slate-600 font-bold cursor-pointer">
            View All
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
