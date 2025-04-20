"use client"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  const faqCategories = [
    {
      id: "general",
      title: "GENERAL",
      questions: [
        {
          id: "what-is-calm",
          question: "What is Calm?",
          answer:
            "Calm is the #1 app for sleep, meditation and relaxation. Our mission is to make the world happier and healthier through the superpower of calm.",
        },
        {
          id: "what-included",
          question: "What's included in a Calm subscription?",
          answer:
            "A Calm subscription gives you access to our entire library of meditations, sleep stories, music tracks, and more. New content is added every week.",
        },
        {
          id: "how-cancel",
          question: "How do I cancel?",
          answer:
            "You can cancel your subscription at any time through your account settings. Your premium access will continue until the end of your billing period.",
        },
      ],
    },
    {
      id: "meditation",
      title: "MEDITATION & MINDFULNESS",
      questions: [
        {
          id: "what-meditation",
          question: "What is meditation?",
          answer:
            "Meditation is a practice where an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.",
        },
        {
          id: "mindfulness",
          question: "What is mindfulness?",
          answer:
            "Mindfulness is the basic human ability to be fully present, aware of where we are and what we're doing, and not overly reactive or overwhelmed by what's going on around us.",
        },
      ],
    },
    {
      id: "stress",
      title: "STRESS & ANXIETY",
      questions: [
        {
          id: "stress-reduce",
          question: "How can Calm reduce stress?",
          answer:
            "Calm offers guided meditations specifically designed to help reduce stress and anxiety. Regular practice can help lower cortisol levels and improve your body's response to stress.",
        },
      ],
    },
    {
      id: "sleep",
      title: "SLEEP",
      questions: [
        {
          id: "sleep-stories",
          question: "What are Sleep Stories?",
          answer:
            "Sleep Stories are soothing tales designed to help you fall into a deep and natural sleep. They're narrated by well-known voices and combine relaxing words, music, and sound effects.",
        },
      ],
    },
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-gray-500 mb-4">{category.title}</h3>

              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">{faq.question}</AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-600">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
