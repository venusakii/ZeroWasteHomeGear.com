import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function LifestylePage() {
  const stories = [
    {
      name: "Sarah & Family",
      location: "Portland, OR",
      image: "/family-with-reusable-products-in-kitchen.jpg",
      quote:
        "Going zero-waste changed our entire perspective on consumption. Our kids now remind us to bring reusable bags!",
      timeframe: "Zero-waste for 2 years",
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      image: "/man-with-zero-waste-coffee-setup.jpg",
      quote: "I started with a reusable coffee cup and now my entire kitchen is plastic-free. It feels amazing.",
      timeframe: "Zero-waste for 1 year",
    },
    {
      name: "Emma Rodriguez",
      location: "Austin, TX",
      image: "/woman-with-reusable-produce-bags-at-market.jpg",
      quote: "The best part is knowing that every day, I'm making a positive impact on the environment.",
      timeframe: "Zero-waste for 3 years",
    },
  ]

  const lifestyleImages = [
    {
      image: "/zero-waste-kitchen-organization.jpg",
      caption: "Organized & Sustainable Kitchen",
    },
    {
      image: "/reusable-lunch-containers-packed.jpg",
      caption: "Plastic-Free Lunch Prep",
    },
    {
      image: "/zero-waste-bathroom-essentials.jpg",
      caption: "Eco-Friendly Bathroom",
    },
    {
      image: "/reusable-shopping-bags-with-groceries.jpg",
      caption: "Sustainable Shopping",
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
            <h1 className="text-5xl md:text-7xl font-bold text-charcoal mb-6 text-balance">Zero-Waste Lifestyle</h1>
            <p className="text-2xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              See how real families are living sustainably and making a difference every day.
            </p>
          </div>

          {/* Customer Stories */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">Real Stories, Real Impact</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {stories.map((story, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <div className="mb-4">
                      <h3 className="font-bold text-xl text-charcoal">{story.name}</h3>
                      <p className="text-sm text-charcoal/60">{story.location}</p>
                    </div>
                    <p className="text-charcoal/70 leading-relaxed mb-4 italic">"{story.quote}"</p>
                    <div className="inline-block bg-leaf-green/10 px-4 py-2 rounded-full">
                      <span className="text-leaf-green font-medium text-sm">{story.timeframe}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle Gallery */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-charcoal mb-12 text-center">Inspiration Gallery</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {lifestyleImages.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.caption}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <p className="font-bold text-lg text-charcoal text-center">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Join Community CTA */}
          <div className="bg-gradient-to-r from-coral-peach to-sunshine-yellow rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Share your zero-waste journey, get tips from others, and inspire positive change together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="inline-block bg-white text-coral-peach px-8 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors"
              >
                Start Your Journey
              </Link>
              
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
