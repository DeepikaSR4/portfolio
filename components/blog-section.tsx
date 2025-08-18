import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Exploring emerging technologies and methodologies that are shaping the future of web development.",
    image: "/futuristic-web-development.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    id: "future-of-web-development-2024",
  },
  {
    title: "Building Accessible User Interfaces: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of their abilities.",
    image: "/accessibility-web-design-interface.png",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Design",
    id: "building-accessible-user-interfaces",
  },
  {
    title: "Optimizing React Performance: Tips and Best Practices",
    excerpt: "Practical strategies to improve your React application's performance and user experience.",
    image: "/react-performance-optimization.png",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Development",
    id: "optimizing-react-performance",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>

                <CardTitle className="text-primary font-serif group-hover:text-accent transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">{post.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">{post.category}</span>

                  <Link href={`/blog/${post.id || "future-of-web-development-2024"}`}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-accent hover:text-accent-foreground hover:bg-accent"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
            >
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
