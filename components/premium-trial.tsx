"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react"

export default function PremiumTrial() {
  const [selectedPlan, setSelectedPlan] = useState("yearly")

  const plans = {
    yearly: {
      price: "$69.99",
      period: "year",
      savings: "Save 58%",
      perMonth: "$5.83/month",
    },
    monthly: {
      price: "$14.99",
      period: "month",
      savings: "",
      perMonth: "$14.99/month",
    },
  }

  const benefits = [
    "100+ guided meditations",
    "Sleep stories narrated by celebrities",
    "Exclusive music tracks for focus & relaxation",
    "New content added weekly",
    "Offline access",
  ]

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-16"
        >
          Start your free trial of
          <br />
          Calm Premium.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Plan Selection */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6">Choose your plan</h3>

            <Tabs defaultValue="yearly" onValueChange={(value) => setSelectedPlan(value as "yearly" | "monthly")}>
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="yearly">Yearly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>

              <TabsContent value="yearly" className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plans.yearly.price}</span>
                  <span className="text-gray-600 ml-2">per {plans.yearly.period}</span>
                  {plans.yearly.savings && (
                    <span className="ml-3 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                      {plans.yearly.savings}
                    </span>
                  )}
                </div>
                <p className="text-gray-500">{plans.yearly.perMonth}</p>
              </TabsContent>

              <TabsContent value="monthly" className="space-y-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plans.monthly.price}</span>
                  <span className="text-gray-600 ml-2">per {plans.monthly.period}</span>
                </div>
                <p className="text-gray-500">{plans.monthly.perMonth}</p>
              </TabsContent>
            </Tabs>

            <div className="mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-sm text-gray-500 mb-4">7-day free trial, cancel anytime. No commitment.</p>
              <Link href="/try-for-free">
                <Button className="w-full">Continue</Button>
              </Link>
            </div>
          </motion.div>

          {/* Email Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-6">Enter your details</h3>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>

              <Button type="submit" className="w-full">
                Start your free trial
              </Button>
            </form>

            <p className="text-xs text-center text-gray-500 mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
