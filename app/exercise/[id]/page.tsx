import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Play, SkipBack, SkipForward, Volume2 } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

// This is a client component that would handle the audio player functionality
// For the server component, we'd need to move the interactive elements to a client component
export default function ExercisePage({ params }: { params: { id: string } }) {
  // Sample exercise data - in a real app, this would come from an API
  const exercises = [
    {
      id: "1",
      title: "Daily Calm: Mindful Breathing",
      description: "A 10-minute guided meditation to help you focus on your breath and find calm.",
      duration: "10 min",
      instructor: "Tamara Levitt",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "2",
      title: "Sleep Story: Blue Gold",
      description: "A soothing bedtime story to help you drift off to sleep.",
      duration: "25 min",
      instructor: "Stephen Fry",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "3",
      title: "Anxiety Release: Let Go",
      description: "Release tension and anxiety with this guided meditation.",
      duration: "15 min",
      instructor: "Jay Shetty",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "4",
      title: "Body Scan for Sleep",
      description: "A relaxing body scan meditation to prepare for sleep.",
      duration: "20 min",
      instructor: "Tamara Levitt",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  const exercise = exercises.find((ex) => ex.id === params.id) || exercises[0]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-64 md:h-80">
              <Image
                src={exercise.image || "/placeholder.svg"}
                alt={exercise.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{exercise.title}</h1>
              <p className="text-gray-600 mb-4">{exercise.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                <span>{exercise.duration}</span>
                <span>•</span>
                <span>Narrated by {exercise.instructor}</span>
              </div>

              <div className="space-y-6">
                <div className="flex justify-center items-center gap-4">
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <SkipBack size={18} />
                  </Button>
                  <Button size="icon" className="rounded-full h-14 w-14">
                    <Play size={24} />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full h-10 w-10">
                    <SkipForward size={18} />
                  </Button>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>0:00</span>
                    <span>{exercise.duration}</span>
                  </div>
                  <Slider defaultValue={[0]} max={100} step={1} />
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 size={18} className="text-gray-500" />
                  <Slider defaultValue={[80]} max={100} step={1} className="w-24" />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">More like this</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {exercises
                .filter((ex) => ex.id !== params.id)
                .slice(0, 3)
                .map((ex) => (
                  <div key={ex.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="relative h-40">
                      <Image src={ex.image || "/placeholder.svg"} alt={ex.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{ex.title}</h3>
                      <p className="text-sm text-gray-500">{ex.duration}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
