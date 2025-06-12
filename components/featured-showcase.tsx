"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { VideoModal } from "@/components/video-modal"

export function FeaturedShowcase() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Showcase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out our premium gameplay edits and stealth kills compilation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setIsVideoModalOpen(true)}
          >
            <img
              src="https://i.ytimg.com/vi/mhchmnYxHVo/maxresdefault.jpg"
              alt="FarCry 4 Stealth Kills Showcase"
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-red-600 rounded-full p-5">
                <Play className="h-10 w-10 text-white" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h3 className="text-xl md:text-2xl font-bold text-white">FarCry®4 - Aggressive Stealth Kills</h3>
              <p className="text-gray-300 mt-2">No HUD 1080p - Takedowns Only (800 Subs Special)</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Play className="mr-2 h-5 w-5" fill="currentColor" /> Watch Full Showcase
            </Button>
          </div>
        </div>
      </div>

      <VideoModal videoId="mhchmnYxHVo" isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </section>
  )
}
