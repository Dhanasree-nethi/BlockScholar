"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Target, Zap } from "lucide-react"

interface FundingProposal {
  id: string
  title: string
  researcher: string
  description: string
  category: string
  fundingGoal: number
  fundingRaised: number
  contributors: number
  daysLeft: number
  image: string
}

const fundingProposals: FundingProposal[] = [
  {
    id: "1",
    title: "AI-Powered Disease Detection System",
    researcher: "Dr. Lisa Park",
    description:
      "Developing an advanced AI system for early detection of rare diseases using medical imaging and machine learning.",
    category: "Medical Science",
    fundingGoal: 50000,
    fundingRaised: 38500,
    contributors: 127,
    daysLeft: 12,
    image: "/medical-ai-research.jpg",
  },
  {
    id: "2",
    title: "Sustainable Materials Research",
    researcher: "Prof. James Wilson",
    description: "Investigating biodegradable polymers for reducing plastic waste in industrial applications.",
    category: "Environmental Science",
    fundingGoal: 35000,
    fundingRaised: 28200,
    contributors: 94,
    daysLeft: 18,
    image: "/sustainable-materials.jpg",
  },
  {
    id: "3",
    title: "Quantum Computing Algorithms",
    researcher: "Dr. Robert Zhang",
    description: "Developing novel quantum algorithms for optimization problems in logistics and finance.",
    category: "Computer Science",
    fundingGoal: 75000,
    fundingRaised: 45300,
    contributors: 156,
    daysLeft: 25,
    image: "/quantum-computing-concept.png",
  },
  {
    id: "4",
    title: "Climate Change Modeling",
    researcher: "Dr. Maria Santos",
    description: "Creating advanced climate models to predict regional weather patterns and extreme events.",
    category: "Environmental Science",
    fundingGoal: 60000,
    fundingRaised: 52100,
    contributors: 203,
    daysLeft: 8,
    image: "/climate-research.jpg",
  },
]

export default function FundingPage() {
  const [selectedProposal, setSelectedProposal] = useState<FundingProposal | null>(null)
  const [contributionAmount, setContributionAmount] = useState("")
  const [showModal, setShowModal] = useState(false)

  const handleContribute = () => {
    if (selectedProposal && contributionAmount) {
      console.log("Contributing:", {
        proposalId: selectedProposal.id,
        amount: contributionAmount,
      })
      alert(`Successfully contributed $${contributionAmount} to "${selectedProposal.title}"!`)
      setShowModal(false)
      setContributionAmount("")
    }
  }

  const getProgressPercentage = (raised: number, goal: number) => {
    return Math.round((raised / goal) * 100)
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Research Funding</h1>
        <p className="text-muted-foreground">Support groundbreaking research projects and earn rewards</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Projects</p>
                <p className="text-2xl font-bold">{fundingProposals.length}</p>
              </div>
              <Target className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Funded</p>
                <p className="text-2xl font-bold">
                  ${(fundingProposals.reduce((sum, p) => sum + p.fundingRaised, 0) / 1000).toFixed(0)}K
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Contributors</p>
                <p className="text-2xl font-bold">{fundingProposals.reduce((sum, p) => sum + p.contributors, 0)}</p>
              </div>
              <Users className="w-8 h-8 text-secondary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Avg. Funded</p>
                <p className="text-2xl font-bold">
                  {Math.round(
                    fundingProposals.reduce((sum, p) => sum + p.fundingRaised, 0) / fundingProposals.length / 1000,
                  )}
                  K
                </p>
              </div>
              <Zap className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Proposals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {fundingProposals.map((proposal) => {
          const progress = getProgressPercentage(proposal.fundingRaised, proposal.fundingGoal)
          return (
            <Card
              key={proposal.id}
              className="glass border-white/20 dark:border-white/10 overflow-hidden hover:border-primary/50 transition cursor-pointer"
              onClick={() => setSelectedProposal(proposal)}
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src={proposal.image || "/placeholder.svg"}
                  alt={proposal.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <CardContent className="pt-6 space-y-4">
                {/* Header */}
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg flex-1">{proposal.title}</h3>
                    <Badge variant="outline" className="ml-2">
                      {proposal.daysLeft}d left
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">by {proposal.researcher}</p>
                  <p className="text-xs text-muted-foreground mt-1">{proposal.category}</p>
                </div>

                {/* Description */}
                <p className="text-sm line-clamp-2">{proposal.description}</p>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">${proposal.fundingRaised.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground">{progress}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent transition-all"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">of ${proposal.fundingGoal.toLocaleString()} goal</p>
                </div>

                {/* Stats */}
                <div className="flex gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">{proposal.contributors} contributors</p>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedProposal(proposal)
                    setShowModal(true)
                  }}
                >
                  Fund Now
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Contribution Modal */}
      {showModal && selectedProposal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="glass border-white/20 dark:border-white/10 w-full max-w-md">
            <CardHeader>
              <CardTitle>Contribute to Research</CardTitle>
              <CardDescription>{selectedProposal.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-medium mb-2">Contribution Amount (USD)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={contributionAmount}
                    onChange={(e) => setContributionAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="flex-1 px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button variant="outline" onClick={() => setContributionAmount("100")}>
                    $100
                  </Button>
                  <Button variant="outline" onClick={() => setContributionAmount("500")}>
                    $500
                  </Button>
                </div>
              </div>

              {/* Info */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-sm space-y-1">
                <p>
                  <span className="font-medium">Funding Goal:</span> ${selectedProposal.fundingGoal.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium">Already Funded:</span> $
                  {selectedProposal.fundingRaised.toLocaleString()}
                </p>
                <p>
                  <span className="font-medium">Remaining:</span> $
                  {(selectedProposal.fundingGoal - selectedProposal.fundingRaised).toLocaleString()}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 bg-transparent"
                  onClick={() => {
                    setShowModal(false)
                    setContributionAmount("")
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={handleContribute}
                  disabled={!contributionAmount || Number.parseFloat(contributionAmount) <= 0}
                >
                  Contribute
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
