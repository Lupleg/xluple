"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-gray-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-800">Logo</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-gray-800 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}