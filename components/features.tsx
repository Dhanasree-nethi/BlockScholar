"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, CheckCircle, Coins, Zap } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Immutable Ledger",
    description:
      "All research papers and verification records are stored immutably on the blockchain, ensuring permanent attribution and transparency.",
  },
  {
    icon: CheckCircle,
    title: "Peer Review",
    description:
      "Decentralized peer review system where reviewers are rewarded for their contributions to the research community.",
  },
  {
    icon: Coins,
    title: "NFT Licensing",
    description:
      "Mint your research as NFTs with flexible licensing terms - free, paid, or fractional ownership models.",
  },
  {
    icon: Zap,
    title: "Funding Pools",
    description:
      "Transparent funding mechanisms where researchers can propose projects and receive direct support from the community.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            BlockScholar combines cutting-edge blockchain technology with academic rigor
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="glass border-white/20 dark:border-white/10 hover:border-primary/50 transition"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
