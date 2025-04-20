import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Play } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"

export default function SleepPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-indigo-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Sleep Stories, sleep meditations, music and soundscapes for your dreamiest sleep yet
                </h1>
                <p className="text-gray-700 mb-8">
                  Our library of sleep content is unmatched. Fall asleep easily and stay asleep with our Sleep Stories,
                  sleep meditations, bedtime music, sleep soundscapes with ASMR and binaural beats. From Harry Styles to
                  Matthew McConaughey, we have the perfect voice to help you drift away.
                </p>
                <Button size="lg" className="rounded-full">
                  Sleep better for free
                </Button>
                <div className="flex justify-center mt-8">
                  <ChevronDown className="h-8 w-8 text-gray-500 animate-bounce" />
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/sleep-hero.png"
                  alt="Mother and child sleeping peacefully"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Meet your instructor: Chibo Okereke</h2>
            <div className="relative aspect-video max-w-3xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image src="/images/sleep-instructor.png" alt="Chibo Okereke instructor" fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="icon" className="rounded-full h-16 w-16 bg-white/90 hover:bg-white">
                  <Play className="h-8 w-8 text-primary" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-12">The easiest way to get deep sleep.</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                Sleep Stories
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                Sleep Meditations
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                Music
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                Soundscapes
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                Sleep Training
              </Badge>
              <Badge variant="outline" className="text-sm py-2 px-4 bg-indigo-100 hover:bg-indigo-200">
                For Kids
              </Badge>
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Bedtime stories for grownups</h3>
                <p className="text-gray-700 mb-6">
                  Our Sleep Stories are bedtime stories for adults. They use sound and visualization to create a calming
                  experience that will help you relax and drift off to sleep.
                </p>
                <Link href="/exercise/sleep-story-1" className="text-primary font-medium hover:underline">
                  View all
                </Link>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm text-gray-500">Share with Me:</span>
                  <div className="flex gap-1">
                    <Badge variant="outline" className="text-xs">
                      Anxiety
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Insomnia
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sleep-mobile.png"
                  alt="Mobile app showing sleep story"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content Gallery */}
        <section className="py-16 bg-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Just press play and drift away.</h2>
            <p className="mb-8 max-w-2xl">
              Our 100+ Sleep Stories, sleep meditations, and calming music all guide you to a good night's sleep.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
              {[...Array(10)].map((_, i) => (
                <Link key={i} href={`/exercise/sleep-${i + 1}`} className="block group">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src={`/images/sleep-${(i % 3) + 1}.png`}
                      alt={`Sleep content ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                View more sleep content
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Join the millions of sound sleepers worldwide.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-indigo-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "My wife and I have listened to Calm for well over 2 years. Current stories have easy it is to fall
                  asleep listening to this app."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-indigo-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "I have a very busy brain and can find it hard to unwind. Now a daily practice is actually so helpful
                  and healing for me."
                </blockquote>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="bg-indigo-800 text-white p-6 rounded-xl">
                <blockquote className="text-lg mb-4">
                  "Calm has been a lifesaver for my insomnia. The sleep stories are so effective that I rarely hear the
                  end of them."
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
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded">
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

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                "How much sleep do I need?",
                "How do I fall asleep faster?",
                "What is ASMR?",
                "Why can't I sleep?",
                "Why do I sleep so much?",
                "How can I stop feeling tired?",
              ].map((question, index) => (
                <div key={index} className="border-b pb-4">
                  <button className="flex justify-between items-center w-full text-left font-medium">
                    {question}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
