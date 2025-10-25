"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { FileText, Users, TrendingUp, Award } from "lucide-react"

const citationData = [
  { month: "Jan", citations: 12 },
  { month: "Feb", citations: 19 },
  { month: "Mar", citations: 15 },
  { month: "Apr", citations: 28 },
  { month: "May", citations: 35 },
  { month: "Jun", citations: 42 },
]

const fundingData = [
  { month: "Jan", funded: 2000 },
  { month: "Feb", funded: 3500 },
  { month: "Mar", funded: 2800 },
  { month: "Apr", funded: 5200 },
  { month: "May", funded: 7100 },
  { month: "Jun", funded: 9800 },
]

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Welcome back, Dr. Chen</h1>
        <p className="text-muted-foreground">Here's your research activity overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published Papers</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 this month</p>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Citations</CardTitle>
            <TrendingUp className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">+28 this month</p>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Peer Reviews</CardTitle>
            <Users className="h-4 w-4 text-secondary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">3 pending</p>
          </CardContent>
        </Card>

        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Funding Received</CardTitle>
            <Award className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$9.8K</div>
            <p className="text-xs text-muted-foreground">+$2.7K this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Citations Chart */}
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader>
            <CardTitle>Citation Trends</CardTitle>
            <CardDescription>Monthly citation growth</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={citationData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <Bar dataKey="citations" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Funding Chart */}
        <Card className="glass border-white/20 dark:border-white/10">
          <CardHeader>
            <CardTitle>Funding Growth</CardTitle>
            <CardDescription>Monthly funding received</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={fundingData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="currentColor" />
                <YAxis stroke="currentColor" />
                <Tooltip
                  contentStyle={{ backgroundColor: "rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.2)" }}
                />
                <Line
                  type="monotone"
                  dataKey="funded"
                  stroke="hsl(var(--accent))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--accent))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="glass border-white/20 dark:border-white/10">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Your latest research updates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                title: "Paper Verified",
                desc: "Your paper 'Quantum Computing Applications' was verified",
                time: "2 hours ago",
              },
              { title: "Citation Received", desc: "Dr. Smith cited your research in their paper", time: "5 hours ago" },
              { title: "Funding Received", desc: "You received $500 from research funding pool", time: "1 day ago" },
              { title: "Review Request", desc: "You have a new peer review request", time: "2 days ago" },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between pb-4 border-b border-border last:border-0">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap ml-4">{item.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
