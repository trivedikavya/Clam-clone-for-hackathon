"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonialRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      quote:
        "When I cannot fall asleep, I turn on this app and am usually asleep within 10 minutes. It's been a lifesaver for my insomnia.",
      author: "Sarah J.",
      stars: 5,
    },
    {
      id: 2,
      quote:
        "I have a very busy brain and use Calm to help me relax before bed. It's been a game changer for my sleep quality.",
      author: "Michael D.",
      stars: 5,
    },
    {
      id: 3,
      quote:
        "Calm has helped me manage my anxiety in a way nothing else has. The guided meditations are perfect for beginners.",
      author: "Emily R.",
      stars: 5,
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Over 2 million 5-star reviews.
        </motion.h2>

        <div className="relative">
          <div className="flex justify-center">
            <div ref={testimonialRef} className="w-full max-w-4xl overflow-hidden">
              <div className="relative h-[300px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentIndex].id}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="bg-blue-100 rounded-xl p-8 h-full flex flex-col justify-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonials[currentIndex].stars)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-center font-medium mb-6">
                        &ldquo;{testimonials[currentIndex].quote}&rdquo;
                      </blockquote>
                      <p className="text-center text-gray-700">&mdash; {testimonials[currentIndex].author}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-primary" : "bg-gray-300"}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
