import { Mail, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'd love to chat about your next project or potential collaborations. Feel free to reach out through any of
            the channels below.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                <a href="mailto:deepikasanathanan1234@gmail.com?subject=Website%20Inquiry&body=Hi%20Deepika,%0D%0A%0D%0AI%20am%20interested%20in%20having%20a%20website%20developed%20for%20my%20business.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20pricing?%0D%0A%0D%0AThank%20you!"><p className="text-muted-foreground text-xs sm:text-base">deepikasanathanan1234@gmail.com</p></a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-2 sm:gap-4">
            <a href="https://github.com/DeepikaSR4" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent h-8 w-8 sm:h-10 sm:w-10"
              >
                <Github className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/deepika-sr/" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent h-8 w-8 sm:h-10 sm:w-10"
              >
                <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </a>
            <a href="https://twitter.com/d_4_deepika" target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent h-8 w-8 sm:h-10 sm:w-10"
              >
                <Twitter className="h-3 w-3 sm:h-4 sm:w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
