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
      } catch (error) {
        console.error("Failed to fetch channel stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()

    // Update every 5 minutes
    const interval = setInterval(fetchStats, 300000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 ${className}`}>
      {/* Subscriber Count */}
      <div className="bg-gradient-to-br from-red-900/20 to-red-800/20 p-6 rounded-xl border border-red-500/30 text-center">
        <div className="bg-red-500/20 p-3 rounded-full w-fit mx-auto mb-4">
          <Users className="h-6 w-6 text-red-500" />
        </div>
        <h3 className="text-lg font-bold mb-2">Subscribers</h3>
        <div className="text-2xl font-bold text-red-500 mb-2">{isLoading ? "Loading..." : stats.subscriberCount}</div>
        <p className="text-gray-400 text-sm">
          {stats.isLive && <span className="text-red-400">● LIVE</span>}
          {!stats.isLive && "Growing every day!"}
        </p>
      </div>

      {/* Video Count */}
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 p-6 rounded-xl border border-purple-500/30 text-center">
        <div className="bg-purple-500/20 p-3 rounded-full w-fit mx-auto mb-4">
          <Youtube className="h-6 w-6 text-purple-500" />
        </div>
        <h3 className="text-lg font-bold mb-2">Videos</h3>
        <div className="text-2xl font-bold text-purple-500 mb-2">{isLoading ? "Loading..." : stats.videoCount}</div>
        <p className="text-gray-400 text-sm">Quality gaming content</p>
      </div>

      {/* Total Views */}
      <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 p-6 rounded-xl border border-blue-500/30 text-center">
        <div className="bg-blue-500/20 p-3 rounded-full w-fit mx-auto mb-4">
          <Eye className="h-6 w-6 text-blue-500" />
        </div>
        <h3 className="text-lg font-bold mb-2">Total Views</h3>
        <div className="text-2xl font-bold text-blue-500 mb-2">{isLoading ? "Loading..." : stats.viewCount}</div>
        <p className="text-gray-400 text-sm">Across all videos</p>
      </div>

      {/* Growth Rate */}
      <div className="bg-gradient-to-br from-pink-900/20 to-pink-800/20 p-6 rounded-xl border border-pink-500/30 text-center">
        <div className="bg-pink-500/20 p-3 rounded-full w-fit mx-auto mb-4">
          <TrendingUp className="h-6 w-6 text-pink-500" />
        </div>
        <h3 className="text-lg font-bold mb-2">Growth</h3>
        <div className="text-2xl font-bold text-pink-500 mb-2">+15%</div>
        <p className="text-gray-400 text-sm">Monthly growth rate</p>
      </div>
    </div>
  )
}
