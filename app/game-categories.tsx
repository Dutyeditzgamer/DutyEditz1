import type React from "react"
import { Gamepad2, Target, Trophy, Bomb } from "lucide-react"

interface GameCategoryProps {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const GameCategory = ({ icon, title, description, color }: GameCategoryProps) => (
  <div
    className={`bg-gray-800/50 p-6 rounded-xl border border-${color}-500/20 hover:border-${color}-500/50 transition-all`}
  >
    <div className={`bg-${color}-500/20 p-3 rounded-lg w-fit mb-4`}>{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
)

export default function GameCategories() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Categories</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We specialize in creating content for various gaming genres</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <GameCategory
            icon={<Target className="h-6 w-6 text-purple-500" />}
            title="FPS Games"
            description="First-person shooters like Call of Duty, Battlefield, and Counter-Strike"
            color="purple"
          />
          <GameCategory
            icon={<Bomb className="h-6 w-6 text-pink-500" />}
            title="Battle Royale"
            description="Last-man-standing games like Fortnite, Warzone, and Apex Legends"
            color="pink"
          />
          <GameCategory
            icon={<Trophy className="h-6 w-6 text-purple-500" />}
            title="Competitive"
            description="Esports and competitive gaming highlights and strategies"
            color="purple"
          />
          <GameCategory
            icon={<Gamepad2 className="h-6 w-6 text-pink-500" />}
            title="RPG & Adventure"
            description="Role-playing and adventure games like Baldur's Gate and Elden Ring"
            color="pink"
          />
        </div>
      </div>
    </section>
  )
}
