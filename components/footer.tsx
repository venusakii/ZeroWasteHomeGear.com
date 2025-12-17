export function Footer() {
  const sections = [
    {
      title: "Shop by Room",
      links: ["Kitchen", "Bathroom", "Cleaning", "Laundry", "Everyday"],
    },
    {
      title: "Zero-Waste Guides",
      links: ["Getting Started", "Tips & Tricks", "Product Care", "Composting 101"],
    },
    {
      title: "Sustainability Promise",
      links: ["Our Mission", "Carbon Neutral", "Materials", "Packaging"],
    },
    {
      title: "Community Stories",
      links: ["Customer Reviews", "Success Stories", "Blog", "Newsletter"],
    },
  ]

  return (
    <footer className="bg-[#d4e9d7] border-t border-charcoal/10 py-16 px-4">
      <div className="container mx-auto">
        

        <div className="text-center pt-8 border-t border-charcoal/10">
          <p className="text-charcoal/70 text-sm mb-2">As an Amazon Associate, we earn from qualifying purchases.</p>
          <div className="flex items-center justify-center gap-4 mb-3">
            <a href="#" className="text-charcoal/70 hover:text-leaf-green transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-charcoal/40">|</span>
            <a href="#" className="text-charcoal/70 hover:text-leaf-green transition-colors text-sm">
              Terms of Service
            </a>
          </div>
          <p className="text-charcoal">
            ZeroWasteHomeGear.com — <span className="font-medium">small changes. big impact.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
