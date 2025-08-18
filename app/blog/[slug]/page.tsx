import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: "future-of-web-development-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Exploring emerging technologies and methodologies that are shaping the future of web development.",
    image: "/futuristic-web-development.png",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Technology",
    content: `
      <p>The web development landscape is constantly evolving, and 2024 promises to bring exciting new trends and technologies that will shape how we build digital experiences.</p>
      
      <h2>1. AI-Powered Development Tools</h2>
      <p>Artificial Intelligence is revolutionizing how we write code. From GitHub Copilot to ChatGPT, AI assistants are becoming indispensable tools for developers, helping with code generation, debugging, and even architectural decisions.</p>
      
      <h2>2. WebAssembly (WASM) Adoption</h2>
      <p>WebAssembly continues to gain traction, allowing developers to run high-performance applications in the browser using languages like Rust, C++, and Go. This opens up new possibilities for web applications that were previously limited to native apps.</p>
      
      <h2>3. Edge Computing and Serverless</h2>
      <p>The shift towards edge computing is accelerating, with platforms like Vercel Edge Functions and Cloudflare Workers making it easier to deploy code closer to users for improved performance.</p>
      
      <h2>4. Progressive Web Apps (PWAs) 2.0</h2>
      <p>PWAs are getting more powerful with new APIs and capabilities, blurring the line between web and native applications even further.</p>
      
      <p>As we move forward, staying updated with these trends will be crucial for any web developer looking to build modern, efficient, and user-friendly applications.</p>
    `,
  },
  {
    id: "building-accessible-user-interfaces",
    title: "Building Accessible User Interfaces: A Comprehensive Guide",
    excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of their abilities.",
    image: "/accessibility-web-design-interface.png",
    date: "March 8, 2024",
    readTime: "8 min read",
    category: "Design",
    content: `
      <p>Creating accessible user interfaces isn't just about compliance—it's about building inclusive experiences that work for everyone. Here's your comprehensive guide to web accessibility.</p>
      
      <h2>Understanding Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites that can be used by people with disabilities. This includes visual, auditory, motor, and cognitive impairments.</p>
      
      <h2>The WCAG Guidelines</h2>
      <p>The Web Content Accessibility Guidelines (WCAG) provide the foundation for web accessibility. The four main principles are:</p>
      <ul>
        <li><strong>Perceivable:</strong> Information must be presentable in ways users can perceive</li>
        <li><strong>Operable:</strong> Interface components must be operable</li>
        <li><strong>Understandable:</strong> Information and UI operation must be understandable</li>
        <li><strong>Robust:</strong> Content must be robust enough for various assistive technologies</li>
      </ul>
      
      <h2>Practical Implementation Tips</h2>
      <p>Start with semantic HTML, add proper ARIA labels, ensure keyboard navigation, and test with screen readers. Remember, accessibility benefits everyone, not just users with disabilities.</p>
    `,
  },
  {
    id: "optimizing-react-performance",
    title: "Optimizing React Performance: Tips and Best Practices",
    excerpt: "Practical strategies to improve your React application's performance and user experience.",
    image: "/react-performance-optimization.png",
    date: "February 28, 2024",
    readTime: "6 min read",
    category: "Development",
    content: `
      <p>React applications can become slow as they grow. Here are proven strategies to keep your React apps fast and responsive.</p>
      
      <h2>1. Use React.memo Wisely</h2>
      <p>React.memo prevents unnecessary re-renders by memoizing component results. Use it for components that receive the same props frequently.</p>
      
      <h2>2. Optimize State Management</h2>
      <p>Keep state as local as possible and avoid unnecessary state updates. Consider using useCallback and useMemo for expensive calculations.</p>
      
      <h2>3. Code Splitting and Lazy Loading</h2>
      <p>Use React.lazy() and Suspense to split your code and load components only when needed. This reduces initial bundle size significantly.</p>
      
      <h2>4. Virtual Scrolling for Large Lists</h2>
      <p>For large datasets, implement virtual scrolling using libraries like react-window to render only visible items.</p>
      
      <h2>5. Profile with React DevTools</h2>
      <p>Use the React DevTools Profiler to identify performance bottlenecks and measure the impact of your optimizations.</p>
      
      <p>Remember, premature optimization is the root of all evil. Profile first, then optimize based on actual performance data.</p>
    `,
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.id === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-accent hover:text-accent/80 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </div>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4">{post.title}</h1>
          <p className="text-muted-foreground text-lg">{post.excerpt}</p>

          <div className="flex items-center gap-4 mt-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
          <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  )
}
