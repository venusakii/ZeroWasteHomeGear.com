import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Package, Home, Repeat, Heart } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      icon: Package,
      title: "Choose Your Products",
      description:
        "Browse our carefully curated collection of zero-waste products. Each item is selected for quality, durability, and environmental impact.",
    },
    {
      number: "02",
      icon: Home,
      title: "Start Small at Home",
      description:
        "Begin your journey by replacing one disposable item at a time. Start with something simple like reusable bags or water bottles.",
    },
    {
      number: "03",
      icon: Repeat,
      title: "Build the Habit",
      description:
        "Consistency is key. Keep your reusable items visible and accessible. Within weeks, using them will become second nature.",
    },
    {
      number: "04",
      icon: Heart,
      title: "Inspire Others",
      description:
        "Share your zero-waste journey with friends and family. Your positive impact will inspire others to make sustainable choices too.",
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/70 hover:text-leaf-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 text-balance">How It Works</h1>
            <p className="text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Going zero-waste is easier than you think. Follow these simple steps to start your sustainable living
              journey today.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex items-center gap-6">
                    <div className="text-6xl font-bold text-leaf-green/20">{step.number}</div>
                    <div className="w-16 h-16 bg-leaf-green/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-8 h-8 text-leaf-green" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">{step.title}</h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-br from-sunshine-yellow/20 to-coral-peach/20 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-charcoal mb-8 text-center">Pro Tips for Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-xl text-charcoal mb-3">Keep It Visible</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Store your reusable items where you'll see them daily. Place shopping bags by the door and water
                  bottles on the counter.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-xl text-charcoal mb-3">Don't Aim for Perfect</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Zero-waste is a journey, not a destination. Every small change counts, and it's okay to take it one
                  step at a time.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-xl text-charcoal mb-3">Track Your Progress</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Keep a journal of items you've replaced. Seeing your impact grow over time is incredibly motivating.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-bold text-xl text-charcoal mb-3">Join the Community</h3>
                <p className="text-charcoal/70 leading-relaxed">
                  Connect with other zero-waste enthusiasts online and locally. Share tips, challenges, and celebrate
                  wins together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
