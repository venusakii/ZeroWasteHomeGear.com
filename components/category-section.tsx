import { Card } from "@/components/ui/card"
import Image from "next/image"

const categories = [
  { image: "/kitchen-zero-waste.jpg", title: "Kitchen Without Waste", color: "from-leaf-green to-leaf-green/80" },
  { image: "/bathroom-plastic-free.jpg", title: "Plastic-Free Bathroom", color: "from-sky-blue to-sky-blue/80" },
  { image: "/eco-cleaning-products.jpg", title: "Eco Cleaning", color: "from-sunshine-yellow to-sunshine-yellow/80" },
  { image: "/laundry-sustainable.jpg", title: "Laundry Reimagined", color: "from-coral-peach to-coral-peach/80" },
  { image: "/everyday-reusables.jpg", title: "Everyday Reusables", color: "from-leaf-green to-sky-blue" },
]

export function CategorySection() {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-charcoal mb-4">shop by room</h2>
        <p className="text-center text-charcoal/60 mb-12 text-lg">Zero-waste solutions for every space in your home</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="relative overflow-hidden rounded-3xl border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="h-48 relative flex flex-col items-center justify-end p-6">
                <Image src={category.image || "/placeholder.svg"} alt={category.title} fill className="object-cover" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-60 group-hover:opacity-50 transition-opacity duration-300`}
                />
                <h3 className="text-white font-bold text-center text-lg leading-tight relative z-10 drop-shadow-lg">
                  {category.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
