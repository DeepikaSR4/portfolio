import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React patterns.",
    skills: ["React", "TypeScript", "Next.js", "Team Leadership"],
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed and maintained full-stack web applications using modern technologies and agile methodologies.",
    skills: ["Node.js", "React", "PostgreSQL", "AWS"],
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Created responsive websites and interactive experiences for various clients in different industries.",
    skills: ["JavaScript", "CSS", "Vue.js", "Design Systems"],
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2017 - 2018",
    description: "Started my professional journey building web applications and learning industry best practices.",
    skills: ["HTML", "CSS", "JavaScript", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
            My journey through various roles and the skills I've developed along the way.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 bg-primary rounded-full flex-shrink-0 relative z-10">
                  <Briefcase className="h-6 w-6 text-primary-foreground" />
                </div>

                <Card className="flex-1 border-border">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-primary font-serif">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <CardDescription className="text-accent font-medium">{exp.company}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="bg-accent/10 text-accent">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
