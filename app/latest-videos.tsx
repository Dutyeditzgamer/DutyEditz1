import { Play, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoProps {
  id: string
  title: string
  views: string
  timestamp: string
  thumbnail?: string
}

const VideoCard = ({ id, title, views, timestamp, thumbnail }: VideoProps) => (
  <div className="bg-card rounded-xl border border-border overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-3 shadow-lg">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center text-sm text-muted-foreground">
        <span>{views}</span>
        <span className="mx-2">&bull;</span>
        <span>{timestamp}</span>
      </div>
    </div>
  </div>
)

export default function LatestVideos() {
  const latestVideos = [
    {
      id: "U28o9CT2Tpg",
      title: "BLOOD STRIKE: MP5 Payday Ultra | RTX 3060 Graphics Showcase",
      views: "45+ views",
      timestamp: "3 days ago",
    },
    {
      id: "6VAayY8SGRE",
      title: "OG Warzone is Back? | Battle Royale Casual Gameplay",
      views: "120+ views",
      timestamp: "3 weeks ago",
    },
    {
      id: "lD0EBg-AHSY",
      title: "Call of Duty: Modern Warfare | Epic Multiplayer Moments",
      views: "95+ views",
      timestamp: "2 weeks ago",
    },
    {
      id: "ZMYK1_132IE",
      title: "Fortnite Victory Royale | Best Highlights & Clutch Moments",
      views: "130+ views",
      timestamp: "1 week ago",
    },
    {
      id: "mhchmnYxHVo",
      title: "FarCry 4 - Aggressive Stealth Kills | No HUD 1080p Takedowns",
      views: "800+ views",
      timestamp: "1 month ago",
    },
    {
      id: "YPBx7fIItww",
      title: "Evelyn Edit | The Last of Us Part II Character Showcase",
      views: "74K+ views",
      timestamp: "4 months ago",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">Latest Content</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">
            Latest Gaming Content
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out our newest gaming videos, edits, and gameplay highlights
          </p>
          <div className="mt-4 flex justify-center">
            <a
              href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors text-sm"
            >
              <Youtube className="h-5 w-5 mr-2" />
              <span>@DutyEditz &bull; 1.05K+ subscribers &bull; 64+ videos</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestVideos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button size="lg" variant="outline" className="border-red-600/50 text-red-500 hover:bg-red-600/10">
              <Play className="mr-2 h-5 w-5" />
              Watch All Videos on YouTube
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
