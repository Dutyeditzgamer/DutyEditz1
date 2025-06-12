import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface GameCardProps {
  title: string
  image: string
  category: string
  rating: number
}

export default function GameCard({ title, image, category, rating }: GameCardProps) {
  return (
    <Card className="bg-gray-800/50 border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all group">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-purple-600 hover:bg-purple-700">{category}</Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`}
              />
            ))}
          </div>
          <span className="text-gray-400 text-sm">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <button className="w-full py-2 text-sm font-medium text-purple-500 hover:text-purple-400 transition-colors">
          View Details
        </button>
      </CardFooter>
    </Card>
  )
}
