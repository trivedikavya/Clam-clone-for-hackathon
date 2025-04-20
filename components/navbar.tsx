"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-24">
              <span className="text-2xl font-bold text-blue-600">Calm</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/sleep" className="text-gray-700 hover:text-primary transition-colors">
              Sleep
            </Link>
            <Link href="/stress-anxiety" className="text-gray-700 hover:text-primary transition-colors">
              Stress & Anxiety
            </Link>
            <Link href="/mindfulness" className="text-gray-700 hover:text-primary transition-colors">
              Mindfulness
            </Link>
            <Link href="/screening" className="text-gray-700 hover:text-primary transition-colors">
              Screening
            </Link>
            <Link href="/health" className="text-gray-700 hover:text-primary transition-colors">
              Calm Health
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Log In</Button>
            </Link>
            <Link href="/try-for-free">
              <Button>Try Calm for Free</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              <Link href="/sleep" className="block py-2 text-gray-700 hover:text-primary">
                Sleep
              </Link>
              <Link href="/stress-anxiety" className="block py-2 text-gray-700 hover:text-primary">
                Stress & Anxiety
              </Link>
              <Link href="/mindfulness" className="block py-2 text-gray-700 hover:text-primary">
                Mindfulness
              </Link>
              <Link href="/screening" className="block py-2 text-gray-700 hover:text-primary">
                Screening
              </Link>
              <Link href="/health" className="block py-2 text-gray-700 hover:text-primary">
                Calm Health
              </Link>
              <div className="pt-4 space-y-3">
                <Link href="/login" className="block">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link href="/try-for-free" className="block">
                  <Button className="w-full">Try Calm for Free</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
