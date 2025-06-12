"use client"

import { useState, useEffect } from "react"
import { Youtube } from "lucide-react"
import { getChannelStats } from "@/app/actions/youtube"

interface SubscriberCounterProps {
  className?: string
  showIcon?: boolean
  size?: "sm" | "md" | "lg"
}

export function YouTubeSubscriberCounter({ className = "", showIcon = true, size = "sm" }: SubscriberCounterProps) {
  const [subscriberCount, setSubscriberCount] = useState<string>("1.05K+")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const stats = await getChannelStats()
        setSubscriberCount(stats.subscriberCount)
      } catch (error) {
        console.error("Failed to fetch subscriber count:", error)
        setError("Failed to load")
        setSubscriberCount("1.05K+")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubscriberCount()

    // Update every 5 minutes
    const interval = setInterval(fetchSubscriberCount, 300000)

    return () => clearInterval(interval)
  }, [])

  const getSizeClasses = () => {
    switch (size) {
      case "lg":
        return "text-lg"
      case "md":
        return "text-base"
      case "sm":
      default:
        return "text-sm"
    }
  }

  const getIconSize = () => {
    switch (size) {
      case "lg":
        return "h-5 w-5"
      case "md":
        return "h-4 w-4"
      case "sm":
      default:
        return "h-4 w-4"
    }
  }

  if (error && !subscriberCount) {
    return null
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showIcon && <Youtube className={`${getIconSize()} text-red-500`} />}
      <span className={`font-medium text-gray-300 ${getSizeClasses()}`}>
        {isLoading ? "Loading..." : `${subscriberCount} subscribers`}
      </span>
    </div>
  )
}
