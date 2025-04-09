import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Users, Compass } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-purple-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500">
                    Find Your Friends. Find The Fun.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Never wonder where to go on a Friday night again. See where your friends are hanging out and
                    discover the hottest spots in real-time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-purple-600 to-teal-500 hover:from-purple-700 hover:to-teal-600"
                    >
                      Get Started
                    </Button>
                  </Link>
                  <Link href="/explore">
                    <Button size="lg" variant="outline">
                      Explore Map
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-[400px] aspect-square overflow-hidden rounded-lg shadow-xl">
                  <Image
                    src="/placeholder.svg?height=800&width=800"
                    alt="NightOut App Preview"
                    width={800}
                    height={800}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-500">
                  How It Works
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  NightOut makes it easy to find where the action is happening in real-time.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Connect with Friends</h3>
                  <p className="text-gray-500">
                    Create your profile and connect with friends to see where they're hanging out.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100">
                  <MapPin className="h-8 w-8 text-teal-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Share Your Location</h3>
                  <p className="text-gray-500">
                    Let friends know where you are when you're out and about at your favorite spots.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                  <Compass className="h-8 w-8 text-purple-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Discover Hot Spots</h3>
                  <p className="text-gray-500">Find popular venues and see where crowds are gathering in real-time.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center md:flex-row md:gap-6 md:text-left">
            <p className="text-sm text-gray-500">© 2025 NightOut. All rights reserved.</p>
            <nav className="flex gap-4 md:gap-6">
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
