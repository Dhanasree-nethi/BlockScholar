"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, CheckCircle2, Award } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Publish",
    description:
      "Upload your research paper with metadata. Choose your licensing model and mint as an NFT for permanent attribution.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Verify",
    description:
      "Community peers review your work. Verification is recorded on-chain, building your academic reputation.",
  },
  {
    number: "03",
    icon: Award,
    title: "Earn",
    description:
      "Receive rewards through citations, licensing fees, and community funding. Your contributions are fairly compensated.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to revolutionize your research journey
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                )}

                <Card className="glass border-white/20 dark:border-white/10 h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <span className="text-white font-bold">{step.number}</span>
                      </div>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{step.description}</CardDescription>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
