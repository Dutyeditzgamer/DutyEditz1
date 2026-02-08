import { Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface GameCardProps {
  title: string
  image: string
  category: string
  rating: number
}

export default function GameCard({ title, image, category, rating }: GameCardProps) {
  return (
    <Card className="bg-card border-border overflow-hidden hover:border-red-600/40 transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        <Badge className="absolute top-3 right-3 bg-red-600 text-white hover:bg-red-700 border-none">
          {category}
        </Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-lg font-display font-bold text-foreground mb-2">{title}</h3>
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(rating) ? "text-amber-500 fill-amber-500" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-muted-foreground text-sm">{rating.toFixed(1)}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Link href="/games" className="w-full">
          <button className="w-full py-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">
            View Details
          </button>
        </Link>
      </CardFooter>
    </Card>
  )
}
