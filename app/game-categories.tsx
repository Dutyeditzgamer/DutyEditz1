import type React from "react"
import { Gamepad2, Target, Trophy, Bomb } from "lucide-react"

interface GameCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
}

const GameCategory = ({ icon, title, description }: GameCategoryProps) => (
  <div className="bg-card p-6 rounded-xl border border-border hover:border-red-600/40 transition-all duration-300 group">
    <div className="bg-red-600/10 p-3 rounded-lg w-fit mb-4 group-hover:bg-red-600/20 transition-colors">
      {icon}
    </div>
    <h3 className="text-lg font-display font-bold text-foreground mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
)

export default function GameCategories() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-red-500">What We Cover</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 mt-2 text-foreground">Game Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We specialize in creating content for the most popular gaming genres
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <GameCategory
            icon={<Target className="h-6 w-6 text-red-500" />}
            title="FPS Games"
            description="First-person shooters like Call of Duty, Battlefield, and Counter-Strike"
          />
          <GameCategory
            icon={<Bomb className="h-6 w-6 text-red-500" />}
            title="Battle Royale"
            description="Last-man-standing games like Fortnite, Warzone, and Apex Legends"
          />
          <GameCategory
            icon={<Trophy className="h-6 w-6 text-red-500" />}
            title="Competitive"
            description="Esports and competitive gaming highlights and strategies"
          />
          <GameCategory
            icon={<Gamepad2 className="h-6 w-6 text-red-500" />}
            title="RPG & Adventure"
            description="Role-playing and adventure games like Baldur's Gate and Elden Ring"
          />
        </div>
      </div>
    </section>
  )
}
