import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export const projects = [
    {
    title: "Queen Wash Laundry",
    description:
      "An intutive modern website made with latest technologies for Queen Wash Laundry in a short span of time.",
    image: "/queenwashlaundry.png", // even though code is inside /app/components
    technologies: ["Web Development", "UI", "Responsive Web"],
    liveUrl: "https://www.queenwashlaundry.com",
    githubUrl: "#",
  },
  {
    title: "Kerala Results Website",
    description:
      "A personal project designing an intuitive results portal for Kerala students, focusing on accessibility and simplicity.",
    image: "/kerala-results-website.png", // even though code is inside /app/components
    technologies: ["UX Design", "UI", "Responsive Web"],
    liveUrl: "https://www.behance.net/gallery/195182699/Website-Redesign-keralaresultsnic",
    githubUrl: "#",
  },
  {
    title: "Ciniflex UX Case Study",
    description:
      "A detailed UX case study exploring user journeys, wireframing, and prototyping.",
    image: "/ciniflex-case-study.png",
    technologies: ["UX Research", "Wireframing", "Prototyping"],
    liveUrl: "https://www.behance.net/gallery/189407997/Ciniflex",
    githubUrl: "#",
  },
  {
    title: "RupeeX (SHE-HACKS Hackathon)",
    description:
      "Hackathon project focused on building a currency conversion tool with a strong emphasis on usability and design.",
    image: "/rupeex-hackathon.png",
    technologies: ["Hackathon Prototype", "Frontend"],
    liveUrl: "https://deepikasr4-currency-convertor-main-5s4lnu.streamlit.app/",
    githubUrl: "#",
  },
  {
    title: "Itiha – College Event Website",
    description:
      "A responsive website built for the college event Itiha, designed with clean UI and smooth navigation.",
    image: "/itiha-event-website.png",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://deepikasr4.github.io/Itiha2022/",
    githubUrl: "#",
  },
  {
    title: "Sentimind Mini Project",
    description:
      "A mini project exploring sentiment analysis with a user-centric UX approach, combining research and simple prototyping.",
    image: "/sentimind-project.png",
    technologies: ["UI Design", "Data Scraping", "Development", "Data Analysis"],
    liveUrl: "https://deepikasr4.github.io/Itiha2022/",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            A collection of my recent projects, highlighting web development and user experience design
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border border-border rounded-xl overflow-hidden"
            >
              <div className="w-full aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pt-4 pb-2 px-4 sm:px-6">
                <CardTitle className="text-primary font-serif text-lg sm:text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-2 px-4 sm:px-6 pb-4 sm:pb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-muted text-muted-foreground text-xs sm:text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
  <Button size="sm" className="bg-primary hover:bg-primary/90 text-sm">
    <ExternalLink className="h-4 w-4 mr-2" />
    View Details
  </Button>
</a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
