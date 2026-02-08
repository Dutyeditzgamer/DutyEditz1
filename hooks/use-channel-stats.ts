"use client"

import { useState, useEffect } from "react"
import { getChannelStats } from "@/app/actions/youtube"

interface ChannelData {
  subscriberCount: string
  videoCount: string
  viewCount: string
  isLive: boolean
  profilePicture: string
  channelName: string
}

const DEFAULT_PROFILE = "https://yt3.googleusercontent.com/ytc/AIdro_mHMbU-f1MWEOsLqZ9fMGVnCn-0kKEqzLiB8kkDrBxh2A=s176-c-k-c0x00ffffff-no-rj"

const defaultData: ChannelData = {
  subscriberCount: "1.05K+",
  videoCount: "64+",
  viewCount: "150K+",
  isLive: false,
  profilePicture: DEFAULT_PROFILE,
  channelName: "DutyEditz",
}

// Simple in-memory cache so multiple components don't refetch
let cachedData: ChannelData | null = null
let fetchPromise: Promise<ChannelData> | null = null

async function fetchChannelData(): Promise<ChannelData> {
  if (cachedData) return cachedData
  if (fetchPromise) return fetchPromise

  fetchPromise = getChannelStats()
    .then((stats) => {
      cachedData = stats
      // Clear cache after 5 minutes
      setTimeout(() => {
        cachedData = null
        fetchPromise = null
      }, 300000)
      return stats
    })
    .catch(() => {
      fetchPromise = null
      return defaultData
    })

  return fetchPromise
}

export function useChannelStats() {
  const [data, setData] = useState<ChannelData>(cachedData || defaultData)
  const [isLoading, setIsLoading] = useState(!cachedData)

  useEffect(() => {
    let cancelled = false

    fetchChannelData().then((stats) => {
      if (!cancelled) {
        setData(stats)
        setIsLoading(false)
      }
    })

    return () => {
      cancelled = true
    }
  }, [])

  return { ...data, isLoading }
}
