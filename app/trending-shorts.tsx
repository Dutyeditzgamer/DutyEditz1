import { Play, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ShortProps {
  id: string
  title: string
  views: string
  timestamp: string
  thumbnail?: string
}

const ShortCard = ({ id, title, views, timestamp, thumbnail }: ShortProps) => (
  <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
    <div className="relative overflow-hidden aspect-[9/16] max-h-80">
      <a href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-3 shadow-lg">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">SHORT</span>
        </div>
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center text-xs text-muted-foreground">
        <span>{views}</span>
        <span className="mx-2">&bull;</span>
        <span>{timestamp}</span>
      </div>
    </div>
  </div>
)

export default function TrendingShorts() {
  const trendingShorts = [
    {
      id: "YPBx7fIItww",
      title: "Evelyn Edit | The Last of Us Part II",
      views: "74K+ views",
      timestamp: "4 months ago",
    },
    {
      id: "U28o9CT2Tpg",
      title: "BLOOD STRIKE MP5 Showcase",
      views: "45+ views",
      timestamp: "3 days ago",
    },
    {
      id: "6VAayY8SGRE",
      title: "Warzone Comeback?",
      views: "120+ views",
      timestamp: "3 weeks ago",
    },
    {
      id: "ZMYK1_132IE",
      title: "Fortnite Victory Royale",
      views: "130+ views",
      timestamp: "1 week ago",
    },
  ]

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp className="h-6 w-6 text-red-500" />
            <span className="text-xs font-medium tracking-widest uppercase text-red-500">Trending</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Trending Shorts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Quick gaming moments and epic edits in bite-sized content
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {trendingShorts.map((short, index) => (
            <ShortCard key={index} {...short} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
              <Play className="mr-2 h-5 w-5" />
              Watch More Shorts
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
