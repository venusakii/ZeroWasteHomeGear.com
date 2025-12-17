import Image from "next/image"

export function LifestyleSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-sunshine-yellow/5 to-coral-peach/5">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-6">real homes. real change.</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image src="/zero-waste-home.jpg" alt="Zero waste home" fill className="object-cover" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image src="/sustainable-kitchen.jpg" alt="Sustainable kitchen" fill className="object-cover" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image src="/eco-friendly-lifestyle.jpg" alt="Eco-friendly lifestyle" fill className="object-cover" />
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden relative">
            <Image src="/family-sustainable-living.jpg" alt="Family sustainable living" fill className="object-cover" />
          </div>
        </div>

        <p className="text-center text-2xl font-medium text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
          No perfect zero-waste home. Just better choices, every day.
        </p>
      </div>
    </section>
  )
}
