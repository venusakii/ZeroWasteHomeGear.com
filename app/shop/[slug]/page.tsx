"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Star, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useParams } from "next/navigation"

const productsData = [
  {
    id: 1,
    name: "Bamboo Utensil Set",
    price: "$24.99",
    category: "Kitchen",
    image: "/bamboo-utensil-set.jpg",
    rating: 4.8,
    reviews: 234,
    slug: "bamboo-utensil-set",
    amazonLink: "https://www.amazon.com/s?k=bamboo+utensil+set",
    description:
      "Perfect for on-the-go meals and reducing single-use plastic. This premium bamboo utensil set includes a fork, knife, spoon, and chopsticks, all housed in a durable carrying case.",
    features: [
      "Made from 100% organic bamboo",
      "Includes fork, knife, spoon, and chopsticks",
      "Portable carrying case included",
      "Easy to clean and dishwasher safe",
      "Lightweight and durable",
    ],
    materials: "Organic Bamboo, Cotton Pouch",
    dimensions: "8 x 2 x 1 inches",
  },
  {
    id: 2,
    name: "Reusable Produce Bags",
    price: "$18.99",
    category: "Kitchen",
    image: "/reusable-mesh-produce-bags.jpg",
    rating: 4.9,
    reviews: 567,
    slug: "reusable-produce-bags",
    amazonLink: "https://www.amazon.com/s?k=reusable+produce+bags",
    description:
      "Say goodbye to plastic produce bags! These breathable mesh bags are perfect for fruits, vegetables, and bulk items. Set of 6 bags in different sizes.",
    features: [
      "Set of 6 bags (2 small, 2 medium, 2 large)",
      "Breathable mesh design",
      "Tare weight labeled on each bag",
      "Machine washable",
      "Drawstring closure",
    ],
    materials: "Organic Cotton Mesh",
    dimensions: 'Small: 8x10", Medium: 10x12", Large: 12x14"',
  },
  {
    id: 3,
    name: "Stainless Steel Straws",
    price: "$15.99",
    category: "On-the-Go",
    image: "/stainless-steel-straws-set.jpg",
    rating: 4.7,
    reviews: 432,
    slug: "stainless-steel-straws",
    amazonLink: "https://www.amazon.com/s?k=stainless+steel+straws",
    description:
      "Ditch disposable straws for good! This set includes 8 reusable stainless steel straws in various styles, plus 2 cleaning brushes and a travel pouch.",
    features: [
      "8 straws (4 straight, 4 bent)",
      "Food-grade stainless steel",
      "2 cleaning brushes included",
      "Travel pouch for portability",
      "Dishwasher safe",
    ],
    materials: "304 Stainless Steel",
    dimensions: '8.5 inches long, 0.24" diameter',
  },
  {
    id: 4,
    name: "Beeswax Food Wraps",
    price: "$22.99",
    category: "Kitchen",
    image: "/colorful-beeswax-food-wraps.jpg",
    rating: 4.6,
    reviews: 321,
    slug: "beeswax-food-wraps",
    amazonLink: "https://www.amazon.com/s?k=beeswax+food+wraps",
    description:
      "Natural alternative to plastic wrap! These colorful beeswax wraps keep food fresh while being completely compostable. Set of 5 wraps in assorted sizes.",
    features: [
      "Set of 5 wraps in various sizes",
      "Made with organic cotton and beeswax",
      "Naturally antibacterial",
      "Reusable for up to 1 year",
      "Beautiful colorful patterns",
    ],
    materials: "Organic Cotton, Beeswax, Jojoba Oil, Tree Resin",
    dimensions: 'Small: 7x8", Medium: 10x11", Large: 13x14"',
  },
  {
    id: 5,
    name: "Glass Water Bottle",
    price: "$29.99",
    category: "On-the-Go",
    image: "/glass-water-bottle-with-sleeve.jpg",
    rating: 4.9,
    reviews: 789,
    slug: "glass-water-bottle",
    amazonLink: "https://www.amazon.com/s?k=glass+water+bottle",
    description:
      "Stay hydrated in style! This premium borosilicate glass water bottle features a protective silicone sleeve and leak-proof bamboo lid. Holds 22 oz.",
    features: [
      "22 oz capacity",
      "Borosilicate glass construction",
      "Protective silicone sleeve",
      "Bamboo leak-proof lid",
      "Wide mouth for easy cleaning",
    ],
    materials: "Borosilicate Glass, Food-Grade Silicone, Bamboo",
    dimensions: "9.5 x 2.8 inches, 22 oz capacity",
  },
  {
    id: 6,
    name: "Silicone Food Storage",
    price: "$34.99",
    category: "Storage",
    image: "/silicone-food-storage-containers.jpg",
    rating: 4.8,
    reviews: 456,
    slug: "silicone-food-storage",
    amazonLink: "https://www.amazon.com/s?k=silicone+food+storage+containers",
    description:
      "Flexible, collapsible food storage containers that replace disposable plastic bags. Microwave, freezer, and dishwasher safe. Set of 4.",
    features: [
      "Set of 4 containers (various sizes)",
      "Collapsible design saves space",
      "Microwave and freezer safe",
      "Airtight silicone seal",
      "Dishwasher safe",
    ],
    materials: "Food-Grade Silicone",
    dimensions: "Small to Large: 8oz, 16oz, 32oz, 52oz",
  },
  {
    id: 7,
    name: "Compost Bin",
    price: "$39.99",
    category: "Kitchen",
    image: "/kitchen-compost-bin.jpg",
    rating: 4.7,
    reviews: 234,
    slug: "compost-bin",
    amazonLink: "https://www.amazon.com/s?k=kitchen+compost+bin",
    description:
      "Stylish countertop compost bin with charcoal filters to eliminate odors. Perfect for collecting food scraps before transferring to outdoor compost.",
    features: [
      "1.3 gallon capacity",
      "Dual charcoal filters included",
      "Odor-free design",
      "Easy-carry handle",
      "Removable inner bucket",
    ],
    materials: "Stainless Steel, Charcoal Filters",
    dimensions: "11 x 7.5 x 7.5 inches, 1.3 gallon capacity",
  },
  {
    id: 8,
    name: "Reusable Coffee Filters",
    price: "$16.99",
    category: "Kitchen",
    image: "/reusable-coffee-filters.jpg",
    rating: 4.6,
    reviews: 198,
    slug: "reusable-coffee-filters",
    amazonLink: "https://www.amazon.com/s?k=reusable+coffee+filters",
    description:
      "Eliminate paper waste with these premium stainless steel coffee filters. Compatible with most pour-over and drip coffee makers. Set of 2.",
    features: [
      "Set of 2 filters",
      "Ultra-fine stainless steel mesh",
      "Fits most standard coffee makers",
      "Easy to clean",
      "Allows natural oils through for better flavor",
    ],
    materials: "304 Stainless Steel",
    dimensions: "4.5 x 3 inches",
  },
]

