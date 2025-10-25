"use client"

import { Button } from "@/components/ui/button"
import { Menu, Bell, User } from "lucide-react"

interface DashboardHeaderProps {
  onMenuClick: () => void
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  return (
    <header className="border-b border-border bg-card glass">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Menu Button */}
        <Button variant="ghost" size="icon" onClick={onMenuClick} className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>

        {/* Spacer */}
        <div className="flex-1 md:flex-none" />

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>

          {/* User Menu */}
          <Button variant="ghost" size="icon">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
          </Button>
        </div>
      </div>
    </header>
  )
}
