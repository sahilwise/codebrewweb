'use client'

import { useState } from 'react'

// import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="relative min-h-screen">
      <button
        className="fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
        aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-background shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="p-4 mt-16">
          <ul className="space-y-2 font-semibold text-sm">
            <li><a href="#" className="block p-2 hover:bg-accent rounded">Home</a></li>
            <li><a href="#" className="block p-2 hover:bg-accent rounded">About</a></li>
            <li><a href="#" className="block p-2 hover:bg-accent rounded">Services</a></li>
            <li><a href="#" className="block p-2 hover:bg-accent rounded">Contact</a></li>
          </ul>
        </nav>
      </div>

      <main className={`p-12 px-32 ${isOpen ? 'ml-64' : ''} transition-margin duration-300 ease-in-out`}>
        <h1 className="text-2xl font-black mb-4">CodeBrew</h1>
        <p>Your main content goes here. This area will shift when the sidebar opens and closes.</p>
      </main>
    </div>
  )
}