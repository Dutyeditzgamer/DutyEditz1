import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YouTubeSubscriberCounter } from "@/components/youtube-subscriber-counter"

interface VideoProps {
  id: string
  title: string
  views: string
  timestamp: string
  thumbnail?: string
}

const FeaturedVideo = ({ id, title, views, timestamp }: VideoProps) => (
  <div className="max-w-4xl mx-auto bg-gray-800/50 p-4 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
    <div className="aspect-video relative overflow-hidden rounded-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${id}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="mt-4">
      <h4 className="font-bold text-xl">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">
        {views} • {timestamp}
      </p>
    </div>
  </div>
)

const VideoCard = ({ id, title, views, timestamp, thumbnail }: VideoProps) => (
  <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all group">
    <div className="relative overflow-hidden">
      <a href={`https://www.youtube.com/watch?v=${id}`} target="_blank" rel="noopener noreferrer">
        <img
          src={thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-3">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
      </a>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-400">
        <span>{views}</span>
        <span className="mx-2">•</span>
        <span>{timestamp}</span>
      </div>
    </div>
  </div>
)

export default function YouTubeSection() {
  // Most viewed short from the channel
  const featuredShort = {
    id: "YPBx7fIItww",
    title: "Evelyn Edit ❤️ | The Last of Us Part II",
    views: "74K+ views",
    timestamp: "4 months ago",
  }

  // Updated videos from the channel with better titles
  const videos = [
    {
      id: "U28o9CT2Tpg",
      title: "BLOOD STRIKE: MP5 Payday Ultra | RTX 3060 Graphics Showcase 🔥",
      views: "45+ views",
      timestamp: "3 days ago",
    },
    {
      id: "6VAayY8SGRE",
      title: "OG Warzone is Back? 🤔 | Battle Royale Casual Gameplay",
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
      title: "FarCry®4 - Aggressive Stealth Kills | No HUD 1080p Takedowns",
      views: "800+ views",
      timestamp: "1 month ago",
    },
    {
      id: "dQw4w9WgXcQ",
      title: "GTA 6 Trailer Reaction | First Look Analysis & Breakdown",
      views: "250+ views",
      timestamp: "2 weeks ago",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DutyEditz YouTube</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Check out our latest gaming edits and shorts</p>
          <div className="mt-4 flex justify-center">
            <div className="flex items-center gap-4">
              <a
                href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-red-500 hover:text-red-400 transition-colors"
              >
                <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
                <span>@DutyEditz</span>
              </a>
              <YouTubeSubscriberCounter size="md" />
              <span className="text-gray-400">•</span>
              <span className="text-gray-400 text-sm">64+ videos</span>
            </div>
          </div>
        </div>

        {/* Featured Short - Most Viewed */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Most Popular Video</h3>
          <FeaturedVideo {...featuredShort} />
        </div>

        {/* Other Videos Grid */}
        <h3 className="text-2xl font-bold mb-6 text-center">Latest Videos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
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
            <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-950/20">
              View All Videos on YouTube
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
