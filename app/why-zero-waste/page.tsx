import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Leaf, Droplets, Heart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function WhyZeroWastePage() {
  const benefits = [
    {
      icon: Leaf,
      title: "Reduce Environmental Impact",
      description:
        "Every year, millions of tons of plastic waste end up in our oceans and landfills. By choosing reusable products, you're directly reducing waste and protecting our planet for future generations.",
      stats: "Reduce waste by 90%",
      color: "leaf-green",
    },
    {
      icon: Droplets,
      title: "Save Natural Resources",
      description:
        "Single-use products consume massive amounts of water, energy, and raw materials. Zero-waste alternatives help conserve these precious resources and reduce your carbon footprint significantly.",
      stats: "Save 500+ plastic items per year",
      color: "sky-blue",
    },
    {
      icon: Heart,
      title: "Healthier for You & Family",
      description:
        "Many disposable products contain harmful chemicals that can leach into food and drinks. Our zero-waste products are made from natural, non-toxic materials that are safe for your whole family.",
      stats: "100% non-toxic materials",
      color: "coral-peach",
    },
    {
      icon: TrendingUp,
      title: "Save Money Long-Term",
      description:
        "While the initial investment might be higher, reusable products last for years and eliminate the need for constant repurchasing. Most families save hundreds of dollars annually by going zero-waste.",
      stats: "Save $500+ annually",
      color: "sunshine-yellow",
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
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 text-balance">Why Choose Zero-Waste?</h1>
            <p className="text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Small changes in your daily routine can create a massive positive impact on our planet, your health, and
              your wallet.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-8 md:p-12 shadow-sm hover:shadow-xl transition-all duration-300 ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}
              >
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div
                    className={`w-16 h-16 bg-${benefit.color}/20 rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <benefit.icon className={`w-8 h-8 text-${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-charcoal mb-4">{benefit.title}</h2>
                    <p className="text-lg text-charcoal/70 leading-relaxed mb-4">{benefit.description}</p>
                    <div className={`inline-block bg-${benefit.color}/10 px-6 py-3 rounded-full`}>
                      <span className={`text-${benefit.color} font-bold text-lg`}>{benefit.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-leaf-green to-sky-blue rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of families who have already started their zero-waste journey.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-white text-leaf-green px-8 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
