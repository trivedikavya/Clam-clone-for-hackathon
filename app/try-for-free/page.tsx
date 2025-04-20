import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TryForFreePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-sm">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Start your free trial</h2>
            <p className="mt-2 text-center text-sm text-gray-600">Experience Calm Premium for 7 days, free</p>
          </div>

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email">Email</TabsTrigger>
              <TabsTrigger value="phone">Phone</TabsTrigger>
            </TabsList>
            <TabsContent value="email" className="space-y-4 pt-4">
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Create a password" />
              </div>
              <Button className="w-full">Continue</Button>
            </TabsContent>
            <TabsContent value="phone" className="space-y-4 pt-4">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
              <Button className="w-full">Send Code</Button>
            </TabsContent>
          </Tabs>

          <div className="text-xs text-center text-gray-500 mt-4">
            By continuing, you agree to our{" "}
            <Link href="/terms" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </div>

          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-primary hover:text-primary/80">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
