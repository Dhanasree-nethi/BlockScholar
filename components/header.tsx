"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const handleSignIn = () => {
    router.push("/signin")
  }

  const handleGetStarted = () => {
    router.push("/dashboard")
  }

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push("/")}>
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">BS</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">BlockScholar</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm hover:text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="text-sm hover:text-primary transition">
              How It Works
            </a>
            <a href="#" className="text-sm hover:text-primary transition">
              Whitepaper
            </a>
            <a href="#" className="text-sm hover:text-primary transition">
              Contact
            </a>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleSignIn}>
              Sign In
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={handleGetStarted}>
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block text-sm py-2 hover:text-primary transition">
              Features
            </a>
            <a href="#how-it-works" className="block text-sm py-2 hover:text-primary transition">
              How It Works
            </a>
            <a href="#" className="block text-sm py-2 hover:text-primary transition">
              Whitepaper
            </a>
            <a href="#" className="block text-sm py-2 hover:text-primary transition">
              Contact
            </a>
            <div className="flex gap-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={handleSignIn}>
                Sign In
              </Button>
              <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" onClick={handleGetStarted}>
                Get Started
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
