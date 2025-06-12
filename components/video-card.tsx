import { Play } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface VideoCardProps {
  title: string
  thumbnail: string
  views: string
  timestamp: string
}

export default function VideoCard({ title, thumbnail, views, timestamp }: VideoCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all group">
      <div className="relative overflow-hidden">
        <img
          src={thumbnail || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-red-600 rounded-full p-3">
            <Play className="h-6 w-6 text-white" fill="white" />
          </div>
        </div>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-400">
          <span>{views} views</span>
          <span className="mx-2">•</span>
          <span>{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  )
}
