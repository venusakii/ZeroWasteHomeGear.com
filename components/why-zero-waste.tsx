import Image from "next/image"

export function WhyZeroWaste() {
  const facts = [
    { icon: "🚯", text: "Reduce household waste by up to 80%" },
    { icon: "🌊", text: "Less plastic in oceans" },
    { icon: "💰", text: "Save money long-term" },
    { icon: "🧘", text: "Feel good about daily choices" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sky-blue/5 to-leaf-green/5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Illustration */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-leaf-green/20 to-sky-blue/20 flex items-center justify-center overflow-hidden relative">
              <Image src="/earth-sustainability.jpg" alt="Earth and sustainability" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-br from-leaf-green/30 to-sky-blue/30" />
            </div>
          </div>

          {/* Right: Facts */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mb-6">why zero waste?</h2>
            <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
              Small changes in your home can make a massive difference for our planet.
            </p>
            <div className="space-y-6">
              {facts.map((fact, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-4xl flex-shrink-0">{fact.icon}</span>
                  <p className="text-lg font-medium text-charcoal">{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