export default function ProductPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [quantity, setQuantity] = useState(1)

  const product = productsData.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-charcoal mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button className="bg-leaf-green hover:bg-leaf-green/90 text-white rounded-full">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-charcoal/70 mb-8">
            <Link href="/" className="hover:text-leaf-green transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-leaf-green transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4 text-balance">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-sunshine-yellow text-sunshine-yellow" />
                  <span className="text-lg font-medium text-charcoal">{product.rating}</span>
                </div>
                <span className="text-charcoal/60">({product.reviews} reviews)</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold text-charcoal mb-8">{product.price}</p>

              {/* Description */}
              <p className="text-lg text-charcoal/70 leading-relaxed mb-8">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-charcoal font-medium">Quantity:</span>
                <div className="flex items-center gap-3 bg-white rounded-full px-4 py-2 shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-charcoal hover:text-leaf-green transition-colors font-bold text-xl w-8 h-8"
                  >
                    -
                  </button>
                  <span className="text-charcoal font-medium min-w-[2rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-charcoal hover:text-leaf-green transition-colors font-bold text-xl w-8 h-8"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  className="flex-1 bg-coral-peach hover:bg-coral-peach/90 text-white rounded-full py-6 text-lg"
                >
                  <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy on Amazon
                  </a>
                </Button>
              </div>

              {/* Product Details */}
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="font-bold text-xl text-charcoal mb-4">Product Details</h3>
                <div className="space-y-3 text-charcoal/70">
                  <div>
                    <span className="font-medium text-charcoal">Materials:</span> {product.materials}
                  </div>
                  <div>
                    <span className="font-medium text-charcoal">Dimensions:</span> {product.dimensions}
                  </div>
                  <div>
                    <span className="font-medium text-charcoal">Category:</span> {product.category}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm mb-16">
            <h2 className="text-3xl font-bold text-charcoal mb-6">Key Features</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-charcoal/70">
                  <div className="w-2 h-2 bg-leaf-green rounded-full mt-2 flex-shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Back to Shop */}
          <div className="text-center">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-charcoal/70 hover:text-leaf-green transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
