"use client"

import { useState } from "react"
import { Play, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"

export function FeaturedShowcase() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">Most Popular</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">Featured Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our most viral edit with over 74K views -- watch the Evelyn Edit from The Last of Us Part II
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden group cursor-pointer border border-border hover:border-red-600/40 transition-all duration-300"
            onClick={() => setIsVideoModalOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsVideoModalOpen(true)
              }
            }}
            aria-label="Play featured video: Evelyn Edit from The Last of Us Part II"
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
              <div className="flex items-center gap-3 mt-2">
                <div className="flex items-center text-red-500">
                  <Eye className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">74K+ views</span>
                </div>
                <span className="text-muted-foreground text-sm">#fypyoutube #edit</span>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-red-600 text-white hover:bg-red-700"
            >
              <Play className="mr-2 h-5 w-5" fill="currentColor" /> Watch Full Showcase
            </Button>
          </div>
        </div>
      </div>

      <VideoModal videoId="YPBx7fIItww" isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  )
}
