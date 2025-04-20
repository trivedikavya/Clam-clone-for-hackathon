"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, useInView, useAnimation } from "framer-motion"

export default function Hero() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white"></div>
      </div>

      {/* Content */}
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-32 pb-20"
      >
        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 mb-6">
          Calm your mind. Change your life.
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-800 mb-10">
          The #1 app for sleep, meditation and relaxation
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/try-for-free">
            <Button size="lg" className="text-base px-8 py-6">
              Try Calm for Free
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="text-base px-8 py-6">
              Already have an account?
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
