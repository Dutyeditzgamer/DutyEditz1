import { Star } from "lucide-react"
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
    <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/30 transition-all">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-500"}`} />
          ))}
        </div>
        <p className="text-gray-300 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          <img src={image || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
          <div>
            <h4 className="font-bold">{name}</h4>
            <p className="text-sm text-gray-400">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
