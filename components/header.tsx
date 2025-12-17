"use client"

import { Button } from "@/components/ui/button"
import { Leaf, ShoppingBag, Menu } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-charcoal/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-leaf-green rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-charcoal">ZeroWasteHomeGear</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/shop" className="text-charcoal hover:text-leaf-green transition-colors font-medium">
              Shop
            </Link>
            <Link href="/why-zero-waste" className="text-charcoal hover:text-leaf-green transition-colors font-medium">
              Why Zero-Waste
            </Link>
            <Link href="/how-it-works" className="text-charcoal hover:text-leaf-green transition-colors font-medium">
              How It Works
            </Link>
            <Link href="/lifestyle" className="text-charcoal hover:text-leaf-green transition-colors font-medium">
              Lifestyle
            </Link>
          </nav>

          {/* Cart & Menu */}
          <div className="flex items-center gap-4">
            
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-charcoal hover:text-leaf-green hover:bg-leaf-green/10 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-charcoal/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/shop"
                className="text-charcoal hover:text-leaf-green transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/why-zero-waste"
                className="text-charcoal hover:text-leaf-green transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Zero-Waste
              </Link>
              <Link
                href="/how-it-works"
                className="text-charcoal hover:text-leaf-green transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/lifestyle"
                className="text-charcoal hover:text-leaf-green transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lifestyle
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
