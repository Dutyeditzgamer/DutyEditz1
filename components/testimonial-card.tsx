import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
  rating: number
}

export default function TestimonialCard({ name, role, image, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-card border-border hover:border-red-600/30 transition-all duration-300">
      <CardContent className="pt-6">
        <Quote className="h-8 w-8 text-red-600/30 mb-3" />
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-muted"}`}
            />
          ))}
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed">&quot;{quote}&quot;</p>
        <div className="flex items-center gap-3">
          <img
            src={image || "/placeholder.svg"}
            alt={name}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-border"
          />
          <div>
            <h4 className="font-bold text-foreground text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
