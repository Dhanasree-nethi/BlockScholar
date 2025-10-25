"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Edit2, Save, X, Award, BookOpen, Zap, Users } from "lucide-react"

interface UserProfile {
  name: string
  did: string
  email: string
  affiliation: string
  bio: string
  socialLinks: {
    twitter?: string
    linkedin?: string
    github?: string
  }
  stats: {
    verifiedPapers: number
    totalCitations: number
    fundingReceived: number
    communityReputation: number
  }
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: "Dr. Chen Wei",
    did: "did:blockscholar:0x1a2b3c4d5e6f7g8h9i0j",
    email: "chen.wei@university.edu",
    affiliation: "MIT - Computer Science Department",
    bio: "Passionate about blockchain technology and decentralized systems. Researching scalability solutions for distributed networks.",
    socialLinks: {
      twitter: "https://twitter.com/chenwei",
      linkedin: "https://linkedin.com/in/chenwei",
      github: "https://github.com/chenwei",
    },
    stats: {
      verifiedPapers: 12,
      totalCitations: 342,
      fundingReceived: 9800,
      communityReputation: 4.8,
    },
  })

  const [editData, setEditData] = useState(profile)

  const handleEdit = () => {
    setIsEditing(true)
    setEditData(profile)
  }

  const handleSave = () => {
    setProfile(editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditData(profile)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    if (name.startsWith("social_")) {
      const key = name.replace("social_", "") as keyof typeof editData.socialLinks
      setEditData((prev) => ({
        ...prev,
        socialLinks: { ...prev.socialLinks, [key]: value },
      }))
    } else {
      setEditData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("Copied to clipboard!")
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">My Profile</h1>
        <p className="text-muted-foreground">Manage your researcher profile and credentials</p>
      </div>

      {/* Profile Card */}
      <Card className="glass border-white/20 dark:border-white/10 mb-6">
        <CardHeader className="flex flex-row items-start justify-between">
          <div>
            <CardTitle className="text-2xl">{profile.name}</CardTitle>
            <CardDescription>{profile.affiliation}</CardDescription>
          </div>
          {!isEditing && (
            <Button variant="outline" size="sm" onClick={handleEdit} className="gap-2 bg-transparent">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </Button>
          )}
        </CardHeader>

        <CardContent className="space-y-6">
          {/* DID Section */}
          <div>
            <label className="block text-sm font-medium mb-2">Decentralized ID (DID)</label>
            <div className="flex items-center gap-2">
              <code className="flex-1 px-4 py-2 rounded-lg bg-muted text-sm font-mono break-all">{profile.did}</code>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(profile.did)} className="flex-shrink-0">
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Edit Mode */}
          {isEditing ? (
            <div className="space-y-4 pt-4 border-t border-border">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={editData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={editData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Affiliation */}
              <div>
                <label className="block text-sm font-medium mb-2">Affiliation</label>
                <input
                  type="text"
                  name="affiliation"
                  value={editData.affiliation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium mb-2">Bio</label>
                <textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Social Links */}
              <div className="space-y-3">
                <label className="block text-sm font-medium">Social Links</label>
                <input
                  type="url"
                  name="social_twitter"
                  value={editData.socialLinks.twitter || ""}
                  onChange={handleInputChange}
                  placeholder="Twitter URL"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <input
                  type="url"
                  name="social_linkedin"
                  value={editData.socialLinks.linkedin || ""}
                  onChange={handleInputChange}
                  placeholder="LinkedIn URL"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <input
                  type="url"
                  name="social_github"
                  value={editData.socialLinks.github || ""}
                  onChange={handleInputChange}
                  placeholder="GitHub URL"
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4">
                <Button variant="outline" className="flex-1 bg-transparent" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button className="flex-1 bg-primary hover:bg-primary/90" onClick={handleSave}>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            </div>
          ) : (
            <>
              {/* View Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Affiliation</p>
                  <p className="font-medium">{profile.affiliation}</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">Bio</p>
                <p className="text-sm leading-relaxed">{profile.bio}</p>
              </div>

              {/* Social Links */}
              {(profile.socialLinks.twitter || profile.socialLinks.linkedin || profile.socialLinks.github) && (
                <div>
                  <p className="text-sm text-muted-foreground mb-3">Social Links</p>
                  <div className="flex gap-3">
                    {profile.socialLinks.twitter && (
                      <a
                        href={profile.socialLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm hover:bg-primary/20 transition"
                      >
                        Twitter
                      </a>
                    )}
                    {profile.socialLinks.linkedin && (
                      <a
                        href={profile.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm hover:bg-accent/20 transition"
                      >
                        LinkedIn
                      </a>
                    )}
                    {profile.socialLinks.github && (
                      <a
                        href={profile.socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm hover:bg-secondary/20 transition"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Verified Papers</p>
                <p className="text-2xl font-bold">{profile.stats.verifiedPapers}</p>
              </div>
              <BookOpen className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Citations</p>
                <p className="text-2xl font-bold">{profile.stats.totalCitations}</p>
              </div>
              <Zap className="w-8 h-8 text-accent opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Funding Received</p>
                <p className="text-2xl font-bold">${(profile.stats.fundingReceived / 1000).toFixed(1)}K</p>
              </div>
              <Award className="w-8 h-8 text-secondary opacity-50" />
            </div>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Community Rating</p>
                <p className="text-2xl font-bold">{profile.stats.communityReputation}</p>
              </div>
              <Users className="w-8 h-8 text-primary opacity-50" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="glass border-white/20 dark:border-white/10">
        <CardHeader>
          <CardTitle>Achievements & Badges</CardTitle>
          <CardDescription>Recognition for your contributions to the research community</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "🏆", label: "Top Researcher", desc: "Among top 10% contributors" },
              { icon: "⭐", label: "Verified Scholar", desc: "5+ verified papers" },
              { icon: "🔬", label: "Peer Reviewer", desc: "Completed 10+ reviews" },
              { icon: "💰", label: "Funded Pioneer", desc: "Raised $10K+ in funding" },
            ].map((badge, i) => (
              <div key={i} className="text-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <p className="font-medium text-sm">{badge.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
