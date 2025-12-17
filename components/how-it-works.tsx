export function HowItWorks() {
  const steps = [
    { number: "1️⃣", title: "Replace Single-Use", description: "Swap disposables for beautiful reusables" },
    { number: "2️⃣", title: "Reuse Daily", description: "Enjoy products built to last" },
    { number: "3️⃣", title: "Reduce Waste Naturally", description: "Watch your impact shrink effortlessly" },
  ]

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">how it works</h2>
        <p className="text-center text-charcoal/60 mb-16 text-lg">Three simple steps to a waste-free home</p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-6xl mb-4">{step.number}</div>
                <h3 className="text-2xl font-bold text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal/70 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-4xl text-leaf-green">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
