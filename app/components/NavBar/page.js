'use client'

import { useState } from 'react'

// import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div className="relative">
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
    </div>
  )
}