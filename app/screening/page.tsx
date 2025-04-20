import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ScreeningPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-purple-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Mental health screening tools to help you understand your wellbeing
                </h1>
                <p className="text-gray-700 mb-8">
                  Our evidence-based screening tools can help you better understand your mental health and identify
                  areas where you might benefit from support. These assessments are not diagnostic but can guide your
                  wellness journey.
                </p>
                <Button size="lg" className="rounded-full">
                  Take a free assessment
                </Button>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/screening-hero.png"
                  alt="Person taking a mental health assessment"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Available Assessments */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">Available Assessments</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Anxiety Screening",
                  description: "Assess your anxiety levels with this validated screening tool.",
                  time: "5 minutes",
                  questions: 7,
                },
                {
                  title: "Depression Screening",
                  description: "Evaluate symptoms of depression with this evidence-based assessment.",
                  time: "5 minutes",
                  questions: 9,
                },
                {
                  title: "Sleep Quality Assessment",
                  description: "Measure the quality of your sleep and identify potential issues.",
                  time: "3 minutes",
                  questions: 5,
                },
                {
                  title: "Stress Level Check",
                  description: "Gauge your current stress levels and coping mechanisms.",
                  time: "4 minutes",
                  questions: 6,
                },
                {
                  title: "Mindfulness Assessment",
                  description: "Evaluate your present-moment awareness and mindfulness skills.",
                  time: "6 minutes",
                  questions: 10,
                },
                {
                  title: "Work-Life Balance",
                  description: "Assess how well you're balancing your professional and personal life.",
                  time: "5 minutes",
                  questions: 8,
                },
              ].map((assessment, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-purple-50">
                    <CardTitle>{assessment.title}</CardTitle>
                    <CardDescription>{assessment.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{assessment.time}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{assessment.questions} questions</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Take Assessment</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  title: "Take an assessment",
                  description: "Complete one of our evidence-based screening tools.",
                  icon: "📝",
                },
                {
                  title: "Get your results",
                  description: "Receive immediate feedback on your mental wellbeing.",
                  icon: "📊",
                },
                {
                  title: "Review recommendations",
                  description: "Explore personalized content based on your results.",
                  icon: "🧠",
                },
                {
                  title: "Track your progress",
                  description: "Retake assessments over time to monitor your improvement.",
                  icon: "📈",
                },
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Notice */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">Your Privacy Matters</h2>
              <p className="text-gray-700 mb-4">
                All assessment results are private and confidential. Your data is encrypted and never shared with third
                parties without your explicit consent.
              </p>
              <p className="text-gray-700 mb-4">
                These screenings are not diagnostic tools and do not replace professional medical advice. If you're
                experiencing severe symptoms, please consult a healthcare provider.
              </p>
              <div className="flex justify-end">
                <Link href="/privacy" className="text-primary font-medium hover:underline">
                  Learn more about our privacy policy
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Trial */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-8">Start your free trial of Calm Premium.</h2>
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium">Yearly</span>
                <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">
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
