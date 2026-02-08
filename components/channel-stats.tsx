"use client"

import { useState, useEffect } from "react"
import { Users, Youtube, Eye, TrendingUp } from "lucide-react"
import { getChannelStats } from "@/app/actions/youtube"

interface ChannelStatsProps {
  className?: string
}

export function ChannelStats({ className = "" }: ChannelStatsProps) {
  const [stats, setStats] = useState({
    subscriberCount: "1.05K+",
    videoCount: "64+",
    viewCount: "150K+",
    isLive: false,
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true)
        const channelStats = await getChannelStats()
        setStats(channelStats)
      } catch {
        // Keep default values
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
    const interval = setInterval(fetchStats, 300000)
    return () => clearInterval(interval)
  }, [])

  const statItems = [
    {
      icon: <Users className="h-6 w-6 text-red-500" />,
      label: "Subscribers",
      value: isLoading ? "..." : stats.subscriberCount,
      subtitle: stats.isLive ? "LIVE" : "Growing every day!",
    },
    {
      icon: <Youtube className="h-6 w-6 text-red-500" />,
      label: "Videos",
      value: isLoading ? "..." : stats.videoCount,
      subtitle: "Quality gaming content",
    },
    {
      icon: <Eye className="h-6 w-6 text-red-500" />,
      label: "Total Views",
      value: isLoading ? "..." : stats.viewCount,
      subtitle: "Across all videos",
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-red-500" />,
      label: "Growth",
      value: "+15%",
      subtitle: "Monthly growth rate",
    },
  ]

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {statItems.map((item) => (
        <div
          key={item.label}
          className="bg-card p-6 rounded-xl border border-border text-center hover:border-red-600/30 transition-colors"
        >
          <div className="bg-red-600/10 p-3 rounded-lg w-fit mx-auto mb-4">
            {item.icon}
          </div>
          <h3 className="text-sm font-medium text-muted-foreground mb-2">{item.label}</h3>
          <div className="text-2xl font-display font-bold text-foreground mb-1">{item.value}</div>
          <p className="text-muted-foreground text-xs">{item.subtitle}</p>
        </div>
      ))}
    </div>
  )
}
