"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function ContentCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const contentItems = [
    {
      id: "1",
      title: "Daily Calm",
      image: "/placeholder.svg?height=400&width=300",
      category: "Meditation",
    },
    {
      id: "2",
      title: "Sleep Stories",
      image: "/placeholder.svg?height=400&width=300",
      category: "Sleep",
    },
    {
      id: "3",
      title: "Anxiety Release",
      image: "/placeholder.svg?height=400&width=300",
      category: "Anxiety",
    },
    {
      id: "4",
      title: "Body Scan",
      image: "/placeholder.svg?height=400&width=300",
      category: "Meditation",
    },
    {
      id: "5",
      title: "Breathe",
      image: "/placeholder.svg?height=400&width=300",
      category: "Stress",
    },
    {
      id: "6",
      title: "Focus",
      image: "/placeholder.svg?height=400&width=300",
      category: "Productivity",
    },
    {
      id: "7",
      title: "Gratitude",
      image: "/placeholder.svg?height=400&width=300",
      category: "Mindfulness",
    },
    {
      id: "8",
      title: "Nature Melodies",
      image: "/placeholder.svg?height=400&width=300",
      category: "Soundscapes",
    },
  ]

  const visibleItems = isMobile ? 2 : 5
  const maxIndex = contentItems.length - visibleItems

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  useEffect(() => {
    if (carouselRef.current) {
      const scrollAmount = currentIndex * (carouselRef.current.scrollWidth / contentItems.length)
      carouselRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentIndex, contentItems.length])

  return (
    <section className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Popular Content</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentIndex >= maxIndex}
              className="rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div ref={carouselRef} className="flex gap-4 overflow-x-hidden">
            {contentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex-shrink-0 w-[calc(50%-8px)] sm:w-[calc(33.333%-12px)] md:w-[calc(25%-12px)] lg:w-[calc(20%-16px)]"
              >
                <Link href={`/exercise/${item.id}`} className="block group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 bg-white shadow-sm">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white font-medium">{item.category}</span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
