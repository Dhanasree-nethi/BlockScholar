"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const router = useRouter()

  const handleExploreResearch = () => {
    router.push("/dashboard")
  }

  const handlePublishPaper = () => {
    router.push("/dashboard/publish")
  }

  const handleFundProject = () => {
    router.push("/dashboard/funding")
  }

  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Tagline Badge */}
          <div className="inline-block">
            <div className="glass px-4 py-2 rounded-full text-sm font-medium">
              <span className="gradient-text">✨ The Future of Academic Research</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block">Decentralized Research.</span>
            <span className="gradient-text">Transparent Verification.</span>
            <span className="block">Fair Rewards.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            BlockScholar empowers researchers with blockchain-powered publishing, immutable verification, and
            transparent funding through NFTs and smart contracts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-base" onClick={handleExploreResearch}>
              Explore Research
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={handlePublishPaper}>
              Publish Paper
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={handleFundProject}>
              Fund a Project
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-md mx-auto">
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold">2.5K+</div>
              <div className="text-xs text-muted-foreground">Papers Published</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold">1.2K+</div>
              <div className="text-xs text-muted-foreground">Researchers</div>
            </div>
            <div className="glass p-4 rounded-lg">
              <div className="text-2xl font-bold">$5.8M</div>
              <div className="text-xs text-muted-foreground">Funded</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
