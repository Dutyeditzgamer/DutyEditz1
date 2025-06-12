import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, Menu, HelpCircle, Youtube } from "lucide-react"
import { LiveSubscriberBadge } from "@/components/live-subscriber-badge"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/dutyeditz-new-logo.jpeg"
              alt="DutyEditz Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="hidden md:inline-block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              DutyEditz
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            Home
          </Link>
          <Link href="/videos" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            Videos
          </Link>
          <Link href="/games" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            Games
          </Link>
          <Link href="#" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            Services
          </Link>
          <Link href="#" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            About
          </Link>
          <Link href="#" className="font-medium text-gray-400 hover:text-purple-400 transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* Live Subscriber Badge */}
          <div className="hidden lg:block">
            <LiveSubscriberBadge />
          </div>

          <a
            href="mailto:chamilakusumsiri936@gmail.com"
            className="hidden md:flex items-center text-gray-400 hover:text-purple-400 transition-colors"
          >
            <HelpCircle className="h-5 w-5 mr-1" />
            <span className="text-sm">Help</span>
          </a>

          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <a
            href="https://youtube.com/@dutyeditz?si=A4T_oGPsxdTz9b6j"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex"
          >
            <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800">
              <Youtube className="mr-2 h-4 w-4" /> Subscribe
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
