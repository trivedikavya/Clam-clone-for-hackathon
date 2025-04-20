import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The relationship between better sleep and mental health",
      excerpt:
        "Discover how quality sleep can improve your mental wellbeing and practical tips for better sleep hygiene.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sleep",
      date: "April 15, 2025",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "5-minute meditation for busy professionals",
      excerpt:
        "Learn how to incorporate mindfulness into your hectic schedule with these quick and effective techniques.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mindfulness",
      date: "April 10, 2025",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "How to manage stress and anxiety naturally",
      excerpt:
        "Effective techniques to reduce stress without medication, from breathing exercises to lifestyle changes.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Stress & Anxiety",
      date: "April 5, 2025",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "The science behind meditation and brain health",
      excerpt: "Research-backed insights into how regular meditation practice can change your brain for the better.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mindfulness",
      date: "March 28, 2025",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Creating a bedtime routine for better sleep",
      excerpt: "How to design an effective evening routine that prepares your body and mind for restful sleep.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sleep",
      date: "March 22, 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Mindful eating: How to develop a healthier relationship with food",
      excerpt: "Practical tips for bringing mindfulness to your meals and transforming your eating habits.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mindfulness",
      date: "March 15, 2025",
      readTime: "6 min read",
    },
    {
      id: 7,
      title: "Understanding the physical symptoms of anxiety",
      excerpt: "How anxiety manifests in the body and techniques to address these physical symptoms.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Stress & Anxiety",
      date: "March 10, 2025",
      readTime: "5 min read",
    },
    {
      id: 8,
      title: "The power of gratitude for mental wellbeing",
      excerpt: "Research-backed benefits of gratitude practice and simple ways to incorporate it into your daily life.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mindfulness",
      date: "March 5, 2025",
      readTime: "4 min read",
    },
    {
      id: 9,
      title: "How nature sounds improve sleep quality",
      excerpt:
        "The science behind why natural soundscapes help us sleep better and recommendations for the best sounds.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sleep",
      date: "February 28, 2025",
      readTime: "5 min read",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                Calm Blog: Resources for meditation, sleep, stress, and mental health
              </h1>
              <p className="text-gray-700 mb-8">
                Explore our collection of articles, tips, and insights to support your mental wellbeing journey.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3">
              <Link href="/blog" className="font-medium text-primary">
                All
              </Link>
              <Link href="/blog?category=sleep" className="text-gray-600 hover:text-primary">
                Sleep
              </Link>
              <Link href="/blog?category=mindfulness" className="text-gray-600 hover:text-primary">
                Mindfulness
              </Link>
              <Link href="/blog?category=stress-anxiety" className="text-gray-600 hover:text-primary">
                Stress & Anxiety
              </Link>
              <Link href="/blog?category=mental-health" className="text-gray-600 hover:text-primary">
                Mental Health
              </Link>
              <Link href="/blog?category=science" className="text-gray-600 hover:text-primary">
                Science
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
                    <div className="relative aspect-[16/9]">
                      <Image src={`/images/blog-${post.id}.png`} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800 hover:bg-white">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h2 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
                      <div className="text-primary font-medium group-hover:underline">Read more</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Button variant="outline">Load more articles</Button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-700 mb-8">
              Get the latest articles, meditations, and tips for mental wellbeing delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-gray-300 flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
