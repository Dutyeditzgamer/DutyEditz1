import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"

export default function GamesPage() {
  // Game data
  const games = [
    {
      id: "cod-mw3",
      title: "Call of Duty: Modern Warfare III",
      description: "The latest installment in the Modern Warfare series featuring Captain Price and Task Force 141.",
      image:
        "https://assets.xboxservices.com/assets/4b/b4/4bb4a8f3-071e-4880-b7a4-c875a3adac29.jpg?n=MWIII-S1_GLP-Page-Hero-1084_1920x1080_02.jpg",
      category: "FPS",
      rating: 4.7,
    },
    {
      id: "cod-warzone",
      title: "Call of Duty: Warzone",
      description: "Free-to-play battle royale game featuring up to 150 players in the world of Modern Warfare.",
      image:
        "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mw-wz/WZ-Season-Three-Announce-TOUT.jpg",
      category: "Battle Royale",
      rating: 4.8,
    },
    {
      id: "gta6",
      title: "Grand Theft Auto VI",
      description: "The highly anticipated next chapter in the Grand Theft Auto series set in Vice City.",
      image:
        "https://sjc.microlink.io/1tzXoIt90zI_DaJ8KBAdKGN6GRehkTlIZu5NfAy-HSeY2-okjUQiSKznO1KUS1iWUbcdhoxofcSTsgiLbDhMNQ.jpeg",
      category: "Open World",
      rating: 5.0,
    },
    {
      id: "gta5",
      title: "Grand Theft Auto V",
      description: "Experience the lives of three very different criminals in the corrupt city of Los Santos.",
      image: "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/1280/V.jpg",
      category: "Open World",
      rating: 4.9,
    },
    {
      id: "cod-black-ops",
      title: "Call of Duty: Black Ops Cold War",
      description: "Direct sequel to the original Black Ops, set during the Cold War in the early 1980s.",
      image: "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bocw/BOCW-LAUNCH-TOUT.jpg",
      category: "FPS",
      rating: 4.6,
    },
    {
      id: "gta-san-andreas",
      title: "Grand Theft Auto: San Andreas",
      description:
        "Follow Carl Johnson as he returns to San Andreas to save his family and take control of the streets.",
      image:
        "https://media-rockstargames-com.akamaized.net/rockstargames-newsite/img/global/games/fob/640/sanandreas.jpg",
      category: "Open World",
      rating: 4.9,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10" />
          <img
            src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/mw3/home/reveal/mw3-home-hero-desktop.jpg"
            alt="Call of Duty background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            Featured Games
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our collection of Call of Duty and Grand Theft Auto games. We provide premium editing services,
            tutorials, and gameplay highlights for these titles.
          </p>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game) => (
              <div
                key={game.id}
                className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all group"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={game.image || "/placeholder.svg"}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-2.5 py-1 rounded">
                      {game.category}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                  <p className="text-gray-400 mb-4">{game.description}</p>
                  <div className="flex items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(game.rating) ? "text-yellow-400" : "text-gray-500"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm ml-2">{game.rating.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/80 to-gray-900/80 p-8 rounded-xl border border-purple-500/30">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Gaming Edits?</h2>
              <p className="text-gray-300 mb-6">
                We specialize in creating high-quality edits and tutorials for Call of Duty and GTA games. Check out our
                YouTube channel for examples of our work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
                    Visit YouTube Channel
                  </Button>
                </a>
                <Link href="/">
                  <Button variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-950/20">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
