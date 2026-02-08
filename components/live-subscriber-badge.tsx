"use client"

import { useState, useEffect } from "react"
import { Youtube, TrendingUp } from "lucide-react"
import { getChannelStats } from "@/app/actions/youtube"

export function LiveSubscriberBadge() {
  const [subscriberCount, setSubscriberCount] = useState<string>("1.05K+")
  const [isLoading, setIsLoading] = useState(true)
  const [isLive, setIsLive] = useState(false)

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        setIsLoading(true)
        const stats = await getChannelStats()
        setSubscriberCount(stats.subscriberCount)
        setIsLive(stats.isLive)
      } catch {
        setSubscriberCount("1.05K+")
        setIsLive(false)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubscriberCount()
    const interval = setInterval(fetchSubscriberCount, 300000)
    return () => clearInterval(interval)
  }, [])

  return (
    <a
      href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/30 rounded-full px-3 py-1.5 hover:border-red-500/50 transition-all group"
    >
      <div className="flex items-center gap-1.5">
        <Youtube className="h-4 w-4 text-red-500" />
        {isLive && (
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-xs text-red-500 font-medium">LIVE</span>
          </div>
        )}
      </div>
      <span className="text-sm font-medium text-foreground">{isLoading ? "..." : subscriberCount}</span>
      <TrendingUp className="h-3 w-3 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  )
}
