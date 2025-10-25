"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, CheckCircle, Clock, AlertCircle } from "lucide-react"

interface ReviewItem {
  id: string
  title: string
  author: string
  category: string
  status: "pending" | "in-progress" | "completed"
  submittedDate: string
  reward: number
}

const reviewsData: ReviewItem[] = [
  {
    id: "1",
    title: "Quantum Computing Applications in Drug Discovery",
    author: "Dr. Sarah Johnson",
    category: "Computer Science",
    status: "pending",
    submittedDate: "2025-01-15",
    reward: 250,
  },
  {
    id: "2",
    title: "Machine Learning for Climate Prediction",
    author: "Prof. Michael Chen",
    category: "Environmental Science",
    status: "in-progress",
    submittedDate: "2025-01-10",
    reward: 300,
  },
  {
    id: "3",
    title: "Blockchain Scalability Solutions",
    author: "Dr. Alex Rodriguez",
    category: "Computer Science",
    status: "completed",
    submittedDate: "2025-01-05",
    reward: 200,
  },
  {
    id: "4",
    title: "Neural Networks for Medical Imaging",
    author: "Dr. Emily Watson",
    category: "Medical Science",
    status: "pending",
    submittedDate: "2025-01-12",
    reward: 350,
  },
  {
    id: "5",
    title: "Renewable Energy Storage Systems",
    author: "Prof. David Lee",
    category: "Physics",
    status: "pending",
    submittedDate: "2025-01-08",
    reward: 280,
  },
]

export default function PeerReviewPage() {
  const [selectedReview, setSelectedReview] = useState<ReviewItem | null>(null)
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(5)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="w-4 h-4 text-yellow-500" />
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-500" />
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return null
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "pending":
        return "Pending Review"
      case "in-progress":
        return "In Progress"
      case "completed":
        return "Completed"
      default:
        return status
    }
  }

  const handleSubmitReview = () => {
    if (selectedReview) {
      console.log("Review submitted:", {
        paperId: selectedReview.id,
        rating,
        review: reviewText,
      })
      alert("Review submitted successfully! You earned " + selectedReview.reward + " tokens.")
      setSelectedReview(null)
      setReviewText("")
      setRating(5)
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Peer Reviews</h1>
        <p className="text-muted-foreground">Review papers and earn rewards for your contributions</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{reviewsData.filter((r) => r.status === "pending").length}</div>
            <p className="text-sm text-muted-foreground">Pending Reviews</p>
          </CardContent>
        </Card>
        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">{reviewsData.filter((r) => r.status === "in-progress").length}</div>
            <p className="text-sm text-muted-foreground">In Progress</p>
          </CardContent>
        </Card>
        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold">
              {reviewsData.reduce((sum, r) => (r.status === "completed" ? sum + r.reward : sum), 0)}
            </div>
            <p className="text-sm text-muted-foreground">Tokens Earned</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Reviews List */}
        <div className="lg:col-span-2 space-y-4">
          {reviewsData.map((review) => (
            <Card
              key={review.id}
              className={`glass border-white/20 dark:border-white/10 cursor-pointer transition hover:border-primary/50 ${
                selectedReview?.id === review.id ? "border-primary/50 bg-primary/5" : ""
              }`}
              onClick={() => setSelectedReview(review)}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusIcon(review.status)}
                      <Badge
                        variant={
                          review.status === "pending"
                            ? "secondary"
                            : review.status === "in-progress"
                              ? "default"
                              : "outline"
                        }
                      >
                        {getStatusLabel(review.status)}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{review.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">by {review.author}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{review.category}</span>
                      <span className="text-muted-foreground">Submitted: {review.submittedDate}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">{review.reward}</div>
                    <p className="text-xs text-muted-foreground">tokens</p>
                    <ChevronRight className="w-5 h-5 mt-2 text-muted-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Review Form */}
        <div>
          {selectedReview ? (
            <Card className="glass border-white/20 dark:border-white/10 sticky top-6">
              <CardHeader>
                <CardTitle className="text-lg">Write Review</CardTitle>
                <CardDescription>Share your feedback</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => setRating(star)}
                        className={`text-2xl transition ${
                          star <= rating ? "text-yellow-500" : "text-muted-foreground"
                        }`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Review</label>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your detailed feedback..."
                    rows={6}
                    className="w-full px-3 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none text-sm"
                  />
                </div>

                {/* Blockchain Info */}
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 text-xs">
                  <p>
                    <span className="font-medium">Note:</span> Your review will be signed with your DID and recorded
                    on-chain.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button
                    variant="outline"
                    className="flex-1 bg-transparent"
                    onClick={() => {
                      setSelectedReview(null)
                      setReviewText("")
                      setRating(5)
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleSubmitReview}
                    disabled={!reviewText.trim()}
                  >
                    Submit Review
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass border-white/20 dark:border-white/10">
              <CardContent className="pt-6 text-center">
                <p className="text-muted-foreground">Select a paper to write a review</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
