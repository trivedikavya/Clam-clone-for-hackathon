import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft } from "lucide-react"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // This would normally come from a database or API
  const blogPost = {
    id: params.id,
    title: "The relationship between better sleep and mental health",
    excerpt:
      "Discover how quality sleep can improve your mental wellbeing and practical tips for better sleep hygiene.",
    content: `
      <p>Sleep and mental health are closely connected. Poor sleep can negatively affect your mental health, while mental health issues can make it harder to sleep well. Understanding this relationship can help you improve both your sleep quality and mental wellbeing.</p>
      
      <h2>How Sleep Affects Mental Health</h2>
      
      <p>During sleep, your brain processes emotional information. Adequate sleep helps you manage emotions and cope with stress. When you don't get enough sleep, you might experience:</p>
      
      <ul>
        <li>Increased anxiety and stress</li>
        <li>Irritability and mood swings</li>
        <li>Difficulty concentrating</li>
        <li>Negative thinking patterns</li>
        <li>Worsened symptoms of mental health conditions</li>
      </ul>
      
      <p>Research has shown that people with insomnia are ten times more likely to develop depression than those who sleep well. Even partial sleep deprivation can significantly affect mood.</p>
      
      <h2>How Mental Health Affects Sleep</h2>
      
      <p>Mental health conditions can disrupt sleep in various ways:</p>
      
      <ul>
        <li>Anxiety can cause racing thoughts that make it difficult to fall asleep</li>
        <li>Depression can lead to early morning awakening or oversleeping</li>
        <li>PTSD may cause nightmares and sleep avoidance</li>
        <li>Stress can trigger insomnia</li>
      </ul>
      
      <h2>Breaking the Cycle</h2>
      
      <p>Improving sleep can help break this cycle and improve mental health. Here are some strategies:</p>
      
      <h3>Establish a Consistent Sleep Schedule</h3>
      
      <p>Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.</p>
      
      <h3>Create a Relaxing Bedtime Routine</h3>
      
      <p>Engage in calming activities before bed, such as reading, taking a warm bath, or practicing meditation. Avoid screens at least an hour before bedtime, as the blue light can interfere with sleep.</p>
      
      <h3>Optimize Your Sleep Environment</h3>
      
      <p>Make your bedroom conducive to sleep: dark, quiet, and cool. Consider using earplugs, an eye mask, or a white noise machine if needed.</p>
      
      <h3>Mind Your Daytime Habits</h3>
      
      <p>Regular exercise, exposure to natural light during the day, and limiting caffeine and alcohol can all improve sleep quality.</p>
      
      <h3>Try Sleep Meditations</h3>
      
      <p>Guided sleep meditations can help calm your mind and prepare your body for sleep. Calm's Sleep Stories and sleep meditations are designed specifically for this purpose.</p>
      
      <h2>When to Seek Help</h2>
      
      <p>If you've tried improving your sleep habits but still struggle with sleep or mental health issues, consider speaking with a healthcare provider. They can help determine if you have a sleep disorder or mental health condition that requires treatment.</p>
      
      <p>Remember, investing in better sleep is investing in your mental health, and vice versa. Small changes can make a big difference in how you feel both day and night.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    category: "Sleep",
    date: "April 15, 2025",
    readTime: "5 min read",
    author: {
      name: "Dr. Emma Thompson",
      title: "Sleep Specialist",
      image: "/placeholder.svg?height=100&width=100",
    },
    relatedPosts: [
      {
        id: 5,
        title: "Creating a bedtime routine for better sleep",
        image: "/placeholder.svg?height=400&width=600",
        category: "Sleep",
      },
      {
        id: 9,
        title: "How nature sounds improve sleep quality",
        image: "/placeholder.svg?height=400&width=600",
        category: "Sleep",
      },
      {
        id: 3,
        title: "How to manage stress and anxiety naturally",
        image: "/placeholder.svg?height=400&width=600",
        category: "Stress & Anxiety",
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/blog" className="inline-flex items-center text-primary font-medium hover:underline mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
            <Badge className="mb-4">{blogPost.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">{blogPost.title}</h1>
            <div className="flex items-center">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image src="/images/author-profile.png" alt={blogPost.author.name} fill className="object-cover" />
              </div>
              <div>
                <p className="font-medium">{blogPost.author.name}</p>
                <p className="text-sm text-gray-500">{blogPost.author.title}</p>
              </div>
              <div className="ml-auto text-sm text-gray-500">
                <span>{blogPost.date}</span>
                <span className="mx-2">•</span>
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image src="/images/blog-featured.png" alt={blogPost.title} fill className="object-cover" />
          </div>
        </div>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: blogPost.content }}></div>

            {/* Share */}
            <div className="mt-12 pt-6 border-t">
              <p className="font-medium mb-3">Share this article</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Twitter
                </Button>
                <Button variant="outline" size="sm">
                  LinkedIn
                </Button>
                <Button variant="outline" size="sm">
                  Copy Link
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {blogPost.relatedPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group">
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
                    <div className="relative aspect-[16/9]">
                      <Image src={`/images/blog-${post.id}.png`} alt={post.title} fill className="object-cover" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-gray-800 hover:bg-white">{post.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to improve your sleep?</h2>
            <p className="text-gray-700 mb-8">
              Try Calm's sleep meditations, sleep stories, and relaxing music to help you get better rest.
            </p>
            <Button size="lg">Try Calm for Free</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
