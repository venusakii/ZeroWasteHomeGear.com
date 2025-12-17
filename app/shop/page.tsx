"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products")

  const products = [
    {
      id: 1,
      name: "Bamboo Utensil Set",
      price: "$24.99",
      category: "Kitchen",
      image: "/bamboo-utensil-set.jpg",
      rating: 4.8,
      reviews: 234,
      slug: "bamboo-utensil-set", // Added slug for product URL
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
    },
  ]

  const categories = ["All Products", "Kitchen", "Bathroom", "On-the-Go", "Storage", "Cleaning"]

  const filteredProducts =
    selectedCategory === "All Products" ? products : products.filter((product) => product.category === selectedCategory)

  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-charcoal/70 hover:text-leaf-green transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-charcoal mb-4 text-balance">Shop Zero-Waste Products</h1>
            <p className="text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
              Discover beautiful, reusable products that make sustainable living effortless.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={category === selectedCategory ? "default" : "outline"}
                className={
                  category === selectedCategory
                    ? "bg-leaf-green hover:bg-leaf-green/90 text-white rounded-full"
                    : "border-charcoal/20 hover:border-leaf-green hover:bg-leaf-green/10 rounded-full"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                <div className="aspect-square overflow-hidden bg-sky-blue/10">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-charcoal mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-sunshine-yellow text-sunshine-yellow" />
                      <span className="text-sm font-medium text-charcoal">{product.rating}</span>
                    </div>
                    <span className="text-sm text-charcoal/60">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={`/shop/${product.slug}`} className="w-full">
                      <Button className="bg-coral-peach hover:bg-coral-peach/90 text-white rounded-full w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
