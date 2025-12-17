import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-leaf-green via-sunshine-yellow to-leaf-green p-12 md:p-20 text-center shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 text-balance">
              Your Home Can Be Waste-Free.
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 mb-10 text-balance">And Still Look Amazing.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-leaf-green hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <Link href="/shop">🌍 Start Your Zero-Waste Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-leaf-green px-8 py-6 text-lg rounded-full transition-all hover:scale-105 bg-transparent"
                asChild
              >
                <Link href="/shop">📦 View Starter Kits</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
