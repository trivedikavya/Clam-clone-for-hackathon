import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function StressAnxietyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-rose-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Reduce stress and anxiety with guided meditations and breathing exercises
                </h1>
                <p className="text-gray-700 mb-8">
                  Our stress and anxiety content is designed to help you find calm in moments of stress and develop
                  long-term resilience. From quick breathing exercises to in-depth anxiety programs, we have tools for
                  every situation.
                </p>
                <Button size="lg" className="rounded-full">
                  Reduce anxiety for free
                </Button>
                <div className="flex justify-center mt-8">
                  <ChevronDown className="h-8 w-8 text-gray-500 animate-bounce" />
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/stress-hero.png"
                  alt="Person meditating peacefully"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Featured Anxiety Programs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "7 Days of Calm",
                  description: "A week-long introduction to mindfulness meditation.",
                  image: "/images/anxiety-1.png",
                  instructor: "Tamara Levitt",
                },
                {
                  title: "Anxiety Release",
                  description: "Learn techniques to manage anxiety in the moment.",
                  image: "/images/anxiety-2.png",
                  instructor: "Jay Shetty",
                },
                {
                  title: "Emergency Calm",
                  description: "Quick exercises for moments of high stress or panic.",
                  image: "/images/anxiety-3.png",
                  instructor: "Dr. Jud Brewer",
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
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="icon" className="rounded-full h-12 w-12 bg-white/90 hover:bg-white">
                        <Play className="h-6 w-6 text-primary" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                    <p className="text-gray-600 mb-4">{program.description}</p>
                    <p className="text-sm text-gray-500">With {program.instructor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Breathing Exercises */}
        <section className="py-16 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">Breathing Exercises for Immediate Relief</h2>
                <p className="text-gray-700 mb-6">
                  Our guided breathing exercises can help you find calm in moments of stress or anxiety. These simple
                  techniques can be done anywhere, anytime.
                </p>
                <div className="space-y-4">
                  {["4-7-8 Breathing", "Box Breathing", "Diaphragmatic Breathing", "Alternate Nostril Breathing"].map(
                    (exercise, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-rose-200 flex items-center justify-center text-rose-800 font-medium">
                          {index + 1}
                        </div>
                        <span className="font-medium">{exercise}</span>
                      </div>
                    ),
                  )}
                </div>
                <div className="mt-8">
                  <Button>Try a breathing exercise</Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/stress-breathing.png"
                  alt="Breathing exercise visualization"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">How Calm has helped with anxiety</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-rose-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "I've struggled with anxiety for years. Calm has given me tools to manage it in a way that medication
                  alone never could."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-rose-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "The Emergency Calm series has been a lifesaver during panic attacks. I can feel my heart rate slow
                  down within minutes."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-rose-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "As someone with social anxiety, the daily meditations have helped me feel more comfortable in group
                  settings."
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
        <section className="py-16 bg-rose-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Start your free trial of Calm Premium.</h2>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Yearly</span>
                <span className="bg-rose-100 text-rose-800 text-xs font-medium px-2.5 py-0.5 rounded">7 Days Free</span>
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
