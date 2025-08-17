import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'd love to chat about your next project or potential collaborations. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="font-medium text-foreground">Email</p>
              <p className="text-muted-foreground">deepikasanathanan1234@gmail.com</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
  <a href="https://github.com/DeepikaSR4" target="_blank" rel="noopener noreferrer">
    <Button
      size="icon"
      variant="outline"
      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
    >
      <Github className="h-4 w-4" />
    </Button>
  </a>
  <a href="https://www.linkedin.com/in/deepika-sr/" target="_blank" rel="noopener noreferrer">
    <Button
      size="icon"
      variant="outline"
      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
    >
      <Linkedin className="h-4 w-4" />
    </Button>
  </a>
  <a href="https://twitter.com/d_4_deepika" target="_blank" rel="noopener noreferrer">
    <Button
      size="icon"
      variant="outline"
      className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
    >
      <Twitter className="h-4 w-4" />
    </Button>
  </a>
</div>
        </div>
      </div>
    </section>
  );
}