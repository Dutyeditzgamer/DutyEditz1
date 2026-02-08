"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Play, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { VideoModal } from "@/components/video-modal"

const videos = [
  {
    id: "YPBx7fIItww",
    title: "Evelyn Edit | The Last of Us Part II Character Showcase",
    views: "74K+ views",
    timestamp: "4 months ago",
    featured: true,
  },
  {
    id: "U28o9CT2Tpg",
    title: "BLOOD STRIKE: MP5 Payday Ultra | RTX 3060 Graphics Showcase",
    views: "45+ views",
    timestamp: "3 days ago",
    featured: false,
  },
  {
    id: "6VAayY8SGRE",
    title: "OG Warzone is Back? | Battle Royale Casual Gameplay",
    views: "120+ views",
    timestamp: "3 weeks ago",
    featured: false,
  },
  {
    id: "lD0EBg-AHSY",
    title: "Call of Duty: Modern Warfare | Epic Multiplayer Moments",
    views: "95+ views",
    timestamp: "2 weeks ago",
    featured: false,
  },
  {
    id: "ZMYK1_132IE",
    title: "Fortnite Victory Royale | Best Highlights & Clutch Moments",
    views: "130+ views",
    timestamp: "1 week ago",
    featured: false,
  },
  {
    id: "mhchmnYxHVo",
    title: "FarCry 4 - Aggressive Stealth Kills | No HUD 1080p Takedowns",
    views: "800+ views",
    timestamp: "1 month ago",
    featured: false,
  },
]

export default function VideosPage() {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10" />
          <img
            src="https://i.ytimg.com/vi/YPBx7fIItww/maxresdefault.jpg"
            alt="Videos background"
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
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">Our Content</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 mt-2 text-foreground">
            Videos & Edits
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Watch our gaming edits, cinematic showcases, and gameplay highlights. Click any video to watch directly, or visit our YouTube channel for the full library.
          </p>
          <div className="mt-6">
            <a
              href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span className="font-medium">@DutyEditz</span>
              <span className="text-muted-foreground">&bull; 1.05K+ subscribers</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-medium tracking-widest uppercase text-red-500 mb-4 block text-center">Most Popular</span>
            <div
              className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border hover:border-red-600/40 transition-all duration-300"
              onClick={() => setActiveVideoId("YPBx7fIItww")}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveVideoId("YPBx7fIItww")
              }}
              aria-label="Play Evelyn Edit video"
            >
              <img
                src="https://i.ytimg.com/vi/YPBx7fIItww/maxresdefault.jpg"
                alt="Evelyn Edit - The Last of Us Part II"
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-red-600 rounded-full p-5 shadow-2xl">
                  <Play className="h-10 w-10 text-white" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground">
                  Evelyn Edit | The Last of Us Part II
                </h3>
                <p className="text-muted-foreground mt-1">74K+ views &bull; 4 months ago</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Videos Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-foreground mb-8">All Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-card rounded-xl border border-border overflow-hidden hover:border-red-600/40 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <button
                    onClick={() => setActiveVideoId(video.id)}
                    className="w-full text-left"
                    aria-label={`Play ${video.title}`}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-red-600 rounded-full p-3 shadow-lg">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </div>
                    </div>
                    {video.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">FEATURED</span>
                      </div>
                    )}
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">{video.title}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{video.views}</span>
                      <span className="mx-2">&bull;</span>
                      <span>{video.timestamp}</span>
                    </div>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-red-500 transition-colors"
                      aria-label={`Open ${video.title} on YouTube`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
                <Youtube className="mr-2 h-5 w-5" /> See All Videos on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

      {/* Video Modal */}
      {activeVideoId && (
        <VideoModal
          videoId={activeVideoId}
          isOpen={true}
          onClose={() => setActiveVideoId(null)}
        />
      )}
    </div>
  )
}
