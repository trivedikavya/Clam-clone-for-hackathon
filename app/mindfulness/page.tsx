import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function MindfulnessPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-emerald-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Develop mindfulness skills to be more present and focused each day
                </h1>
                <p className="text-gray-700 mb-8">
                  Our mindfulness content helps you cultivate awareness, reduce stress, and live more fully in the
                  present moment. From beginner to advanced practices, we have meditations for every level.
                </p>
                <Button size="lg" className="rounded-full">
                  Start mindfulness practice
                </Button>
                <div className="flex justify-center mt-8">
                  <ChevronDown className="h-8 w-8 text-gray-500 animate-bounce" />
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/mindfulness-hero.png"
                  alt="Person practicing mindfulness outdoors"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Daily Calm */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                <Image src="/images/mindfulness-daily.png" alt="Daily Calm meditation" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button size="icon" className="rounded-full h-16 w-16 bg-white/90 hover:bg-white">
                    <Play className="h-8 w-8 text-primary" />
                  </Button>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Daily Calm</h2>
                <p className="text-gray-700 mb-6">
                  Start your day with our Daily Calm meditation. Each 10-minute session focuses on a different
                  mindfulness theme to help you build a consistent practice and bring more awareness to your day.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>10 minutes daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <span>New meditation every day</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Perfect for beginners and experienced meditators</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Button>Try Daily Calm</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mindfulness Programs */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Mindfulness Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "21 Days of Calm",
                  description: "Build a daily meditation habit with this three-week program.",
                  image: "/images/meditation-1.png",
                  level: "Beginner",
                },
                {
                  title: "Mindful Eating",
                  description: "Develop a healthier relationship with food through mindfulness.",
                  image: "/images/meditation-2.png",
                  level: "Intermediate",
                },
                {
                  title: "Mindfulness at Work",
                  description: "Bring focus and calm to your workday with these practices.",
                  image: "/images/meditation-3.png",
                  level: "All Levels",
                },
              ].map((program, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">{program.level}</Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600">{program.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Benefits of Mindfulness</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Reduced Stress",
                  description: "Regular mindfulness practice can lower cortisol levels and reduce stress.",
                  icon: "🧠",
                },
                {
                  title: "Improved Focus",
                  description: "Train your attention to stay present and focused on tasks.",
                  icon: "🎯",
                },
                {
                  title: "Better Sleep",
                  description: "Calm a racing mind and prepare for restful sleep.",
                  icon: "💤",
                },
                {
                  title: "Emotional Balance",
                  description: "Develop awareness of emotions without being overwhelmed by them.",
                  icon: "⚖️",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-emerald-50 p-6 rounded-xl text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">How mindfulness has changed lives</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-emerald-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "I've been using Calm for mindfulness meditation for over a year now. It's helped me stay centered
                  during a very challenging time in my life."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "The Daily Calm has become an essential part of my morning routine. It sets a positive tone for my
                  entire day."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-emerald-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "As someone with ADHD, mindfulness has been transformative. It helps me notice when my attention
                  wanders and gently bring it back."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Trial */}
        <section className="py-16 bg-white">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Start your free trial of Calm Premium.</h2>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Yearly</span>
                <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  7 Days Free
                </span>
              </div>
              <div className="flex items-baseline mb-1">
                <span className="text-3xl font-bold">$69.99</span>
                <span className="text-gray-500 ml-2">/ year</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">$5.83 / month, billed annually</p>
              <p className="text-xs text-gray-500 mb-4">
                After free trial ends, you'll be charged $69.99 annually unless you cancel before trial ends.
              </p>
              <Button className="w-full">Continue</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
