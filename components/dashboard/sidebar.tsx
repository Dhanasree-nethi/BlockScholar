"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { FileText, Users, Zap, BookOpen, Coins, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const menuItems = [
  { icon: FileText, label: "My Papers", href: "/dashboard" },
  { icon: Users, label: "Peer Reviews", href: "/dashboard/reviews" },
  { icon: Zap, label: "Funding Requests", href: "/dashboard/funding" },
  { icon: BookOpen, label: "Citations", href: "/dashboard/citations" },
  { icon: Coins, label: "NFT Licenses", href: "/dashboard/nfts" },
]

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const handleSignOut = () => {
    console.log("[v0] User signing out")
    alert("Signed out successfully!")
    router.push("/")
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 md:hidden z-40" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative w-64 h-screen bg-card border-r border-border flex flex-col transition-transform duration-300 z-50 md:z-0",
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-border cursor-pointer" onClick={() => router.push("/dashboard")}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold">BS</span>
            </div>
            <div>
              <p className="font-bold text-sm">BlockScholar</p>
              <p className="text-xs text-muted-foreground">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className={cn("w-full justify-start gap-3", isActive && "bg-primary hover:bg-primary/90")}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-border space-y-2">
          <Link href="/dashboard/profile">
            <Button variant="ghost" className="w-full justify-start gap-3">
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Button>
          </Link>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-destructive hover:text-destructive"
            onClick={handleSignOut}
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>
    </>
  )
}
