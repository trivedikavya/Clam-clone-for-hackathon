import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

export default function CalmHealthPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-cyan-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <Badge className="mb-4 bg-cyan-100 text-cyan-800 hover:bg-cyan-200">Introducing</Badge>
                <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                  Calm Health: Clinical-grade mental healthcare
                </h1>
                <p className="text-gray-700 mb-8">
                  Calm Health offers evidence-based programs designed by clinical experts to support specific mental
                  health conditions. Available through healthcare providers and employers.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="rounded-full">
                    Learn more
                  </Button>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                    <Link href="#for-providers" className="text-primary font-medium hover:underline">
                      For Healthcare Providers
                    </Link>
                    <Link href="#for-employers" className="text-primary font-medium hover:underline">
                      For Employers
                    </Link>
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/health-hero.png"
                  alt="Doctor discussing Calm Health with patient"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Conditions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-4">Specialized Programs for Mental Health Conditions</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              Our clinical programs are designed to address specific mental health needs with evidence-based approaches.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Anxiety",
                  description:
                    "Cognitive behavioral therapy (CBT) techniques to help manage anxiety symptoms and build resilience.",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Depression",
                  description:
                    "Evidence-based approaches to improve mood, increase activity, and develop positive thinking patterns.",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Insomnia",
                  description:
                    "Clinically validated sleep program based on cognitive behavioral therapy for insomnia (CBT-I).",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Stress Management",
                  description: "Techniques to reduce stress, improve coping skills, and enhance overall wellbeing.",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Chronic Pain",
                  description: "Mind-body approaches to help manage chronic pain and improve quality of life.",
                  image: "/placeholder.svg?height=400&width=300",
                },
                {
                  title: "Pregnancy & Postpartum",
                  description: "Support for mental wellbeing during pregnancy and the postpartum period.",
                  image: "/placeholder.svg?height=400&width=300",
                },
              ].map((condition, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={condition.image || "/placeholder.svg"}
                      alt={condition.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{condition.title}</h3>
                    <p className="text-gray-600">{condition.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Healthcare Providers */}
        <section id="for-providers" className="py-16 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-6">For Healthcare Providers</h2>
                <p className="text-gray-700 mb-6">
                  Calm Health can be prescribed as a digital therapeutic to support your patients' mental health
                  treatment plans. Our programs are designed to complement traditional care.
                </p>
                <div className="space-y-4">
                  {[
                    "Evidence-based clinical programs",
                    "Patient progress tracking",
                    "Easy integration with EHR systems",
                    "HIPAA compliant",
                    "Covered by many insurance plans",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button>Request information</Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Image
                  src="/images/health-provider.png"
                  alt="Healthcare provider using Calm Health"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* For Employers */}
        <section id="for-employers" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="hidden md:block order-2 md:order-1">
                <Image
                  src="/images/health-employer.png"
                  alt="Employees using Calm Health"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-bold mb-6">For Employers</h2>
                <p className="text-gray-700 mb-6">
                  Support your employees' mental health with Calm Health. Our programs can help reduce healthcare costs,
                  decrease absenteeism, and improve productivity.
                </p>
                <div className="space-y-4">
                  {[
                    "Comprehensive mental health support",
                    "Easy implementation and onboarding",
                    "Detailed utilization reporting",
                    "Customizable to your organization's needs",
                    "Potential healthcare cost savings",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-cyan-600 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button>Schedule a demo</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-cyan-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-12">What Healthcare Professionals Are Saying</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <blockquote className="text-lg mb-4">
                  "Calm Health has been an excellent addition to my treatment plans. Patients appreciate the
                  accessibility and quality of the programs."
                </blockquote>
                <p className="font-medium">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-500">Psychiatrist, New York</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <blockquote className="text-lg mb-4">
                  "The insomnia program has shown remarkable results with my patients. It's a valuable tool in my
                  clinical practice."
                </blockquote>
                <p className="font-medium">Dr. Michael Chen</p>
                <p className="text-sm text-gray-500">Sleep Specialist, Chicago</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <blockquote className="text-lg mb-4">
                  "As a therapist, I appreciate having a reliable digital tool to recommend between sessions. It
                  reinforces the work we do in therapy."
                </blockquote>
                <p className="font-medium">Lisa Rodriguez, LMFT</p>
                <p className="text-sm text-gray-500">Therapist, Los Angeles</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-6">Ready to learn more about Calm Health?</h2>
            <p className="text-gray-700 mb-8">
              Contact our team to discuss how Calm Health can support your patients or employees.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Contact us</Button>
              <Button size="lg" variant="outline">
                Download brochure
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
