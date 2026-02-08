"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Star, Search, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const games = [
  {
    id: "cod-mw3",
    title: "Call of Duty: Modern Warfare III",
    description: "The latest installment in the Modern Warfare series featuring Captain Price and Task Force 141.",
    image: "https://assets.xboxservices.com/assets/4b/b4/4bb4a8f3-071e-4880-b7a4-c875a3adac29.jpg?n=MWIII-S1_GLP-Page-Hero-1084_1920x1080_02.jpg",
    category: "FPS",
    rating: 4.7,
  },
  {
    id: "cod-warzone",
    title: "Call of Duty: Warzone",
    description: "Free-to-play battle royale game featuring up to 150 players in the world of Modern Warfare.",
    image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
    category: "Battle Royale",
    rating: 4.8,
  },
  {
    id: "gta6",
    title: "Grand Theft Auto VI",
    description: "The highly anticipated next chapter in the Grand Theft Auto series set in Vice City.",
    image: "https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg",
    category: "Open World",
    rating: 5.0,
  },
  {
    id: "tlou2",
    title: "The Last of Us Part II",
    description: "Follow Ellie's journey for justice in a post-apocalyptic United States ravaged by a pandemic.",
    image: "https://i.ytimg.com/vi/YPBx7fIItww/maxresdefault.jpg",
    category: "Action Adventure",
    rating: 4.9,
  },
  {
    id: "fortnite",
    title: "Fortnite",
    description: "Build, battle, and survive in the most popular battle royale game in the world.",
    image: "/images/fortnite-card.jpg",
    category: "Battle Royale",
    rating: 4.6,
  },
  {
    id: "apex-legends",
    title: "Apex Legends",
    description: "Squad-based battle royale with unique legends and fast-paced gameplay.",
    image: "/images/apex-legends-card.jpg",
    category: "Battle Royale",
    rating: 4.7,
  },
  {
    id: "valorant",
    title: "Valorant",
    description: "5v5 tactical shooter with unique agent abilities and competitive gameplay.",
    image: "/images/valorant-card.jpg",
    category: "Tactical FPS",
    rating: 4.5,
  },
  {
    id: "farcry4",
    title: "Far Cry 4",
    description: "Open-world action adventure set in the fictional Himalayan country of Kyrat.",
    image: "https://i.ytimg.com/vi/mhchmnYxHVo/maxresdefault.jpg",
    category: "Action Adventure",
    rating: 4.4,
  },
  {
    id: "blood-strike",
    title: "Blood Strike",
    description: "Fast-paced tactical FPS with intense gameplay and stunning graphics.",
    image: "https://i.ytimg.com/vi/U28o9CT2Tpg/maxresdefault.jpg",
    category: "FPS",
    rating: 4.3,
  },
]

const categories = ["All", "FPS", "Battle Royale", "Open World", "Action Adventure", "Tactical FPS"]

export default function GamesPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGames = games.filter((game) => {
    const matchesCategory = activeCategory === "All" || game.category === activeCategory
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img
            src="https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg"
            alt="Games background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">Our Collection</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 mt-2 text-foreground">
            Featured Games
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Explore our collection of games we cover. We provide premium editing, tutorials, and gameplay highlights for these titles.
          </p>
        </div>
      </section>

      {/* Filter & Search */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-30 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeCategory === category
                      ? "bg-red-600 text-white"
                      : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-secondary border-border focus-visible:ring-red-500 text-foreground"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {filteredGames.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No games found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4 border-border text-foreground hover:bg-accent"
                onClick={() => {
                  setActiveCategory("All")
                  setSearchQuery("")
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGames.map((game) => (
                <div
                  key={game.id}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:border-red-600/40 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={game.image || "/placeholder.svg"}
                      alt={game.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                    <div className="absolute top-3 right-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-lg">
                        {game.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">{game.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{game.description}</p>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(game.rating) ? "text-amber-500 fill-amber-500" : "text-muted"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-muted-foreground text-sm ml-2">{game.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl border border-border">
            <div className="text-center">
              <span className="text-xs font-medium tracking-widest uppercase text-red-500">Get Started</span>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 mt-2 text-foreground">
                Want Gaming Edits for These Titles?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                We specialize in creating high-quality edits and tutorials. Check out our YouTube channel for examples of our work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-red-600 text-white hover:bg-red-700">
                    <Youtube className="mr-2 h-4 w-4" /> Visit YouTube Channel
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="border-border text-foreground hover:bg-accent">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
