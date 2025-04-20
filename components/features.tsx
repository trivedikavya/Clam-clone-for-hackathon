"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Moon, Heart, Smile } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Heart className="h-10 w-10 text-rose-500" />,
      title: "Stress less",
      description: "Reduce anxiety and find your calm with guided meditations and breathing exercises.",
      link: "/stress-anxiety",
    },
    {
      icon: <Moon className="h-10 w-10 text-indigo-500" />,
      title: "Sleep more",
      description: "Fall asleep faster and wake up refreshed with sleep stories and soundscapes.",
      link: "/sleep",
    },
    {
      icon: <Smile className="h-10 w-10 text-emerald-500" />,
      title: "Live mindfully",
      description: "Develop mindfulness skills to help you be more present and focused each day.",
      link: "/mindfulness",
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          We&apos;re here to help you feel better.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-50">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <Link href={feature.link} className="text-primary font-medium hover:underline">
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
