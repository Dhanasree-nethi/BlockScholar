"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, Zap } from "lucide-react"

export default function PublishPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    abstract: "",
    category: "computer-science",
    file: null as File | null,
    nftMint: false,
    licensingModel: "open",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({ ...prev, file: e.target.files![0] }))
    }
  }

  const handleNFTToggle = () => {
    setFormData((prev) => ({ ...prev, nftMint: !prev.nftMint }))
  }

  const handleSubmit = () => {
    console.log("Publishing paper:", formData)
    alert("Paper published successfully! Transaction hash: 0x1234...")
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Publish Your Research</h1>
        <p className="text-muted-foreground">Share your findings with the academic community</p>
      </div>

      {/* Progress Steps */}
      <div className="flex gap-4 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground border border-border"
              }`}
            >
              {s}
            </div>
            {s < 3 && <div className={`w-12 h-0.5 ${s < step ? "bg-primary" : "bg-border"}`}></div>}
          </div>
        ))}
      </div>

      {/* Step 1: Paper Details */}
      {step === 1 && (
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader>
            <CardTitle>Paper Details</CardTitle>
            <CardDescription>Provide information about your research paper</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium mb-2">Paper Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter your paper title"
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Abstract */}
            <div>
              <label className="block text-sm font-medium mb-2">Abstract</label>
              <textarea
                name="abstract"
                value={formData.abstract}
                onChange={handleInputChange}
                placeholder="Enter your paper abstract (max 500 words)"
                rows={6}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium mb-2">Research Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="computer-science">Computer Science</option>
                <option value="physics">Physics</option>
                <option value="biology">Biology</option>
                <option value="chemistry">Chemistry</option>
                <option value="mathematics">Mathematics</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Navigation */}
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)} disabled>
                Back
              </Button>
              <Button onClick={() => setStep(2)} className="bg-primary hover:bg-primary/90">
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 2: File Upload */}
      {step === 2 && (
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader>
            <CardTitle>Upload Paper</CardTitle>
            <CardDescription>Upload your research paper file (PDF, DOCX)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition cursor-pointer">
              <input type="file" onChange={handleFileChange} accept=".pdf,.docx" className="hidden" id="file-input" />
              <label htmlFor="file-input" className="cursor-pointer">
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <p className="font-medium mb-1">
                  {formData.file ? formData.file.name : "Click to upload or drag and drop"}
                </p>
                <p className="text-sm text-muted-foreground">PDF or DOCX up to 50MB</p>
              </label>
            </div>

            {/* IPFS Info */}
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
              <p className="text-sm">
                <span className="font-medium">Note:</span> Your paper will be stored on IPFS for immutable,
                decentralized access.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)} className="bg-primary hover:bg-primary/90" disabled={!formData.file}>
                Next
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Step 3: NFT & Licensing */}
      {step === 3 && (
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader>
            <CardTitle>NFT & Licensing</CardTitle>
            <CardDescription>Configure NFT minting and licensing terms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* NFT Mint Toggle */}
            <div className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mint as NFT</p>
                  <p className="text-sm text-muted-foreground">Create an NFT certificate for your paper</p>
                </div>
                <button
                  onClick={handleNFTToggle}
                  className={`relative w-12 h-6 rounded-full transition ${
                    formData.nftMint ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <div
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full transition ${
                      formData.nftMint ? "right-1" : "left-1"
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            {/* Licensing Model */}
            {formData.nftMint && (
              <div>
                <label className="block text-sm font-medium mb-3">Licensing Model</label>
                <div className="space-y-3">
                  {[
                    {
                      value: "open",
                      title: "Open Access",
                      desc: "Free for everyone to read and cite",
                    },
                    {
                      value: "paid",
                      title: "Paid License",
                      desc: "Readers pay a fee to access",
                    },
                    {
                      value: "fractional",
                      title: "Fractional Ownership",
                      desc: "Share ownership through fractional NFTs",
                    },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-primary/5 transition"
                    >
                      <input
                        type="radio"
                        name="licensingModel"
                        value={option.value}
                        checked={formData.licensingModel === option.value}
                        onChange={handleInputChange}
                        className="w-4 h-4"
                      />
                      <div className="ml-3">
                        <p className="font-medium">{option.title}</p>
                        <p className="text-sm text-muted-foreground">{option.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 space-y-2">
              <p className="font-medium flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Ready to Publish
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Paper will be stored on IPFS</li>
                <li>✓ Blockchain transaction will be recorded</li>
                {formData.nftMint && <li>✓ NFT will be minted with {formData.licensingModel} licensing</li>}
              </ul>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-3 pt-4">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={handleSubmit} className="bg-primary hover:bg-primary/90">
                Publish Paper
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
