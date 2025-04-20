"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ChevronRight } from "lucide-react"

export default function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const blogPosts = [
    {
      id: 1,
      title: "The relationship between better sleep and mental health",
      excerpt: "Discover how quality sleep can improve your mental wellbeing.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Sleep",
    },
    {
      id: 2,
      title: "5-minute meditation for busy professionals",
      excerpt: "Learn how to incorporate mindfulness into your hectic schedule.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Mindfulness",
    },
    {
      id: 3,
      title: "How to manage stress and anxiety naturally",
      excerpt: "Effective techniques to reduce stress without medication.",
      image: "/placeholder.svg?height=400&width=600",
      category: "Stress & Anxiety",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold"
          >
            Check out our blog for more meditation, sleep,
            <br />
            stress, and mental health resources.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog" className="flex items-center text-primary font-medium hover:underline">
              See all blog posts
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="block group">
                <div className="relative aspect-[3/2] rounded-lg overflow-hidden mb-4">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-gray-800 text-xs font-medium px-2.5 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
