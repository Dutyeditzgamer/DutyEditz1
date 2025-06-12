"use server"

interface YouTubeChannelStats {
  subscriberCount: string
  videoCount: string
  viewCount: string
  isLive: boolean
}

export async function getChannelStats(): Promise<YouTubeChannelStats> {
  const channelId = "UCwhNE66uZNJGbNjG9FWKpYg" // DutyEditz Channel ID
  const apiKey = process.env.YOUTUBE_API_KEY // Server-side only, no NEXT_PUBLIC_ prefix

  try {
    if (!apiKey) {
      // Return fallback data if no API key
      return {
        subscriberCount: "1.05K+",
        videoCount: "64+",
        viewCount: "150K+",
        isLive: false,
      }
    }

    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
      },
    )

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube data")
    }

    const data = await response.json()

    if (data.items && data.items.length > 0) {
      const stats = data.items[0].statistics
      const subscriberCount = Number.parseInt(stats.subscriberCount)
      const videoCount = Number.parseInt(stats.videoCount)
      const viewCount = Number.parseInt(stats.viewCount)

      // Format numbers
      const formatCount = (count: number): string => {
        if (count >= 1000000) {
          return (count / 1000000).toFixed(1) + "M"
        } else if (count >= 1000) {
          return (count / 1000).toFixed(1) + "K"
        }
        return count.toLocaleString()
      }

      return {
        subscriberCount: formatCount(subscriberCount),
        videoCount: formatCount(videoCount),
        viewCount: formatCount(viewCount),
        isLive: true,
      }
    }

    // Fallback if no data
    return {
      subscriberCount: "1.05K+",
      videoCount: "64+",
      viewCount: "150K+",
      isLive: false,
    }
  } catch (error) {
    console.error("Failed to fetch YouTube stats:", error)

    // Return fallback data on error
    return {
      subscriberCount: "1.05K+",
      videoCount: "64+",
      viewCount: "150K+",
      isLive: false,
    }
  }
}
