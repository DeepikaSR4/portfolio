import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Associate Product Manager",
    company: "Lascade LLC",
    period: "Jan 2025-Jul 2025",
    description:
      "Own and manage multiple apps, focusing on scaling, retention, and growth. Drive product improvements using data-driven insights and user feedback. Optimize user retention through omnichannel marketing strategies. Ensure high-quality output by collaborating with cross-functional teams. Coordinate with operations to meet deadlines and deliver key milestones.",
    skills: ["Product Management", "Data-Driven Growth", "User Retention", "Cross-Functional Collaboration"],
  },
  {
    title: "Product Intern",
    company: "Lascade LLC",
    period: "Jul 2024-Dec 2024",
    description:
      "Conducted competitor analysis and market research to refine product features. Created Product Requirement Documents (PRDs) and detailed user stories to guide development. Assisted design and development teams in aligning product goals with user needs. Conducted product testing and documented insights for iterative improvements. Analyzed user feedback and translated insights into actionable improvements.",
    skills: ["Competitor Analysis", "Market Research", "Product Requirement Documents", "User Stories", "User Feedback Analysis"],
  },
  {
    title: "Mentee - Hyperledger Blockchain Explorer Redesign",
    company: "Hyperledger Foundation",
    period: "Jun 2023-Jan 2024",
    description:
      "Led quantitative/qualitative user research and competitive audit. Designed wireframes, prototypes, and improved information architecture. Presented progress to the Technical Oversight Committee. Worked with cross-functional teams across the globe. Documented process on Hyperledger Wiki for future use.",
    skills: ["User Research", "Competitive Audit", "Wireframing", "Prototyping", "Information Architecture", "Cross-Functional Teams"],
  },
  {
    title: "Junior Designer",
    company: "Product Pack",
    period: "Mar 2023- Mar 2024",
    description:
      "Designed social media assets using Figma in collaboration with cross-functional teams. Conceptualized, created, and delivered final designs based on feedback.",
    skills: ["Figma", "Design", "Cross-Functional Collaboration"],
  },
  {
    title: "UI/UX Design Intern",
    company: "Starved",
    period: "Aug 2022",
    description:
      "Conducted competitive audits and user research. Designed wireframes and prototypes for mobile apps to improve user experience.",
    skills: ["Competitive Audits", "User Research", "Wireframing", "Prototyping", "User Experience"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-muted-foreground text-lg">
          A journey of growth and impact.
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
