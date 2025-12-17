"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-5 duration-500">
      <div className="mx-auto max-w-screen-xl">
        <div className="relative rounded-3xl bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] p-6 shadow-2xl">
          <button
            onClick={acceptCookies}
            className="absolute right-4 top-4 rounded-full p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex flex-col items-start gap-4 pr-12 md:flex-row md:items-center md:justify-between md:gap-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍪</span>
              <p className="text-pretty text-base font-medium text-white md:text-lg">
                We use cookies to protect your data like we protect your baby's.
              </p>
            </div>

            <Button
              onClick={acceptCookies}
              className="shrink-0 rounded-full bg-white px-8 py-2.5 font-semibold text-[#4CAF50] transition-transform hover:scale-105 hover:bg-cream"
            >
              Got it!
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
