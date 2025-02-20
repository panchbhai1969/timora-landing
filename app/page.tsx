import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Type, Volume2, Globe, BookOpen, Play } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
        <img
              alt="CutStudio"
              src="/FilmCutLogo.png"
              className="h-14 w-auto overflow-hidden"
            />
          <span className="ml-2 text-lg font-bold">CutStudio ✨</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Videos with AI 🎬🤖
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    One-click AI-powered editing, subtitles, audio changes, and more. Create stunning videos in minutes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="https://play.cutstudio.io">
                    <Button size="lg">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Hero Image"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features 💪</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <FeatureCard
                icon={<Zap className="h-10 w-10" />}
                title="AI-Powered Zoom 🔍"
                description="Automatically zoom and focus on the most important parts of your video."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
              <FeatureCard
                icon={<Type className="h-10 w-10" />}
                title="Smart Subtitles 🗨️"
                description="Generate accurate subtitles in multiple languages with a single click."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
              <FeatureCard
                icon={<Volume2 className="h-10 w-10" />}
                title="Audio Enhancement 🎵"
                description="Improve audio quality and change voices with AI technology."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10" />}
                title="Multi-Language Support 🌍"
                description="Edit and create content for a global audience with ease."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
              <FeatureCard
                icon={<BookOpen className="h-10 w-10" />}
                title="Tutorial Generation 📚"
                description="Automatically create step-by-step tutorials from your videos."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
              <FeatureCard
                icon={<ArrowRight className="h-10 w-10" />}
                title="One-Click Editing ⚡"
                description="Streamline your workflow with intelligent, one-click editing options."
                gifSrc="/placeholder.svg?height=250&width=400"
              />
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works 🛠️</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StepCard
                number={1}
                title="Upload Your Video 📤"
                description="Simply drag and drop your video file into our app."
              />
              <StepCard
                number={2}
                title="Choose AI Features 🤖"
                description="Select the AI-powered features you want to apply to your video."
              />
              <StepCard
                number={3}
                title="Download & Share 🚀"
                description="Get your enhanced video in minutes and share it with the world."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">See CutStudio in Action 🎥</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Watch how easy it is to transform your videos with our AI-powered tools.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">
                    Try It Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full aspect-video">
                  <Image
                    alt="Video Thumbnail"
                    className="rounded-xl object-cover"
                    fill
                    src="/placeholder.svg?height=310&width=550"
                  />
                  <Button size="icon" variant="secondary" className="absolute inset-0 m-auto h-12 w-12 rounded-full">
                    <Play className="h-4 w-4" />
                    <span className="sr-only">Play video</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Videos? 🚀</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of content creators who are already using CutStudio to create stunning videos.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">Get Started for Free</Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 CutStudio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gifSrc: string;
}

function FeatureCard({ icon, title, description, gifSrc }: FeatureCardProps) {
  return (
    <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start gap-6">
      <div className="flex-1 order-2 lg:order-1">
        <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary inline-block">{icon}</div>
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </div>
      <div className="flex-1 order-1 lg:order-2">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden">
          <Image src={gifSrc || "/placeholder.svg"} alt={`${title} demo`} fill className="object-cover" />
        </div>
      </div>
    </div>
  )
}

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-xl font-bold">
        {number}
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  )
}

