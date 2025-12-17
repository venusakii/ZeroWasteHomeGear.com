import { Button } from "@/components/ui/button"
import { Leaf, Droplet, RefreshCw } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="/eco-friendly-sustainable-zero-waste-products-kitch.jpg"
          alt="Sustainable living background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-cream/95 via-leaf-green/20 to-sunshine-yellow/30" />
      </div>

      {/* Animated floating icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[5]">
        <Leaf className="absolute top-20 left-[10%] w-12 h-12 text-leaf-green/30 animate-float" />
        <Droplet className="absolute top-40 right-[20%] w-10 h-10 text-sky-blue/30 animate-float-delayed" />
        <RefreshCw className="absolute bottom-32 left-[15%] w-14 h-14 text-coral-peach/30 animate-spin-slow" />
        <Leaf className="absolute bottom-40 right-[15%] w-16 h-16 text-sunshine-yellow/30 animate-float" />
      </div>

      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold text-charcoal mb-6 text-balance">Zero Waste Starts at Home.</h1>
        <p className="text-xl md:text-2xl text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Beautiful, reusable products that make sustainable living effortless.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/shop">
            <Button
              size="lg"
              className="bg-leaf-green hover:bg-leaf-green/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              🌱 Shop Zero-Waste Essentials
            </Button>
          </Link>
          <Link href="/how-it-works">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-coral-peach text-coral-peach hover:bg-coral-peach hover:text-white px-8 py-6 text-lg rounded-full transition-all hover:scale-105 bg-transparent"
            >
              ♻️ How It Works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
